import type { Cartesian3, Viewer } from "cesium"
import * as Cesium from "cesium"

import Base from "./base"
import { MapEventSource } from "./event-source"
import EventDispatcher from "./events"
import {
  EventListener,
  EventType,
  GeometryStyle,
  PlotData,
  Point
} from "./interface"
import { defaultRegistry, ShapeDefinition, ShapeRegistry } from "./registry"

/** 门面层统一事件负载 */
export interface PlotEventData {
  /** 注册表键 */
  type: string
  /** 图形实例 */
  instance: Base
  /** 图形原始事件负载(如坐标数组) */
  data?: unknown
}

export interface PlotManagerOptions {
  /** 注入外部事件源(如 map-core 统一鼠标事件);缺省使用 viewer 级共享事件源 */
  eventSource?: MapEventSource
  /** 图形注册表,缺省使用内置 defaultRegistry */
  registry?: ShapeRegistry
  /** 绘制中按 ESC 取消,默认 true */
  cancelOnEsc?: boolean
}

const MANAGED_EVENTS: EventType[] = [
  "drawStart",
  "drawUpdate",
  "drawEnd",
  "editStart",
  "editEnd",
  "drawCancel"
]

/** [lng, lat] 控制点转 Cartesian3 */
export function positionsToCartesians(positions: Point[]): Cartesian3[] {
  return positions.map(([lng, lat]) => Cesium.Cartesian3.fromDegrees(lng, lat))
}

/**
 * 由已就绪的控制点(Cartesian3)直接落图:
 * 校验最少点数、静态呈现(不挂控制点,点击图形仍可进入编辑)。
 * 数据驱动绘制(PlotManager.createFromData / createFromData)与
 * 兼容入口 createGeometryFromData 共用本函数。
 */
export function placeShape(
  viewer: Viewer,
  type: string,
  cartesianPoints: Cartesian3[],
  style?: GeometryStyle,
  eventSource?: MapEventSource,
  registry: ShapeRegistry = defaultRegistry
): Base {
  const definition = registry.require(type)
  const instance = new definition.ctor(viewer, style, eventSource)
  const minimum = instance.minPointsForShape
  if (minimum && cartesianPoints.length < minimum) {
    instance.remove()
    throw new Error(
      `Shape "${definition.type}" requires at least ${minimum} positions, got ${cartesianPoints.length}`
    )
  }
  instance.points = cartesianPoints
  const geometryPoints = instance.createGraphic(cartesianPoints)
  instance.setGeometryPoints(geometryPoints)
  if (instance.type === "polygon") {
    instance.drawPolygon()
  } else {
    instance.drawLine()
  }
  instance.setState("static")
  const entity = instance.polygonEntity || instance.lineEntity
  if (entity) {
    instance.entityId = entity.id as string
  }
  return instance
}

/**
 * 统一绘制门面(每个 viewer 一个实例):
 * 交互绘制 activate/cancel、数据驱动绘制 createFromData、
 * 图形注册 register、统一五段式事件 + drawCancel。
 *
 * 事件源默认为 viewer 级共享的单一 ScreenSpaceEventHandler,
 * 可通过 setEventSource/构造参数注入外部事件源(多播语义)。
 */
export class PlotManager {
  private viewer: Viewer
  private registry: ShapeRegistry
  private eventSource: MapEventSource | undefined
  private cancelOnEsc: boolean
  private dispatcher = new EventDispatcher()
  private active: { type: string; instance: Base } | null = null
  private tracked = new Set<Base>()
  private escHandler: ((event: KeyboardEvent) => void) | null = null

  constructor(viewer: Viewer, options: PlotManagerOptions = {}) {
    this.viewer = viewer
    this.registry = options.registry ?? defaultRegistry
    this.eventSource = options.eventSource
    this.cancelOnEsc = options.cancelOnEsc ?? true
  }

  /** 注入外部事件源;只影响之后创建的图形 */
  setEventSource(source: MapEventSource) {
    this.eventSource = source
  }

  /** 注册(或覆盖)自定义图形,与内置图形同一通道 */
  register(definition: ShapeDefinition): this {
    this.registry.register(definition)
    return this
  }

  registerAlias(alias: string, type: string): this {
    this.registry.registerAlias(alias, type)
    return this
  }

  unregister(type: string): boolean {
    return this.registry.unregister(type)
  }

  listShapes(): ShapeDefinition[] {
    return this.registry.list()
  }

  /** 开始交互绘制指定图形,返回图形实例 */
  activate(type: string, options: { style?: GeometryStyle } = {}): Base {
    const definition = this.registry.require(type)
    if (this.active) {
      this.deactivate()
    }
    const instance = new definition.ctor(
      this.viewer,
      options.style,
      this.eventSource
    )
    this.active = { type, instance }
    this.track(type, instance)
    this.bindEsc()
    return instance
  }

  /** 结束当前绘制(等价于双击完成) */
  deactivate() {
    if (!this.active) {
      return
    }
    const { instance } = this.active
    this.active = null
    this.unbindEsc()
    if (instance.getState() === "drawing") {
      instance.finishDrawing()
    }
  }

  /** 取消当前绘制并移除未完成的图形 */
  cancel() {
    if (!this.active) {
      return
    }
    const { type, instance } = this.active
    this.active = null
    this.unbindEsc()
    if (instance.getState() === "drawing") {
      instance.remove()
      this.tracked.delete(instance)
      this.dispatcher.dispatchEvent("drawCancel", { type, instance })
    }
  }

  /** 数据驱动绘制:由序列化点位([lng, lat])直接落图 */
  createFromData(data: PlotData): Base {
    const definition = this.registry.require(data.type)
    const instance = placeShape(
      this.viewer,
      definition.type,
      positionsToCartesians(data.positions),
      data.style,
      this.eventSource,
      this.registry
    )
    this.track(definition.type, instance)
    return instance
  }

  /** 导出图形的可序列化数据(positions 为经纬度) */
  getData(shape: Base): PlotData | undefined {
    const positions = shape.getPoints().map((p) => shape.cartesianToLnglat(p))
    if (!positions.length) {
      return undefined
    }
    return {
      type: this.registry.typeOf(shape) ?? shape.constructor.name,
      positions,
      style: shape.style,
      id: shape.entityId || undefined
    }
  }

  /** 当前激活(绘制中)的图形 */
  getActiveShape(): Base | null {
    return this.active?.instance ?? null
  }

  /** 移除所有由本管理器创建的图形并解绑全局监听(不销毁注入的事件源) */
  destroy() {
    this.cancel()
    this.deactivate()
    this.tracked.forEach((instance) => instance.remove())
    this.tracked.clear()
    this.dispatcher.clear()
  }

  on(event: EventType, listener: (data: PlotEventData) => void) {
    this.dispatcher.on(event, listener as EventListener)
  }

  off(event: EventType, listener: (data: PlotEventData) => void) {
    this.dispatcher.off(event, listener as EventListener)
  }

  private track(type: string, instance: Base) {
    this.tracked.add(instance)
    for (const event of MANAGED_EVENTS) {
      instance.on(event, (data) => {
        this.dispatcher.dispatchEvent(event, { type, instance, data })
      })
    }
  }

  private bindEsc() {
    if (!this.cancelOnEsc || this.escHandler) {
      return
    }
    this.escHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        this.cancel()
      }
    }
    window.addEventListener("keydown", this.escHandler)
  }

  private unbindEsc() {
    if (!this.escHandler) {
      return
    }
    window.removeEventListener("keydown", this.escHandler)
    this.escHandler = null
  }
}

/** 独立使用(不经 PlotManager)的数据驱动绘制入口 */
export function createFromData(viewer: Viewer, data: PlotData): Base {
  const definition = defaultRegistry.require(data.type)
  return placeShape(
    viewer,
    definition.type,
    positionsToCartesians(data.positions),
    data.style
  )
}

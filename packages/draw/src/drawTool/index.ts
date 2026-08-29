import type { Viewer } from "cesium"

import { itemManager } from "../drawMethods/manager/primitive"
import EventDispatcher from "../plot/events"
import type { EventType } from "../plot/interface"
import { defaultShapes } from "./shapes"

export type {
  ShapeDefinition,
  ShapeInstance,
  ShapeKind,
  ShapeStyle
} from "./shapes"

export interface DrawEventData {
  /** 触发事件的图形类型（注册表 key） */
  shape: string
  /** primitive 系：绘制完成的图形实例 */
  instance?: any
  /** entity 系：plot 原始事件负载（如坐标数组） */
  data?: any
}

const UNIFIED_EVENTS: EventType[] = [
  "drawStart",
  "drawUpdate",
  "drawEnd",
  "editStart",
  "editEnd"
]

/**
 * 统一绘制门面：按形状注册表分发到 primitive / entity 两套渲染后端，
 * 对外提供一致的 activate/deactivate 与五段式事件（drawStart/drawUpdate/drawEnd/editStart/editEnd）
 */
export class DrawTool {
  private viewer: Viewer | null = null
  private registry: Map<string, ShapeDefinition> = new Map(
    Object.entries(defaultShapes)
  )
  private dispatcher = new EventDispatcher()
  private active: { shape: string; instance: any } | null = null

  /** 初始化（内部同时初始化 primitive 系的 itemManager） */
  init(viewer: Viewer) {
    this.viewer = viewer
    itemManager.init(viewer)
  }

  /** 注册或覆盖图形实现 */
  registerShape(type: string, definition: ShapeDefinition) {
    this.registry.set(type, definition)
  }

  listShapes(): string[] {
    return [...this.registry.keys()]
  }

  /** 开始绘制指定图形，返回图形实例 */
  activate(type: string, options?: { style?: any }): any {
    const definition = this.registry.get(type)
    if (!definition) {
      throw new Error(
        `Unknown shape type: ${type} (available: ${this.listShapes().join(
          ", "
        )})`
      )
    }
    if (!this.viewer) {
      throw new Error("DrawTool is not initialized. Call init(viewer) first.")
    }
    if (this.active) {
      this.deactivate()
    }

    if (definition.kind === "primitive") {
      const instance = definition.create(
        this.viewer,
        (finished) => {
          this.dispatcher.dispatchEvent("drawEnd", {
            shape: type,
            instance: finished
          })
        },
        options?.style
      )
      this.active = { shape: type, instance }
      this.dispatcher.dispatchEvent("drawStart", { shape: type })
      return instance
    }

    const instance = definition.create(this.viewer, () => {}, options?.style)
    for (const event of UNIFIED_EVENTS) {
      instance.on(event, (data: any) => {
        this.dispatcher.dispatchEvent(event, { shape: type, data })
      })
    }
    this.active = { shape: type, instance }
    return instance
  }

  /** 结束当前绘制（entity 系会触发 drawEnd；primitive 系仅解除激活） */
  deactivate() {
    if (!this.active) return
    const { instance } = this.active
    if (
      instance &&
      typeof instance.finishDrawing === "function" &&
      instance.state === "drawing"
    ) {
      instance.finishDrawing()
    }
    this.active = null
  }

  on(event: EventType, listener: (data: DrawEventData) => void) {
    this.dispatcher.on(event, listener as any)
  }

  off(event: EventType, listener: (data: DrawEventData) => void) {
    this.dispatcher.off(event, listener as any)
  }

  /** 清空 primitive 系已绘制图形并解除当前激活状态 */
  clear() {
    this.deactivate()
    itemManager.removeAll()
  }
}

export const drawTool = new DrawTool()

import type { Cartesian2, Viewer } from "cesium"
import * as Cesium from "cesium"

/**
 * plot 消费的屏幕事件键:直接复用 Cesium 的事件枚举成员,不另造平行词汇。
 * 注入方(map-core 等)按此集合提供事件,缺项会在绘制交互上直接体现。
 */
export type ScreenEventKey =
  | Cesium.ScreenSpaceEventType.LEFT_CLICK
  | Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
  | Cesium.ScreenSpaceEventType.MOUSE_MOVE
  | Cesium.ScreenSpaceEventType.LEFT_DOWN
  | Cesium.ScreenSpaceEventType.LEFT_UP

/** 点击/按下/释放类事件载荷(结构化定义,Cesium 原生 movement 自动满足) */
export interface PositionEvent {
  position: Cartesian2
}

/** 移动类事件载荷 */
export interface MoveEvent {
  startPosition: Cartesian2
  endPosition: Cartesian2
}

export type ScreenEventPayload = PositionEvent | MoveEvent

export type ScreenEventListener = (payload: ScreenEventPayload) => void

/**
 * 事件源契约(可注入)。
 *
 * 语义要求:
 * - 多播:同一事件类型下多个 listener 必须全部触发。
 *   Cesium `setInputAction` 的"后设覆盖"语义不满足本契约,不能直接冒充。
 * - 生命周期归拥有者:消费方只能 on/off,不得销毁事件源。
 */
export interface MapEventSource {
  on(type: ScreenEventKey, listener: ScreenEventListener): void
  off(type: ScreenEventKey, listener: ScreenEventListener): void
}

const DISPATCHED_EVENT_TYPES: ScreenEventKey[] = [
  Cesium.ScreenSpaceEventType.LEFT_CLICK,
  Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK,
  Cesium.ScreenSpaceEventType.MOUSE_MOVE,
  Cesium.ScreenSpaceEventType.LEFT_DOWN,
  Cesium.ScreenSpaceEventType.LEFT_UP
]

/** 默认事件源:每个 viewer 持有唯一的 ScreenSpaceEventHandler,多播分发 */
export class CesiumEventSource implements MapEventSource {
  private viewer: Viewer
  private handler: Cesium.ScreenSpaceEventHandler
  private listeners = new Map<ScreenEventKey, Set<ScreenEventListener>>()

  constructor(viewer: Viewer) {
    this.viewer = viewer
    this.handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
    for (const type of DISPATCHED_EVENT_TYPES) {
      this.listeners.set(type, new Set())
      this.handler.setInputAction(
        (movement: ScreenEventPayload) => this.dispatch(type, movement),
        type
      )
    }
  }

  private dispatch(type: ScreenEventKey, movement: ScreenEventPayload) {
    const set = this.listeners.get(type)
    if (set) {
      // 拷贝后遍历,允许 listener 在回调内安全地 off
      for (const listener of [...set]) {
        listener(movement)
      }
    }
    // requestRenderMode 宿主下,事件驱动的几何更新需要手动请求渲染
    if (this.viewer.scene.requestRenderMode) {
      this.viewer.scene.requestRender()
    }
  }

  on(type: ScreenEventKey, listener: ScreenEventListener) {
    this.listeners.get(type)?.add(listener)
  }

  off(type: ScreenEventKey, listener: ScreenEventListener) {
    this.listeners.get(type)?.delete(listener)
  }

  destroy() {
    this.handler.destroy()
    this.listeners.clear()
  }
}

const sharedSources = new WeakMap<Viewer, CesiumEventSource>()

/** 取 viewer 级共享事件源(懒创建):即使独立使用图形类,全 viewer 也只有一个 handler */
export function getSharedEventSource(viewer: Viewer): CesiumEventSource {
  let source = sharedSources.get(viewer)
  if (!source) {
    source = new CesiumEventSource(viewer)
    sharedSources.set(viewer, source)
  }
  return source
}

/**
 * 销毁共享事件源(随 viewer 生命周期调用)。
 * 注入式外部事件源的销毁归其拥有者,plot 不代管。
 */
export function destroySharedEventSource(viewer: Viewer) {
  sharedSources.get(viewer)?.destroy()
  sharedSources.delete(viewer)
}

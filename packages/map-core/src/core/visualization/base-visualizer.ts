import { Entity, Viewer } from "cesium"
import { BaseEntity } from "../data-management"

// 可视化选项接口
export interface VisualizerOptions {
  style?: Record<string, any>
  properties?: Record<string, any>
}

// 可视化器基类
export abstract class BaseVisualizer<T extends BaseEntity> {
  protected viewer: Viewer
  protected options: VisualizerOptions

  constructor(viewer: Viewer, options: VisualizerOptions = {}) {
    this.viewer = viewer
    this.options = options
  }

  // 可视化单个实体
  abstract visualize(entity: T): Entity | Entity[]

  // 更新可视化样式
  abstract updateStyle(entity: Entity, style: Record<string, any>): void

  // 清除可视化效果
  abstract clear(entity: Entity): void
}

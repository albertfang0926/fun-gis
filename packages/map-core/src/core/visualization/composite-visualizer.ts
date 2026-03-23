import { Entity } from "cesium"
import { BaseVisualizer, VisualizerOptions } from "./base-visualizer"
import { CompositeEntity, CompositeType } from "../data-management"

export class CompositeVisualizer extends BaseVisualizer<CompositeEntity> {
  private visualizers: Map<CompositeType, BaseVisualizer<any>> = new Map()

  registerVisualizer(type: CompositeType, visualizer: BaseVisualizer<any>) {
    this.visualizers.set(type, visualizer)
  }

  visualize(compositeEntity: CompositeEntity): Entity[] {
    const visualizer = this.visualizers.get(compositeEntity.type)
    if (!visualizer) {
      throw new Error(
        `No visualizer registered for type: ${compositeEntity.type}`
      )
    }

    return compositeEntity.children.map((child) => visualizer.visualize(child))
  }

  updateStyle(entities: Entity[], style: Record<string, any>): void {
    entities.forEach((entity) => {
      // 根据复合实体类型选择合适的可视化器更新样式
      const visualizer = this.findVisualizerForEntity(entity)
      if (visualizer) {
        visualizer.updateStyle(entity, style)
      }
    })
  }

  clear(entities: Entity[]): void {
    entities.forEach((entity) => {
      const visualizer = this.findVisualizerForEntity(entity)
      if (visualizer) {
        visualizer.clear(entity)
      }
    })
  }

  private findVisualizerForEntity(
    entity: Entity
  ): BaseVisualizer<any> | undefined {
    // 根据实体特征找到对应的可视化器
    // 这里需要实现查找逻辑
    return undefined
  }
}

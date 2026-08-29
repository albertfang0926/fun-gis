import { Entity } from "cesium"

import { CompositeEntity, CompositeType } from "../data-manager"
import { BaseVisualizer } from "./base-visualizer"

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

    return compositeEntity.children.flatMap((child) =>
      visualizer.visualize(child)
    )
  }

  updateStyle(
    compositeEntity: CompositeEntity,
    style: Record<string, any>
  ): void {
    const visualizer = this.visualizers.get(compositeEntity.type)
    if (!visualizer) return

    compositeEntity.children.forEach((child) => {
      visualizer.updateStyle(child, style)
    })
  }

  clear(compositeEntity: CompositeEntity): void {
    const visualizer = this.visualizers.get(compositeEntity.type)
    if (!visualizer) return

    compositeEntity.children.forEach((child) => {
      visualizer.clear(child)
    })
  }
}

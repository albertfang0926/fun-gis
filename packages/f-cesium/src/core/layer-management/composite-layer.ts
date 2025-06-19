import { BaseLayer, LayerOptions } from "./base-layer"
import { DataManager, CompositeType } from "../data-management"

export interface CompositeLayerOptions extends LayerOptions {
  compositeType?: CompositeType
}

export class CompositeLayer extends BaseLayer {
  private compositeType: CompositeType

  constructor(options: CompositeLayerOptions, dataManager: DataManager) {
    super(options, dataManager)
    this.compositeType = options.compositeType || CompositeType.Custom
  }

  setVisibility(visible: boolean) {
    this.visible = visible
    this.entityIds.forEach((id) => {
      this.dataManager.setEntityVisibility(id, visible)
    })
    // 复合图层可能需要特殊的可见性处理
    this.emit("visibilityChanged", visible)
  }

  setStyle(style: Record<string, any>) {
    this.style = { ...this.style, ...style }
    // 实现复合图层特定的样式更新逻辑
    this.emit("styleChanged", this.style)
  }

  update(options: Record<string, any>) {
    Object.assign(this.properties, options)
    // 实现复合图层特定的更新逻辑
    if (options.compositeType) {
      this.compositeType = options.compositeType
    }
    this.emit("updated", this.properties)
  }

  clear() {
    this.entityIds.forEach((id) => {
      this.dataManager.removeEntity(id)
    })
    this.entityIds = []
    this.emit("cleared")
  }

  // 复合图层特有的方法
  getCompositeType(): CompositeType {
    return this.compositeType
  }
}

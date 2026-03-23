import { BaseLayer, LayerOptions } from "./base-layer"
import { DataManager } from "../data-management"

export interface DrawLayerOptions extends LayerOptions {
  drawType?: string
}

export class DrawLayer extends BaseLayer {
  private drawType: string

  constructor(options: DrawLayerOptions, dataManager: DataManager) {
    super(options, dataManager)
    this.drawType = options.drawType || "default"
  }

  setVisibility(visible: boolean) {
    this.visible = visible
    this.entityIds.forEach((id) => {
      this.dataManager.setEntityVisibility(id, visible)
    })
    this.emit("visibilityChanged", visible)
  }

  setStyle(style: Record<string, any>) {
    this.style = { ...this.style, ...style }
    // 实现绘制图层特定的样式更新逻辑
    this.emit("styleChanged", this.style)
  }

  update(options: Record<string, any>) {
    Object.assign(this.properties, options)
    // 实现绘制图层特定的更新逻辑
    this.emit("updated", this.properties)
  }

  clear() {
    this.entityIds.forEach((id) => {
      this.dataManager.removeEntity(id)
    })
    this.entityIds = []
    this.emit("cleared")
  }
}

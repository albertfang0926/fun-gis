import { DataManager } from "@fun-gis/entity-manager"

import { BaseLayer, LayerOptions } from "./base-layer"

export interface DrawLayerOptions extends LayerOptions {
  drawType?: string
}

/** @deprecated 使用 layer-system 模块中的 EntityLayerProvider 替代 */
export class DrawLayer extends BaseLayer {
  constructor(options: DrawLayerOptions, dataManager: DataManager) {
    super(options, dataManager)
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

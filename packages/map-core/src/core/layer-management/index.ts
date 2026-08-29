/** @deprecated 使用 layer-system 模块中的 LayerManager 替代 */
import { DataManager } from "@fun-gis/entity-manager"
import { Scene } from "cesium"

import { EventEmitter } from "../event"
import { BaseLayer, LayerOptions } from "./base-layer"
import { CompositeLayer, CompositeLayerOptions } from "./composite-layer"
import { DrawLayer, DrawLayerOptions } from "./draw-layer"

export enum LayerType {
  Draw = "draw",
  Composite = "composite",
  Custom = "custom"
}

export interface CustomLayerOptions extends LayerOptions {
  layerFactory: (options: LayerOptions, dataManager: DataManager) => BaseLayer
}

export class LayerManager extends EventEmitter {
  private layers: Map<string, BaseLayer> = new Map()
  private dataManager: DataManager

  constructor(_scene: Scene, dataManager: DataManager) {
    super()
    this.dataManager = dataManager
  }

  createLayer(
    type: LayerType,
    options: DrawLayerOptions | CompositeLayerOptions | CustomLayerOptions
  ): string {
    let layer: BaseLayer

    switch (type) {
      case LayerType.Draw:
        layer = new DrawLayer(options as DrawLayerOptions, this.dataManager)
        break
      case LayerType.Composite:
        layer = new CompositeLayer(
          options as CompositeLayerOptions,
          this.dataManager
        )
        break
      case LayerType.Custom:
        // 允许通过自定义工厂创建图层
        if (!("layerFactory" in options)) {
          throw new Error("Layer factory is required for custom layer type")
        }
        layer = options.layerFactory(options, this.dataManager)
        break
      default:
        throw new Error(`Unsupported layer type: ${type}`)
    }

    this.layers.set(layer.id, layer)
    this.emit("layerCreated", layer)
    return layer.id
  }

  getLayer<T extends BaseLayer>(layerId: string): T | undefined {
    return this.layers.get(layerId) as T
  }

  removeLayer(layerId: string, removeEntities = false) {
    const layer = this.layers.get(layerId)
    if (layer) {
      if (removeEntities) {
        layer.clear()
      }
      this.layers.delete(layerId)
      this.emit("layerRemoved", layerId)
    }
  }

  getAllLayers(): BaseLayer[] {
    return Array.from(this.layers.values())
  }
}

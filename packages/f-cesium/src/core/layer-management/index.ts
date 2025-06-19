import { Scene } from "cesium"
import { EventEmitter } from "../event"
import { DataManager } from "../data-management"
import { BaseLayer } from "./base-layer"
import { DrawLayer, DrawLayerOptions } from "./draw-layer"
import { CompositeLayer, CompositeLayerOptions } from "./composite-layer"

export enum LayerType {
  Draw = "draw",
  Composite = "composite",
  Custom = "custom"
}

export class LayerManager extends EventEmitter {
  private layers: Map<string, BaseLayer> = new Map()
  private dataManager: DataManager
  private scene: Scene

  constructor(scene: Scene, dataManager: DataManager) {
    super()
    this.scene = scene
    this.dataManager = dataManager
  }

  createLayer(
    type: LayerType,
    options: DrawLayerOptions | CompositeLayerOptions
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
        if (!options.layerFactory) {
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

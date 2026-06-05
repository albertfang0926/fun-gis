import { Viewer } from "cesium"
import { EventEmitter } from "../../event"
import { LayerStore } from "./layer-store"
import { ProviderRegistry } from "../providers"

export class ViewerBridge extends EventEmitter {
  private viewer: Viewer
  private store: LayerStore
  private providerRegistry: ProviderRegistry
  private handles: Map<string, any> = new Map()
  private viewerId: string
  private disposed = false

  constructor(
    viewerId: string,
    viewer: Viewer,
    store: LayerStore,
    providerRegistry: ProviderRegistry
  ) {
    super()
    this.viewerId = viewerId
    this.viewer = viewer
    this.store = store
    this.providerRegistry = providerRegistry
    this.bindStoreEvents()
  }

  getViewerId(): string {
    return this.viewerId
  }

  // ─── 初始全量同步 ─────────────────────────────────────────

  async syncAll(): Promise<void> {
    const layerIds = this.store.getOrderedLayerIds()
    for (const id of layerIds) {
      await this.addLayerToViewer(id)
    }
    this.emit("syncCompleted", this.viewerId)
  }

  // ─── 生命周期 ─────────────────────────────────────────────

  destroy(): void {
    if (this.disposed) return
    this.disposed = true

    // 移除所有 Cesium 句柄
    for (const [layerId, handle] of this.handles) {
      this.removeLayerFromViewer(layerId, handle)
    }
    this.handles.clear()
    this.clear()
  }

  // ─── 内部 ─────────────────────────────────────────────────

  private bindStoreEvents(): void {
    this.store.on("layerAdded", async (layerId: string) => {
      if (this.disposed) return
      await this.addLayerToViewer(layerId)
      this.emit("layerMounted", layerId, this.viewerId)
    })

    this.store.on("layerRemoved", (layerId: string) => {
      if (this.disposed) return
      const handle = this.handles.get(layerId)
      if (handle) {
        this.removeLayerFromViewer(layerId, handle)
        this.handles.delete(layerId)
      }
      this.emit("layerUnmounted", layerId, this.viewerId)
    })

    this.store.on("layerChanged", (layerId: string) => {
      if (this.disposed) return
      this.syncLayerToViewer(layerId)
    })

    this.store.on("layersReordered", () => {
      if (this.disposed) return
      this.emit("layersReordered", this.viewerId)
    })
  }

  private async addLayerToViewer(layerId: string): Promise<void> {
    const model = this.store.getModel(layerId)
    if (!model) return

    const provider = this.providerRegistry.get(model.dataSourceType)
    if (!provider) return

    try {
      const handle = await provider.addToViewer(
        this.viewer,
        model.sourceConfig,
        model.style
      )
      this.handles.set(layerId, handle)
      provider.setVisibility(this.viewer, handle, model.visible)
    } catch (error) {
      this.emit("error", {
        viewerId: this.viewerId,
        layerId,
        action: "add",
        error
      })
    }
  }

  private removeLayerFromViewer(layerId: string, handle: any): void {
    const model = this.store.getModel(layerId)
    if (!model) return

    const provider = this.providerRegistry.get(model.dataSourceType)
    if (!provider) return

    try {
      provider.removeFromViewer(this.viewer, handle)
    } catch (error) {
      this.emit("error", {
        viewerId: this.viewerId,
        layerId,
        action: "remove",
        error
      })
    }
  }

  private syncLayerToViewer(layerId: string): void {
    const model = this.store.getModel(layerId)
    if (!model) return

    const handle = this.handles.get(layerId)
    if (!handle) return

    const provider = this.providerRegistry.get(model.dataSourceType)
    if (!provider) return

    try {
      provider.setVisibility(this.viewer, handle, model.visible)
      provider.updateStyle(this.viewer, handle, model.style)

      if (model.filterState !== undefined) {
        provider.applyFilter(this.viewer, handle, model.filterState)
      }
    } catch (error) {
      this.emit("error", {
        viewerId: this.viewerId,
        layerId,
        action: "sync",
        error
      })
    }
  }
}

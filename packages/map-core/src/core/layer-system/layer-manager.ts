import { Viewer } from "cesium"
import { EventEmitter } from "../event"
import { LayerModel } from "./model/layer-model"
import { LayerStore } from "./store/layer-store"
import { ViewerBridge } from "./store/viewer-bridge"
import { ProviderRegistry } from "./providers"
import { EntityLayerProvider } from "./providers/entity-provider"
import { ImageryLayerProvider } from "./providers/imagery-provider"
import { TerrainLayerProvider } from "./providers/terrain-provider"
import { TilesetLayerProvider } from "./providers/tileset-provider"
import { GeoJsonLayerProvider } from "./providers/geojson-provider"
import { KmlLayerProvider } from "./providers/kml-provider"
import { CzmlLayerProvider } from "./providers/czml-provider"
import {
  ILayerProvider,
  ILayerFilter,
  ILayerFilterState,
  ILayerTreeNodeSnapshot,
  ILayerStoreSnapshot,
  ICreateLayerOptions,
  LayerDataSourceType
} from "./types"

export class LayerManager extends EventEmitter {
  private store: LayerStore
  private providerRegistry: ProviderRegistry
  private filterRegistry: Map<string, ILayerFilter> = new Map()
  private bridges: Map<string, ViewerBridge> = new Map()

  constructor() {
    super()
    this.store = new LayerStore()
    this.providerRegistry = new ProviderRegistry()
    this.registerDefaultProviders()
    this.bindStoreEvents()
  }

  // ─── 图层 CRUD ────────────────────────────────────────────

  createLayer(options: ICreateLayerOptions): LayerModel {
    const model = new LayerModel({
      id: options.id || crypto.randomUUID(),
      name: options.name,
      dataSourceType: options.dataSourceType,
      sourceConfig: options.sourceConfig,
      visible: options.visible,
      opacity: options.opacity,
      zIndex: options.zIndex,
      parentId: options.parentId,
      style: options.style,
      properties: options.properties,
      filterState: options.filterState,
      metadata: options.metadata
    })

    this.store.addLayer(model)
    return model
  }

  removeLayer(layerId: string): void {
    this.store.removeLayer(layerId)
  }

  getLayer(layerId: string): LayerModel | undefined {
    return this.store.getModel(layerId)
  }

  getAllLayers(): LayerModel[] {
    return this.store.getAllModels()
  }

  // ─── 图层组 ───────────────────────────────────────────────

  createGroup(
    name: string,
    parentId?: string | null
  ): LayerModel {
    return this.createLayer({
      name,
      dataSourceType: LayerDataSourceType.Custom,
      sourceConfig: {
        type: LayerDataSourceType.Custom,
        providerKey: "__group__",
        options: { isGroup: true }
      },
      parentId: parentId ?? null
    })
  }

  moveLayerToGroup(
    layerId: string,
    groupId: string | null,
    index?: number
  ): void {
    this.store.moveLayer(layerId, groupId, index)
  }

  getLayerTree(): ILayerTreeNodeSnapshot[] {
    return this.store.getLayerTree()
  }

  // ─── 可见性与样式 ─────────────────────────────────────────

  setLayerVisibility(layerId: string, visible: boolean): void {
    const model = this.store.getModel(layerId)
    model?.setVisible(visible)

    // 级联更新子图层
    if (model) {
      const node = this.store.getTreeNode(layerId)
      if (node) {
        for (const childId of node.childrenIds) {
          this.setLayerVisibility(childId, visible)
        }
      }
    }
  }

  setLayerOpacity(layerId: string, opacity: number): void {
    const model = this.store.getModel(layerId)
    model?.setOpacity(opacity)
  }

  setLayerStyle(layerId: string, style: Record<string, any>): void {
    const model = this.store.getModel(layerId)
    model?.setStyle(style)
  }

  // ─── 过滤 ─────────────────────────────────────────────────

  setLayerFilter(
    layerId: string,
    filterState: ILayerFilterState | null
  ): void {
    const model = this.store.getModel(layerId)
    model?.setFilter(filterState)
  }

  registerFilter(filter: ILayerFilter): void {
    this.filterRegistry.set(filter.type, filter)
  }

  getFilter(type: string): ILayerFilter | undefined {
    return this.filterRegistry.get(type)
  }

  // ─── 多 Viewer ────────────────────────────────────────────

  attachViewer(viewerId: string, viewer: Viewer): ViewerBridge {
    if (this.bridges.has(viewerId)) {
      throw new Error(`Viewer "${viewerId}" is already attached`)
    }

    const bridge = new ViewerBridge(
      viewerId,
      viewer,
      this.store,
      this.providerRegistry
    )

    // 转发桥事件
    bridge.on("layerMounted", (layerId: string, vid: string) => {
      this.emit("layerMounted", layerId, vid)
    })
    bridge.on("layerUnmounted", (layerId: string, vid: string) => {
      this.emit("layerUnmounted", layerId, vid)
    })
    bridge.on("error", (detail: any) => {
      this.emit("bridgeError", detail)
    })

    this.bridges.set(viewerId, bridge)

    // 初始同步
    bridge.syncAll()

    return bridge
  }

  detachViewer(viewerId: string): void {
    const bridge = this.bridges.get(viewerId)
    if (bridge) {
      bridge.destroy()
      this.bridges.delete(viewerId)
    }
  }

  getBridge(viewerId: string): ViewerBridge | undefined {
    return this.bridges.get(viewerId)
  }

  // ─── 序列化 ───────────────────────────────────────────────

  toJSON(): ILayerStoreSnapshot {
    return this.store.toJSON()
  }

  static fromJSON(
    json: ILayerStoreSnapshot,
    viewerMap?: Map<string, Viewer>
  ): LayerManager {
    const manager = new LayerManager()
    manager.store = LayerStore.fromJSON(json)
    manager.bindStoreEvents()

    // 重新绑定所有 Viewer
    if (viewerMap) {
      for (const [viewerId, viewer] of viewerMap) {
        manager.attachViewer(viewerId, viewer)
      }
    }

    return manager
  }

  // ─── Provider 注册 ────────────────────────────────────────

  registerProvider(provider: ILayerProvider): void {
    this.providerRegistry.register(provider)
  }

  // ─── 内部 ─────────────────────────────────────────────────

  private registerDefaultProviders(): void {
    this.providerRegistry.register(new ImageryLayerProvider())
    this.providerRegistry.register(new TerrainLayerProvider())
    this.providerRegistry.register(new TilesetLayerProvider())
    this.providerRegistry.register(new GeoJsonLayerProvider())
    this.providerRegistry.register(new KmlLayerProvider())
    this.providerRegistry.register(new CzmlLayerProvider())
    // EntityLayerProvider 需要 DataManager，延迟注册
  }

  registerEntityProvider(dataManager: any): void {
    this.providerRegistry.register(new EntityLayerProvider(dataManager))
  }

  private bindStoreEvents(): void {
    this.store.on("layerAdded", (id: string) => this.emit("layerAdded", id))
    this.store.on("layerRemoved", (id: string) =>
      this.emit("layerRemoved", id)
    )
    this.store.on("layerChanged", (id: string) =>
      this.emit("layerChanged", id)
    )
    this.store.on("layerMoved", (id: string, parentId: string | null) =>
      this.emit("layerMoved", id, parentId)
    )
  }
}

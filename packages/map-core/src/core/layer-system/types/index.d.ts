import type { Viewer } from "cesium"

import type { LayerDataSourceType } from "../constants"

// ─── 数据源配置 ───────────────────────────────────────────

export interface IEntitySourceConfig {
  type: LayerDataSourceType.Entity
  entityIds: string[]
}

export interface IImagerySourceConfig {
  type: LayerDataSourceType.Imagery
  /** 影像服务地址（ion 类型无需提供） */
  url?: string
  providerType: "wmts" | "wms" | "tms" | "arcgis" | "ion" | "single-tile"
  providerOptions?: Record<string, any>
}

export interface ITerrainSourceConfig {
  type: LayerDataSourceType.Terrain
  url?: string
  assetId?: number
  requestVertexNormals?: boolean
  requestWaterMask?: boolean
}

export interface ITilesetSourceConfig {
  type: LayerDataSourceType.Tileset
  url: string
  maximumScreenSpaceError?: number
  maximumMemoryUsage?: number
}

export interface IGeoJsonSourceConfig {
  type: LayerDataSourceType.GeoJson
  url?: string
  data?: object
  clampToGround?: boolean
  fill?: string
  stroke?: string
  strokeWidth?: number
  markerSize?: number
}

export interface IKmlSourceConfig {
  type: LayerDataSourceType.Kml
  url: string
  clampToGround?: boolean
}

export interface ICzmlSourceConfig {
  type: LayerDataSourceType.Czml
  url?: string
  data?: any[]
}

export interface ICustomSourceConfig {
  type: LayerDataSourceType.Custom
  providerKey: string
  options: Record<string, any>
}

export type ILayerSourceConfig =
  | IEntitySourceConfig
  | IImagerySourceConfig
  | ITerrainSourceConfig
  | ITilesetSourceConfig
  | IGeoJsonSourceConfig
  | IKmlSourceConfig
  | ICzmlSourceConfig
  | ICustomSourceConfig

// ─── 图层模型（可序列化状态）───────────────────────────────

export interface ILayerModel {
  id: string
  name: string
  dataSourceType: LayerDataSourceType
  visible: boolean
  opacity: number
  zIndex: number
  parentId: string | null
  childrenIds: string[]
  style: Record<string, any>
  properties: Record<string, any>
  sourceConfig: ILayerSourceConfig
  filterState: ILayerFilterState | null
  metadata: Record<string, any>
}

export interface ICreateLayerOptions {
  id?: string
  name: string
  dataSourceType: LayerDataSourceType
  visible?: boolean
  opacity?: number
  zIndex?: number
  parentId?: string | null
  style?: Record<string, any>
  properties?: Record<string, any>
  sourceConfig: ILayerSourceConfig
  filterState?: ILayerFilterState | null
  metadata?: Record<string, any>
}

// ─── Provider 接口 ────────────────────────────────────────

export interface ILayerProvider {
  readonly dataSourceType: LayerDataSourceType
  addToViewer(
    viewer: Viewer,
    config: ILayerSourceConfig,
    style: Record<string, any>
  ): Promise<any>
  removeFromViewer(viewer: Viewer, handle: any): void
  updateStyle(viewer: Viewer, handle: any, style: Record<string, any>): void
  setVisibility(viewer: Viewer, handle: any, visible: boolean): void
  refresh(viewer: Viewer, handle: any, config: ILayerSourceConfig): Promise<any>
  applyFilter(
    viewer: Viewer,
    handle: any,
    filter: ILayerFilterState | null
  ): void
}

// ─── 过滤接口 ─────────────────────────────────────────────

export type FilterOperator =
  | "eq"
  | "neq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "contains"
  | "startsWith"
  | "in"
  | "between"

export interface IPropertyFilterExpression {
  field: string
  operator: FilterOperator
  value: any
}

export interface ISpatialFilterExpression {
  type: "bbox" | "circle" | "polygon"
  coordinates: number[]
  radius?: number
}

export interface ILayerFilterState {
  type: string
  expression: Record<string, any>
}

export interface ILayerFilter {
  readonly type: string
  matches(entity: any, expression: Record<string, any>): boolean
  filter(entities: any[], expression: Record<string, any>): string[]
}

// ─── 树结构快照 ───────────────────────────────────────────

export interface ILayerTreeNodeSnapshot {
  id: string
  name: string
  dataSourceType: LayerDataSourceType
  visible: boolean
  parentId: string | null
  children: ILayerTreeNodeSnapshot[]
}

// ─── 序列化格式 ───────────────────────────────────────────

export interface ILayerStoreSnapshot {
  layers: ILayerModel[]
  treeOrder: string[]
}

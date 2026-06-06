import { EventEmitter } from "../../event"
import { LayerDataSourceType } from "../constants"
import {
  ILayerFilterState,
  ILayerModel,
  ILayerSourceConfig} from "../types"

export class LayerModel extends EventEmitter {
  private state: ILayerModel

  constructor(
    initial: Partial<ILayerModel> & {
      id: string
      name: string
      dataSourceType: LayerDataSourceType
      sourceConfig: ILayerSourceConfig
    }
  ) {
    super()
    this.state = {
      visible: true,
      opacity: 1,
      zIndex: 0,
      parentId: null,
      childrenIds: [],
      style: {},
      properties: {},
      filterState: null,
      metadata: {},
      ...initial
    } as ILayerModel
  }

  // ─── Getters ──────────────────────────────────────────────

  get id(): string {
    return this.state.id
  }
  get name(): string {
    return this.state.name
  }
  get dataSourceType(): LayerDataSourceType {
    return this.state.dataSourceType
  }
  get visible(): boolean {
    return this.state.visible
  }
  get opacity(): number {
    return this.state.opacity
  }
  get zIndex(): number {
    return this.state.zIndex
  }
  get parentId(): string | null {
    return this.state.parentId
  }
  get childrenIds(): string[] {
    return [...this.state.childrenIds]
  }
  get style(): Record<string, any> {
    return { ...this.state.style }
  }
  get properties(): Record<string, any> {
    return { ...this.state.properties }
  }
  get sourceConfig(): ILayerSourceConfig {
    return this.state.sourceConfig
  }
  get filterState(): ILayerFilterState | null {
    return this.state.filterState
  }
  get metadata(): Record<string, any> {
    return { ...this.state.metadata }
  }

  // ─── Setters（每次变更触发事件）─────────────────────────────

  setName(name: string): void {
    this.state.name = name
    this.emitChanged("nameChanged", name)
  }

  setVisible(visible: boolean): void {
    this.state.visible = visible
    this.emitChanged("visibilityChanged", visible)
  }

  setOpacity(opacity: number): void {
    this.state.opacity = Math.max(0, Math.min(1, opacity))
    this.emitChanged("opacityChanged", this.state.opacity)
  }

  setZIndex(zIndex: number): void {
    this.state.zIndex = zIndex
    this.emitChanged("zIndexChanged", zIndex)
  }

  setStyle(style: Record<string, any>): void {
    this.state.style = { ...this.state.style, ...style }
    this.emitChanged("styleChanged", this.state.style)
  }

  setSourceConfig(config: ILayerSourceConfig): void {
    this.state.sourceConfig = config
    this.emitChanged("sourceConfigChanged", config)
  }

  setFilter(filterState: ILayerFilterState | null): void {
    this.state.filterState = filterState
    this.emitChanged("filterChanged", filterState)
  }

  setParent(parentId: string | null): void {
    this.state.parentId = parentId
  }

  addChild(childId: string): void {
    if (!this.state.childrenIds.includes(childId)) {
      this.state.childrenIds.push(childId)
    }
  }

  removeChild(childId: string): void {
    this.state.childrenIds = this.state.childrenIds.filter(
      (id) => id !== childId
    )
  }

  updateProperties(properties: Record<string, any>): void {
    this.state.properties = { ...this.state.properties, ...properties }
    this.emitChanged("propertiesChanged", this.state.properties)
  }

  updateMetadata(metadata: Record<string, any>): void {
    this.state.metadata = { ...this.state.metadata, ...metadata }
  }

  // ─── 序列化 ───────────────────────────────────────────────

  toJSON(): ILayerModel {
    return { ...this.state }
  }

  static fromJSON(json: ILayerModel): LayerModel {
    return new LayerModel(json)
  }

  // ─── 内部 ─────────────────────────────────────────────────

  private emitChanged(event: string, detail: any): void {
    this.emit(event, detail)
    this.emit("changed", this.state.id)
  }
}

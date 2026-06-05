import { Viewer } from "cesium"
import { BaseLayerProvider } from "./base-provider"
import {
  LayerDataSourceType,
  ILayerSourceConfig,
  IEntitySourceConfig,
  ILayerFilterState
} from "../types"
import { DataManager } from "../../data-management"

export class EntityLayerProvider extends BaseLayerProvider {
  readonly dataSourceType = LayerDataSourceType.Entity
  private dataManager: DataManager

  constructor(dataManager: DataManager) {
    super()
    this.dataManager = dataManager
  }

  async addToViewer(
    viewer: Viewer,
    config: ILayerSourceConfig,
    _style: Record<string, any>
  ): Promise<string[]> {
    const entityConfig = config as IEntitySourceConfig
    return entityConfig.entityIds
  }

  removeFromViewer(_viewer: Viewer, handle: string[]): void {
    handle.forEach((id) => {
      this.dataManager.removeEntity(id)
    })
  }

  updateStyle(
    _viewer: Viewer,
    handle: string[],
    style: Record<string, any>
  ): void {
    handle.forEach((id) => {
      this.dataManager.updateVisualization(id, style)
    })
  }

  setVisibility(
    _viewer: Viewer,
    handle: string[],
    visible: boolean
  ): void {
    handle.forEach((id) => {
      this.dataManager.setEntityVisibility(id, visible)
    })
  }

  applyFilter(
    _viewer: Viewer,
    handle: string[],
    filter: ILayerFilterState | null
  ): void {
    if (!filter) {
      // 重置：全部显示
      handle.forEach((id) => {
        this.dataManager.setEntityVisibility(id, true)
      })
      return
    }
    // 根据过滤表达式决定每个实体的可见性
    handle.forEach((id) => {
      const entity = this.dataManager.getEntity(id)
      if (!entity) return
      const matches = this.evaluateFilter(entity, filter)
      this.dataManager.setEntityVisibility(id, matches)
    })
  }

  private evaluateFilter(
    entity: any,
    filter: ILayerFilterState
  ): boolean {
    const { expression } = filter
    const props = entity.properties || {}
    for (const [field, condition] of Object.entries(expression)) {
      const value = this.getNestedValue(props, field)
      if (typeof condition === "object" && condition !== null) {
        if (
          condition.op === "gt" &&
          !(value > condition.value)
        )
          return false
        if (
          condition.op === "lt" &&
          !(value < condition.value)
        )
          return false
        if (
          condition.op === "in" &&
          !condition.value.includes(value)
        )
          return false
        if (
          condition.op === "between" &&
          (value < condition.min || value > condition.max)
        )
          return false
      } else if (value !== condition) {
        return false
      }
    }
    return true
  }

  private getNestedValue(obj: any, path: string): any {
    return path.split(".").reduce((o, key) => o?.[key], obj)
  }
}

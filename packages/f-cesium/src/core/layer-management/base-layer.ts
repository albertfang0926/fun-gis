import { EventEmitter } from "../event"
import { DataManager } from "../data-management"

export interface LayerOptions {
  id?: string
  name: string
  visible?: boolean
  style?: Record<string, any>
  properties?: Record<string, any>
}

export abstract class BaseLayer extends EventEmitter {
  readonly id: string
  name: string
  visible: boolean
  style: Record<string, any>
  properties: Record<string, any>
  protected entityIds: string[] = []
  protected dataManager: DataManager

  constructor(options: LayerOptions, dataManager: DataManager) {
    super()
    this.id = options.id || crypto.randomUUID()
    this.name = options.name
    this.visible = options.visible ?? true
    this.style = options.style || {}
    this.properties = options.properties || {}
    this.dataManager = dataManager
  }

  // 抽象方法，由具体图层实现
  abstract setVisibility(visible: boolean): void
  abstract setStyle(style: Record<string, any>): void
  abstract update(options: Record<string, any>): void
  abstract clear(): void

  // 通用方法
  addEntity(entityId: string) {
    this.entityIds.push(entityId)
    if (!this.visible) {
      this.dataManager.setEntityVisibility(entityId, false)
    }
    this.emit("entityAdded", entityId)
  }

  removeEntity(entityId: string) {
    this.entityIds = this.entityIds.filter((id) => id !== entityId)
    this.emit("entityRemoved", entityId)
  }

  getEntityIds(): string[] {
    return [...this.entityIds]
  }
}

import { Entity, Viewer } from "cesium"
import { EventEmitter } from "../event"
import { BaseVisualizer } from "../visualization/base-visualizer"

// 基础绘制类型
export enum DrawType {
  Point = "point",
  Line = "line",
  Polygon = "polygon",
  Image = "image"
}

// 复合数据类型
export enum CompositeType {
  Measurement = "measurement", // 测量类型
  Planning = "planning", // 规划类型
  Analysis = "analysis", // 分析类型
  Custom = "custom" // 自定义类型
}

// 基础实体接口
export interface BaseEntity {
  id: string
  show: boolean
  properties?: Record<string, any>
}

// 绘制实体接口
export interface DrawEntity extends BaseEntity {
  type: DrawType
  entity: Entity
}

// 复合实体接口
export interface CompositeEntity extends BaseEntity {
  type: CompositeType
  name: string
  children: DrawEntity[]
  style?: Record<string, any>
}

// 实体工厂接口
export interface EntityFactory<T extends BaseEntity> {
  type: string
  create(options: any): T
}

export class DataManager extends EventEmitter {
  private entities: Map<string, BaseEntity> = new Map()
  private viewer: Viewer
  private factories: Map<string, EntityFactory<any>> = new Map()
  private visualizers: Map<string, BaseVisualizer<any>> = new Map()

  constructor(viewer: Viewer) {
    super()
    this.viewer = viewer
    this.registerDefaultFactories()
  }

  // 注册默认的实体工厂
  private registerDefaultFactories() {
    // 注册基础绘制实体工厂
    this.registerEntityFactory({
      type: "draw",
      create: (options: {
        type: DrawType
        entity: Entity
        properties?: any
      }): DrawEntity => ({
        id: crypto.randomUUID(),
        show: true,
        type: options.type,
        entity: options.entity,
        properties: options.properties
      })
    })

    // 注册复合实体工厂
    this.registerEntityFactory({
      type: "composite",
      create: (options: {
        type: CompositeType
        name: string
        properties?: any
      }): CompositeEntity => ({
        id: crypto.randomUUID(),
        show: true,
        type: options.type,
        name: options.name,
        children: [],
        properties: options.properties
      })
    })
  }

  // 注册新的实体工厂
  registerEntityFactory<T extends BaseEntity>(factory: EntityFactory<T>) {
    this.factories.set(factory.type, factory)
  }

  // 创建实体
  createEntity<T extends BaseEntity>(factoryType: string, options: any): T {
    const factory = this.factories.get(factoryType)
    if (!factory) {
      throw new Error(`No factory registered for type: ${factoryType}`)
    }
    const entity = factory.create(options)
    this.entities.set(entity.id, entity)
    this.emit("entityCreated", entity)
    return entity
  }

  // 添加子实体到复合实体
  addChildToComposite(compositeId: string, child: DrawEntity) {
    const composite = this.getEntity<CompositeEntity>(compositeId)
    if (composite && "children" in composite) {
      composite.children.push(child)
      this.emit("childAdded", { compositeId, child })
    }
  }

  getEntity<T extends BaseEntity>(id: string): T | undefined {
    return this.entities.get(id) as T
  }

  getAllEntities(): BaseEntity[] {
    return Array.from(this.entities.values())
  }

  getEntitiesByType<T extends BaseEntity>(type: DrawType | CompositeType): T[] {
    return Array.from(this.entities.values()).filter(
      (entity) => "type" in entity && entity.type === type
    ) as T[]
  }

  setEntityVisibility(id: string, visible: boolean) {
    const entity = this.entities.get(id)
    if (entity) {
      entity.show = visible
      if ("entity" in entity) {
        ;(entity as DrawEntity).entity.show = visible
      } else if ("children" in entity) {
        ;(entity as CompositeEntity).children.forEach((child) => {
          child.entity.show = visible
        })
      }
      this.emit("visibilityChanged", { id, visible })
    }
  }

  removeEntity(id: string) {
    const entity = this.entities.get(id)
    if (entity) {
      if ("entity" in entity) {
        this.viewer.entities.remove((entity as DrawEntity).entity)
      } else if ("children" in entity) {
        ;(entity as CompositeEntity).children.forEach((child) => {
          this.viewer.entities.remove(child.entity)
        })
      }
      this.entities.delete(id)
      this.emit("entityRemoved", entity)
    }
  }

  // 注册可视化器
  registerVisualizer(type: string, visualizer: BaseVisualizer<any>) {
    this.visualizers.set(type, visualizer)
  }

  // 可视化实体
  visualize(entityId: string): Entity | Entity[] | undefined {
    const entity = this.entities.get(entityId)
    if (!entity) return

    const visualizer = this.findVisualizer(entity)
    if (!visualizer) {
      throw new Error(
        `No visualizer found for entity type: ${(entity as any).type}`
      )
    }

    const visualResult = visualizer.visualize(entity)
    this.emit("entityVisualized", { entityId, visual: visualResult })
    return visualResult
  }

  // 更新可视化样式
  updateVisualization(entityId: string, style: Record<string, any>) {
    const entity = this.entities.get(entityId)
    if (!entity) return

    const visualizer = this.findVisualizer(entity)
    if (visualizer) {
      visualizer.updateStyle(entity, style)
      this.emit("visualizationUpdated", { entityId, style })
    }
  }

  // 清除可视化
  clearVisualization(entityId: string) {
    const entity = this.entities.get(entityId)
    if (!entity) return

    const visualizer = this.findVisualizer(entity)
    if (visualizer) {
      visualizer.clear(entity)
      this.emit("visualizationCleared", entityId)
    }
  }

  private findVisualizer(entity: BaseEntity): BaseVisualizer<any> | undefined {
    if ("type" in entity) {
      // 对于 DrawEntity
      return this.visualizers.get("draw")
    } else if ("compositeType" in entity) {
      // 对于 CompositeEntity
      return this.visualizers.get("composite")
    }
    return undefined
  }

  // 其他批量操作方法...
}

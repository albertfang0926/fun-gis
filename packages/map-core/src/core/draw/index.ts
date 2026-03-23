import {
  Scene,
  Viewer,
  Cartesian3,
  PointPrimitiveCollection,
  PolylineCollection,
  PolygonPrimitive,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType
} from "cesium"
import { EventEmitter } from "../event"

export enum DrawMode {
  Point = "point",
  Line = "line",
  Polygon = "polygon"
}

export interface DrawOptions {
  mode: DrawMode
  color?: string
  width?: number
  outlineColor?: string
  outlineWidth?: number
}

interface DrawEntity {
  id: string
  type: DrawType
  entity: Cesium.Entity
  properties?: any
}

class DrawManager {
  private entities: Map<string, DrawEntity> = new Map()
  private viewer: Cesium.Viewer

  constructor(viewer: Cesium.Viewer) {
    this.viewer = viewer
  }

  // 添加绘制实体
  addEntity(entity: DrawEntity) {
    this.entities.set(entity.id, entity)
  }

  // 根据 ID 删除实体
  removeEntity(id: string) {
    const entity = this.entities.get(id)
    if (entity) {
      this.viewer.entities.remove(entity.entity)
      this.entities.delete(id)
    }
  }

  // 根据类型批量删除实体
  removeEntitiesByType(type: DrawType) {
    this.entities.forEach((entity, id) => {
      if (entity.type === type) {
        this.removeEntity(id)
      }
    })
  }

  // 清空所有实体
  clear() {
    this.entities.forEach((entity) => {
      this.viewer.entities.remove(entity.entity)
    })
    this.entities.clear()
  }

  // 根据类型隐藏/显示实体
  setVisibilityByType(type: DrawType, visible: boolean) {
    this.entities.forEach((entity) => {
      if (entity.type === type) {
        entity.entity.show = visible
      }
    })
  }

  // 获取所有实体
  getAllEntities(): DrawEntity[] {
    return Array.from(this.entities.values())
  }
}

export class DrawTool extends EventEmitter {
  private _viewer?: Viewer
  private _scene?: Scene
  private _points?: PointPrimitiveCollection
  private _lines?: PolylineCollection
  private _polygons: PolygonPrimitive[] = []
  private _handler?: ScreenSpaceEventHandler
  private _isDrawing = false
  private _positions: Cartesian3[] = []
  private _options: DrawOptions = {
    mode: DrawMode.Line,
    color: "#ffffff",
    width: 2,
    outlineColor: "#000000",
    outlineWidth: 1
  }

  constructor() {
    super()
  }

  init(viewer: Viewer) {
    this._viewer = viewer
    this._scene = viewer.scene
    this._points = this._scene.primitives.add(new PointPrimitiveCollection())
    this._lines = this._scene.primitives.add(new PolylineCollection())
    this._handler = new ScreenSpaceEventHandler(this._scene.canvas)
    this._setupEventHandlers()
  }

  setDrawMode(mode: DrawMode) {
    this._options.mode = mode
  }

  setStyle(options: Partial<DrawOptions>) {
    Object.assign(this._options, options)
  }

  startDrawing() {
    this._isDrawing = true
    this._positions = []
  }

  stopDrawing() {
    this._isDrawing = false
    this.emit("drawEnd", this._positions)
  }

  clear() {
    this._points?.removeAll()
    this._lines?.removeAll()
    this._polygons.forEach((polygon) => {
      this._scene?.primitives.remove(polygon)
    })
    this._polygons = []
  }

  destroy() {
    this.clear()
    this._handler?.destroy()
    this._scene?.primitives.remove(this._points!)
    this._scene?.primitives.remove(this._lines!)
  }

  private _setupEventHandlers() {
    if (!this._handler) return

    this._handler.setInputAction((event: any) => {
      if (!this._isDrawing) return
      const cartesian = this._getCartesian(event.position)
      if (cartesian) {
        this._positions.push(cartesian)
        this._updateShape()
      }
    }, ScreenSpaceEventType.LEFT_CLICK)

    this._handler.setInputAction((event: any) => {
      if (!this._isDrawing) return
      const cartesian = this._getCartesian(event.endPosition)
      if (cartesian && this._positions.length > 0) {
        this._updateShape([...this._positions, cartesian])
      }
    }, ScreenSpaceEventType.MOUSE_MOVE)

    this._handler.setInputAction(() => {
      if (!this._isDrawing) return
      this.stopDrawing()
    }, ScreenSpaceEventType.RIGHT_CLICK)
  }

  private _getCartesian(position: any) {
    const ray = this._viewer!.camera.getPickRay(position)
    return this._viewer!.scene.globe.pick(ray!, this._viewer!.scene)
  }

  private _updateShape(positions?: Cartesian3[]) {
    const shapePositions = positions || this._positions
    switch (this._options.mode) {
      case DrawMode.Point:
        this._updatePoint(shapePositions)
        break
      case DrawMode.Line:
        this._updateLine(shapePositions)
        break
      case DrawMode.Polygon:
        this._updatePolygon(shapePositions)
        break
    }
  }

  private _updatePoint(positions: Cartesian3[]) {
    this._points?.add({
      position: positions[positions.length - 1],
      color: this._options.color,
      pixelSize: this._options.width || 5
    })
  }

  private _updateLine(positions: Cartesian3[]) {
    this._lines?.add({
      positions,
      width: this._options.width,
      material: this._options.color
    })
  }

  private _updatePolygon(positions: Cartesian3[]) {
    if (positions.length < 3) return
    const polygon = new PolygonPrimitive({
      positions,
      material: this._options.color,
      outline: true,
      outlineColor: this._options.outlineColor,
      outlineWidth: this._options.outlineWidth
    })
    this._scene?.primitives.add(polygon)
    this._polygons.push(polygon)
  }
}

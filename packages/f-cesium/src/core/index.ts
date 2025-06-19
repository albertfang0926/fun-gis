import {
  Scene,
  Viewer,
  Cartesian3,
  PolylineCollection,
  Polyline,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType
} from "cesium"
import { EventEmitter } from "./event"

export class LineDrawer extends EventEmitter {
  private _viewer?: Viewer
  private _scene?: Scene
  private _polylines?: PolylineCollection
  private _currentLine?: Polyline
  private _positions: Cartesian3[] = []
  private _handler?: ScreenSpaceEventHandler
  private _isDrawing = false

  constructor() {
    super()
  }

  init(viewer: Viewer) {
    this._viewer = viewer
    this._scene = viewer.scene
    this._polylines = this._scene.primitives.add(new PolylineCollection())
    this._handler = new ScreenSpaceEventHandler(this._scene.canvas)
    this._setupEventHandlers()
  }

  private _setupEventHandlers() {
    if (!this._handler) return

    // 左键点击添加点
    this._handler.setInputAction((event: any) => {
      if (!this._isDrawing) return
      const cartesian = this._viewer?.camera.pickEllipsoid(
        event.position,
        this._scene?.globe.ellipsoid
      )
      if (cartesian) {
        this._positions.push(cartesian)
        this._updateLine()
      }
    }, ScreenSpaceEventType.LEFT_CLICK)

    // 鼠标移动时实时更新线段
    this._handler.setInputAction((event: any) => {
      if (!this._isDrawing) return
      const cartesian = this._viewer?.camera.pickEllipsoid(
        event.endPosition,
        this._scene?.globe.ellipsoid
      )
      if (cartesian && this._positions.length > 0) {
        const positions = [...this._positions, cartesian]
        this._updateLine(positions)
      }
    }, ScreenSpaceEventType.MOUSE_MOVE)

    // 右键结束绘制
    this._handler.setInputAction(() => {
      if (!this._isDrawing) return
      this.stopDrawing()
      this.emit("drawEnd", this._positions)
    }, ScreenSpaceEventType.RIGHT_CLICK)
  }

  private _updateLine(positions?: Cartesian3[]) {
    const linePositions = positions || this._positions
    if (!this._currentLine) {
      this._currentLine = this._polylines?.add({
        positions: linePositions,
        width: 2,
        material: "rgb(255, 255, 255)"
      })
    } else {
      this._currentLine.positions = linePositions
    }
  }

  startDrawing() {
    this._isDrawing = true
    this._positions = []
    this._currentLine = undefined
    this.emit("drawStart")
  }

  stopDrawing() {
    this._isDrawing = false
    this._currentLine = undefined
  }

  destroy() {
    this._handler?.destroy()
    this._scene?.primitives.remove(this._polylines!)
    this._positions = []
    this._currentLine = undefined
  }
}

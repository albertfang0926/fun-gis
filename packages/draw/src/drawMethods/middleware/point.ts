import {
  Viewer,
  Cartesian3,
  BillboardCollection,
  VerticalOrigin,
  NearFarScalar,
  HeightReference,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  Color
} from "mars3d-cesium"
// customs
import { coordinateToCartesian3, cartesian3ToCoordinate } from "../utils"
import { drawPoint } from "../core"
import { itemManager } from "../manager/primitive"
import { helperPrimitives } from "./utils/dragHelper"
import { onRightClick } from "./utils/mouse"
// assets
import defaultPoint from "../../assets/images/primitives/point.png" // "../assets/images/primitives/location_type1.png"
import helpPoint from "../../assets/images/primitives/point_focused.png" // "../assets/images/primitives/location_type1.png"
import highlightHelpPoint from "../../assets/images/primitives/point_focused.png" // "../assets/images/primitives/location_type1.png"
import { Coordinate } from "../types/coordinate"
// types
import type { I_ContextMenu } from "../types/contextMenu"
import type { BaseEntity } from "./baseEntity"

const ORIGINAL_SIZE = 28
class Point {
  id: string
  public name = "point"
  controlPoints: Cartesian3[]
  viewer: Viewer
  dragHandler: ScreenSpaceEventHandler
  // 可编辑属性
  scale = 1
  size = 28
  color = "#ffffff"
  editing = false
  primitive: BillboardCollection

  contextMenu: I_ContextMenu<BaseEntity>[] = []

  constructor(viewer: Viewer, onRightClick: (e) => void) {
    this.viewer = viewer
    this.dragHandler = new ScreenSpaceEventHandler(this.viewer.canvas)
    // init mouse events
    this.onDrag()
    this._onRightClick(onRightClick)
  }

  /**
   * 绘制方法
   */
  public draw(): void {
    drawPoint(this.viewer, {}, (e) => {
      // this.viewer.scene.primitives.add(e.p)
      itemManager.add(e.id, e)
      this.id = e.id
      this.controlPoints = e.coordinates.map((c) => coordinateToCartesian3(c, this.viewer))
      this.primitive = e.p
    })
  }

  /**
   * 右击图形事件的响应
   */
  private _onRightClick(callback: (e: this) => void) {
    onRightClick(this, callback)
  }

  /**
   *  绑定菜单子项
   */
  public bindContextMenu(content: I_ContextMenu<BaseEntity>[]) {
    this.contextMenu = content
  }

  /**
   * 为图形拖拽添加辅助控制点
   */
  private addHelper() {
    // this.helperPrimitives = new BillboardCollection()
    // this.primitive.get(0).show = false
    this.viewer.scene.primitives.add(helperPrimitives)
    this.controlPoints.forEach((controlPoint, index) => {
      helperPrimitives.add({
        id: { index, parentId: this.id },
        show: true,
        position: controlPoint,
        image: helpPoint,
        scale: 1.0,
        // verticalOrigin: VerticalOrigin.CENTER,
        // scaleByDistance: new NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0),
        disableDepthTestDistance: Number.POSITIVE_INFINITY
        // heightReference: HeightReference.NONE
      })
    })
  }

  /**
   * 左击事件
   * @deprecated 仅在调试时使用
   */
  public onLeftClick() {
    this.dragHandler.setInputAction((e) => {
      const picked = this.viewer.scene.pick(e.position)
      console.log(picked)

      if (picked && itemManager.has(picked.id) && picked.id === this.id) {
        if (helperPrimitives.length > 0) {
          this.endDrag()
        }
        this.addHelper()
        this.editing = true
      }
      if (!picked && this.editing) {
        this.endDrag()
      }
    }, ScreenSpaceEventType.LEFT_CLICK)
  }

  /**
   * 开始拖拽
   */
  public startDrag() {
    if (helperPrimitives.length > 0) {
      this.endDrag()
    }
    this.addHelper()
    this.editing = true
  }

  /**
   * 停止拖拽
   */
  public endDrag() {
    // this.primitive.removeAll()
    // this.primitive.add({
    //   position: this.controlPoints[0],
    //   id: { uuid: this.id },
    //   scale: this.scale,
    //   image: defaultPoint,
    //   color: this.color
    // })
    helperPrimitives.removeAll()
    this.editing = false
  }

  /**
   * 拖拽事件
   */
  private onDrag() {
    this.dragHandler.setInputAction((e) => {
      if (!this.editing) return
      let pickedControlPoint = this.viewer.scene.pick(e.position)
      if (
        pickedControlPoint &&
        helperPrimitives.contains(pickedControlPoint.primitive) &&
        pickedControlPoint.primitive.id.parentId === this.id
      ) {
        const pickedPrimitive = pickedControlPoint.primitive

        // 移动点位
        this.dragHandler.setInputAction((e: any) => {
          this.viewer.scene.screenSpaceCameraController.enableRotate = false // 禁止旋转
          const position = this.viewer.camera.pickEllipsoid(e.endPosition, this.viewer.scene.globe.ellipsoid)
          if (position) {
            helperPrimitives.remove(pickedControlPoint.primitive)
            pickedControlPoint.primitive = helperPrimitives.add({
              id: pickedPrimitive.id,
              show: true,
              position: position,
              image: highlightHelpPoint,
              scale: 1.0,
              // verticalOrigin: VerticalOrigin.CENTER,
              // scaleByDistance: new NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0),
              disableDepthTestDistance: Number.POSITIVE_INFINITY
              // heightReference: HeightReference.NONE
            })
            this.controlPoints[pickedControlPoint.primitive.id.index] = position

            this.primitive.removeAll()
            this.primitive.add({
              id: { uuid: this.id },
              show: true,
              position: this.controlPoints[0],
              image: defaultPoint,
              scale: 1.0
            })
            // const newPrimitive = getPrimitive(
            //   getAttackArrowPoints(this.controlPoints.map((c) => cartesian3ToCoordinate(c, this.viewer))),
            //   this.id,
            //   true,
            //   this.width,
            //   this.color
            // )
            // itemManager.updatePrimitive(this.id, newPrimitive)
          }
        }, ScreenSpaceEventType.MOUSE_MOVE)
        this.dragHandler.setInputAction((e) => {
          // restoreBillboard(billBoardStorage)
          pickedControlPoint.primitive.scale = this.scale
          pickedControlPoint.primitive.image = helpPoint
          this.viewer.scene.screenSpaceCameraController.enableRotate = true
          this.dragHandler.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE)
          this.dragHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
          // 打开弹窗
        }, ScreenSpaceEventType.LEFT_UP)
      }
    }, ScreenSpaceEventType.LEFT_DOWN)
  }

  /**
   * 更新颜色
   * @param color
   */
  updateColor(color: string) {
    this.color = color
    this.primitive.get(0).color = Color.fromCssColorString(color)
  }

  /**
   * 更新点的比例
   */
  updateScale(scale: number) {
    this.scale = scale
    this.size = ORIGINAL_SIZE * scale
    this.primitive.get(0).scale = this.scale
  }

  /**
   * 更新点的大小，单位为px
   */
  updateSize(size: number) {
    this.scale = size / ORIGINAL_SIZE
    this.size = size
    this.primitive.get(0).scale = this.scale
  }

  /**
   * 更新点的位置
   */
  updatePosition(position: Coordinate) {
    this.primitive.removeAll()
    this.controlPoints[0] = coordinateToCartesian3(position, this.viewer)
    this.primitive.add({
      position: this.controlPoints[0],
      id: { uuid: this.id },
      scale: this.scale,
      image: defaultPoint,
      color: this.color
    })
  }
}

export { Point }

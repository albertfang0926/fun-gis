import {
  Viewer,
  Cartesian3,
  BillboardCollection,
  Primitive,
  VerticalOrigin,
  NearFarScalar,
  HeightReference,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  GeometryInstance,
  PolylineGeometry,
  PolylineMaterialAppearance,
  ArcType,
  Material,
  Color,
  Cartographic
} from "mars3d-cesium"
// customs
import { coordinateToCartesian3, cartesian3ToCoordinate, getRectangleCoorByTwoPoints } from "../utils"
import { drawCircle } from "../core"
import { itemManager } from "../manager/primitive"
import { getCircle } from "../core/circle/ellipse"
// import { getAttackArrowPoints } from "../core/military/utils/creatMilitary"
import { helperPrimitives } from "./utils/dragHelper"
import { onRightClick } from "./utils/mouse"
// assets
import helpPoint from "../../assets/images/primitives/location_type1.png" // "../assets/images/primitives/location_type1.png"
import highlightHelpPoint from "../../assets/images/primitives/point_selected.png" // "../assets/images/primitives/location_type1.png"
import { Coordinate } from "../types/coordinate"
// types
import type { I_ContextMenu } from "../types/contextMenu"
// const helperPrimitives = new BillboardCollection()

class Circle {
  id: string
  controlPoints: Cartesian3[]
  viewer: Viewer
  // helperPrimitives: BillboardCollection
  dragHandler: ScreenSpaceEventHandler
  center: Cartesian3
  radius: number
  width = 2
  color = "#ffffff"
  editing = false
  primitive: Primitive
  contextMenu: I_ContextMenu<this>[] = []

  constructor(viewer: Viewer, onRightClick: (e) => void) {
    this.viewer = viewer
    this.dragHandler = new ScreenSpaceEventHandler(this.viewer.canvas)
    // init mouse events
    // this.onLeftClick()
    this.onDrag()
    this._onRightClick(onRightClick)
  }

  public draw(): void {
    drawCircle(this.viewer, {}, (e) => {
      // this.viewer.scene.primitives.add(e.p)
      itemManager.add(e.id, e)
      this.id = e.id
      this.controlPoints = e.coordinates.slice(0, 4).map((c) => coordinateToCartesian3(c, this.viewer))
      this.center = this.controlPoints[0]
      this.radius = Cartesian3.distance(this.controlPoints[0], this.controlPoints[1])
      this.primitive = e.p
    })
  }

  // private _onRightClick(onRightClick: (e) => void) {
  //   this.dragHandler.setInputAction((e) => {
  //     let picked = this.viewer.scene.pick(e.position)
  //     const id = picked?.id?.uuid
  //     const isItem = id && id === this.id && itemManager.has(id)
  //     if (isItem) {
  //       onRightClick(this)
  //     }
  //   }, ScreenSpaceEventType.RIGHT_CLICK)
  // }
  private _onRightClick(callback: (e: this) => void) {
    onRightClick(this, callback)
    // this.dragHandler.setInputAction((e) => {
    //   let picked = this.viewer.scene.pick(e.position)
    //   const id = picked?.id?.uuid
    //   const isItem = id && id === this.id && itemManager.has(id)
    //   if (isItem) {
    //     onRightClick(this)
    //   }
    // }, ScreenSpaceEventType.RIGHT_CLICK)
  }

  public bindContextMenu(content: I_ContextMenu<this>[]) {
    this.contextMenu = content
  }
  addHelper() {
    // this.helperPrimitives = new BillboardCollection()
    this.viewer.scene.primitives.add(helperPrimitives)
    this.controlPoints.forEach((controlPoint, index) => {
      helperPrimitives.add({
        id: { index, parentId: this.id },
        show: true,
        position: controlPoint,
        image: helpPoint,
        scale: 0.3,
        verticalOrigin: VerticalOrigin.CENTER,
        scaleByDistance: new NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0),
        disableDepthTestDistance: Number.POSITIVE_INFINITY,
        heightReference: HeightReference.NONE
      })
    })
  }

  onLeftClick() {
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

  startDrag() {
    if (helperPrimitives.length > 0) {
      this.endDrag()
    }
    this.addHelper()
    this.editing = true
  }

  endDrag() {
    helperPrimitives.removeAll()
  }

  onDrag() {
    this.dragHandler.setInputAction((e) => {
      if (!this.editing) return

      let pickedControlPoint = this.viewer.scene.pick(e.position)

      if (
        pickedControlPoint &&
        helperPrimitives.contains(pickedControlPoint.primitive) &&
        pickedControlPoint.primitive.id.parentId === this.id
      ) {
        console.log("picked", pickedControlPoint)
        let pickedPrimitive = pickedControlPoint.primitive
        // 高亮
        pickedPrimitive.scale = 0.5
        pickedPrimitive.image = highlightHelpPoint

        // billBoardStorage = p.primitive
        // highlightBillboard(billBoardStorage)
        // // 移动点位
        const focusedHelperIndex = pickedControlPoint.primitive.id.index
        // const diagonalHelperIndex = (focusedHelperIndex + 2) % 4
        this.dragHandler.setInputAction((e: any) => {
          this.viewer.scene.screenSpaceCameraController.enableRotate = false // 禁止旋转
          const position = this.viewer.camera.pickEllipsoid(e.endPosition, this.viewer.scene.globe.ellipsoid)
          if (position) {
            helperPrimitives.removeAll()
            if (focusedHelperIndex === 0) {
              const offset = Cartesian3.subtract(position, this.center, new Cartesian3())
              this.controlPoints[1] = Cartesian3.add(this.controlPoints[1], offset, new Cartesian3())
              const cartographic = Cartographic.fromCartesian(this.controlPoints[1])
              this.controlPoints[1] = Cartesian3.fromRadians(cartographic.longitude, cartographic.latitude, 0)
              this.center = position
            }
            if (focusedHelperIndex === 1) this.radius = Cartesian3.distance(this.center, position)
            const newPrimitive = getCircle({ uuid: this.id }, this.center, this.radius, 0.001, this.width, this.color)
            this.controlPoints[focusedHelperIndex] = position
            this.controlPoints.forEach((controlPoint, index) => {
              const h = helperPrimitives.add({
                id: { index, parentId: this.id },
                show: true,
                position: controlPoint,
                image: index === focusedHelperIndex ? highlightHelpPoint : helpPoint,
                scale: index === focusedHelperIndex ? 0.5 : 0.3,
                verticalOrigin: VerticalOrigin.CENTER,
                scaleByDistance: new NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0),
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                heightReference: HeightReference.NONE
              })
              if (index === focusedHelperIndex) {
                pickedPrimitive = h
              }
            })
            itemManager.updatePrimitive(this.id, newPrimitive)
          }
        }, ScreenSpaceEventType.MOUSE_MOVE)
        this.dragHandler.setInputAction((e) => {
          // restoreBillboard(billBoardStorage)
          pickedPrimitive.scale = 0.3
          pickedPrimitive.image = helpPoint
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
    this.primitive.appearance.material.uniforms.color = Color.fromCssColorString(color)
  }

  /**
   * 更新线宽
   */
  updateWidth(width: number) {
    this.width = width
    const newPrimitive = getCircle({ uuid: this.id }, this.center, this.radius, 0.001, this.width, this.color)
    itemManager.updatePrimitive(this.id, newPrimitive)
  }

  /**
   * 更新控制点
   */
  updateCenter(positions: Coordinate) {
    this.center = coordinateToCartesian3(positions, this.viewer)
    this.controlPoints[0] = this.center // positions.map((p) => coordinateToCartesian3(p, this.viewer))
    const newPrimitive = getCircle({ uuid: this.id }, this.center, this.radius, 0.001, this.width, this.color)
    itemManager.updatePrimitive(this.id, newPrimitive)
  }
}

export { Circle }

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
  Billboard
} from "mars3d-cesium"
// customs
import { coordinateToCartesian3, cartesian3ToCoordinate } from "../utils"
import { drawPoint } from "../core"
import { createTextLabel, createTextLabelImg } from "../core/point/textLabel"
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

class Label {
  public id: string
  public name = "label"
  controlPoints: Cartesian3[]
  viewer: Viewer
  dragHandler: ScreenSpaceEventHandler
  // 可编辑属性
  text: string = "默认标签"
  scale = 1
  textColor = "#FFFFFF"
  bgColor = "#F28500"
  boardColor = "#FFFFFF"
  focusedColor = "#0BFFFF"
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

  public draw(text = this.text, textColor = this.textColor, backgroundColor = this.bgColor): void {
    drawPoint(
      this.viewer,
      {
        url: createTextLabelImg(text, {
          textColor: textColor,
          backgroundColor: backgroundColor,
          borderColor: this.boardColor
        }).texture
      },
      (e) => {
        // this.viewer.scene.primitives.add(e.p)
        itemManager.add(e.id, e)
        this.id = e.id
        this.controlPoints = e.coordinates.map((c) => coordinateToCartesian3(c, this.viewer))
        this.primitive = e.p
      }
    )
  }

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

  public bindContextMenu(content: I_ContextMenu<BaseEntity>[]) {
    this.contextMenu = content
  }

  private addHelper() {
    // this.primitive.removeAll()
    this.viewer.scene.primitives.add(helperPrimitives)
    // this.viewer.scene.primitives.raiseToTop(helperPrimitives.get(0))
    // this.viewer.scene.primitives.lowerToBottom(this.primitive.get(0))
    this.controlPoints.forEach((controlPoint, index) => {
      helperPrimitives.add({
        id: { index, parentId: this.id },
        show: true,
        position: controlPoint,
        image: createTextLabelImg(this.text, {
          textColor: this.textColor,
          borderColor: this.focusedColor,
          backgroundColor: this.bgColor
        }).texture,
        scale: 1.0,
        disableDepthTestDistance: Number.POSITIVE_INFINITY
        // heightReference: HeightReference.NONE
      })
    })
  }

  private onLeftClick() {
    this.dragHandler.setInputAction((e) => {
      const picked = this.viewer.scene.pick(e.position)

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
      console.log("llllll")

      this.endDrag()
    }
    this.addHelper()
    this.editing = true
  }

  endDrag() {
    helperPrimitives.removeAll()
    this.editing = false

    // if (this.primitive.length >= 1) return

    // this.primitive.add({
    //   id: this.id,
    //   show: true,
    //   position: this.controlPoints[0],
    //   image: createTextLabelImg(this.text, {
    //     textColor: this.textColor,
    //     borderColor: "#FFF",
    //     backgroundColor: this.bgColor
    //   }).texture,
    //   scale: 1.0
    // })
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
              image: createTextLabelImg(this.text, {
                textColor: this.textColor,
                borderColor: this.focusedColor,
                backgroundColor: this.bgColor
              }).texture,
              scale: 1.0,
              disableDepthTestDistance: Number.POSITIVE_INFINITY
            })
            this.controlPoints[pickedControlPoint.primitive.id.index] = position
            // 更新
            this.primitive.removeAll()
            this.primitive.add({
              id: { uuid: this.id },
              show: true,
              position: this.controlPoints[0],
              image: createTextLabelImg(this.text, {
                textColor: this.textColor,
                borderColor: "#FFF",
                backgroundColor: this.bgColor
              }).texture,
              scale: 1.0
            })
          }
        }, ScreenSpaceEventType.MOUSE_MOVE)
        this.dragHandler.setInputAction((e) => {
          this.viewer.scene.screenSpaceCameraController.enableRotate = true
          this.dragHandler.removeInputAction(ScreenSpaceEventType.MOUSE_MOVE)
          this.dragHandler.removeInputAction(ScreenSpaceEventType.LEFT_UP)
        }, ScreenSpaceEventType.LEFT_UP)
      }
    }, ScreenSpaceEventType.LEFT_DOWN)
  }

  /**
   * 更新字体颜色和背景颜色
   * @param color
   */
  public updateColor(textColor: string, bgColor: string) {
    this.textColor = textColor
    this.bgColor = bgColor
    this.primitive.get(0).image = createTextLabelImg(this.text, {
      textColor: this.textColor,
      borderColor: "#FFF",
      backgroundColor: this.bgColor
    }).texture
  }

  public updateScale(scale: number) {
    this.scale = scale
    this.primitive.get(0).scale = this.scale
  }

  /**
   * 更新标签内容
   */
  public updateText(text: string) {
    this.text = text
    this.primitive.get(0).image = createTextLabelImg(this.text, {
      textColor: this.textColor,
      borderColor: "#FFF",
      backgroundColor: this.bgColor
    }).texture
  }

  /**
   * 更新控制点
   */
  public updatePositions(positions: Coordinate[]) {
    this.primitive.removeAll()
    this.primitive.add({
      id: this.id,
      show: true,
      position: this.controlPoints[0],
      image: createTextLabelImg(this.text, {
        textColor: this.textColor,
        borderColor: this.boardColor,
        backgroundColor: this.bgColor
      }).texture,
      scale: 1.0
    })
  }
}

export { Label }

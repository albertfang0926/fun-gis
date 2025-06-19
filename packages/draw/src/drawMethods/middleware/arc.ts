import {
  Viewer,
  Cartesian3,
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
import { coordinateToCartesian3, cartesian3ToCoordinate } from "../utils"
import { drawCustomMilitary } from "../core"
import { itemManager } from "../manager/primitive"
import { calculateArcPoints } from "../core/military/utils/creatMilitary"
import { helperPrimitives } from "./utils/dragHelper"
import { updateSectorVertices } from "./utils/sectorHelper"
import { onRightClick } from "./utils/mouse"
// assets
import helpPoint from "../../assets/images/primitives/location_type1.png" // "../assets/images/primitives/location_type1.png"
import highlightHelpPoint from "../../assets/images/primitives/point_selected.png" // "../assets/images/primitives/location_type1.png"
// types
import type { Coordinate } from "../types/coordinate"
import type { I_ContextMenu } from "../types/contextMenu"

// const helperPrimitives = new BillboardCollection()

class Arc {
  id: string
  controlPoints: Cartesian3[]
  viewer: Viewer
  // helperPrimitives: BillboardCollection
  dragHandler: ScreenSpaceEventHandler
  width = 2
  color = "#ffffff"
  editing = false
  primitive: Primitive
  contextMenu: I_ContextMenu<this>[] = []

  constructor(viewer: Viewer, onRightClick: (e) => void) {
    this.viewer = viewer
    this.dragHandler = new ScreenSpaceEventHandler(this.viewer.canvas)
    // init mouse events
    this.onDrag()
    this._onRightClick(onRightClick)
  }

  public draw(): void {
    drawCustomMilitary(this.viewer, { title: "弧形" }, (e) => {
      // this.viewer.scene.primitives.add(e.p)
      itemManager.add(e.id.uuid, e)
      this.id = e.id.uuid
      this.controlPoints = [e.coordinates[0], e.positions[0], e.positions[e.positions.length - 1]].map((c) =>
        coordinateToCartesian3(c, this.viewer)
      ) // e.coordinates.map((c) => coordinateToCartesian3(c, this.viewer))
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
        const pickedPrimitive = pickedControlPoint.primitive
        // 高亮
        pickedPrimitive.scale = 0.5
        pickedPrimitive.image = highlightHelpPoint

        const focusedIndex = pickedControlPoint.primitive.id.index
        // 移动点位
        this.dragHandler.setInputAction((e: any) => {
          this.viewer.scene.screenSpaceCameraController.enableRotate = false // 禁止旋转
          const position = this.viewer.camera.pickEllipsoid(e.endPosition, this.viewer.scene.globe.ellipsoid)
          if (position) {
            this.controlPoints[focusedIndex] = position
            if (focusedIndex === 0) {
              this.controlPoints[2] = updateSectorVertices(position, this.controlPoints[1], this.controlPoints[2])
            } else {
              let fixedIndex = 3 - focusedIndex
              this.controlPoints[fixedIndex] = updateSectorVertices(
                this.controlPoints[0],
                position,
                this.controlPoints[fixedIndex]
              )
            }
            helperPrimitives.removeAll()
            this.controlPoints.forEach((controlPoint, index) => {
              const h = helperPrimitives.add({
                id: { index, parentId: this.id },
                show: true,
                position: controlPoint,
                image: index === focusedIndex ? highlightHelpPoint : helpPoint,
                scale: index === focusedIndex ? 0.5 : 0.3,
                verticalOrigin: VerticalOrigin.CENTER,
                scaleByDistance: new NearFarScalar(1.5e2, 1.5, 8.0e6, 0.0),
                disableDepthTestDistance: Number.POSITIVE_INFINITY,
                heightReference: HeightReference.NONE
              })
              if (focusedIndex === index) pickedControlPoint.primitive = h
            })
            const vertices = calculateArcPoints(this.controlPoints.map((c) => cartesian3ToCoordinate(c, this.viewer)))
            const newPrimitive = getPrimitive(vertices, { uuid: this.id }, true, this.width, this.color)
            itemManager.updatePrimitive(this.id, newPrimitive)
          }
        }, ScreenSpaceEventType.MOUSE_MOVE)
        this.dragHandler.setInputAction((e) => {
          // restoreBillboard(billBoardStorage)
          pickedControlPoint.primitive.scale = 0.3
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
    this.primitive.appearance.material.uniforms.color = Color.fromCssColorString(color)
  }

  /**
   * 更新线宽
   */
  updateWidth(width: number) {
    this.width = width
    const newPrimitive = getPrimitive(
      calculateArcPoints(this.controlPoints.map((c) => cartesian3ToCoordinate(c, this.viewer))),
      this.id,
      true,
      width,
      this.color
    )
    itemManager.updatePrimitive(this.id, newPrimitive)
  }

  /**
   * 更新控制点
   */
  updatePositions(positions: Coordinate[]) {
    this.controlPoints = positions.map((p) => coordinateToCartesian3(p, this.viewer))
    const newPrimitive = getPrimitive(
      calculateArcPoints(this.controlPoints.map((c) => cartesian3ToCoordinate(c, this.viewer))),
      this.id,
      true,
      this.width,
      this.color
    )
    itemManager.updatePrimitive(this.id, newPrimitive)
  }
}

const getPrimitive = (
  positions: Cartesian3[],
  id: any = undefined,
  allowPicking = false,
  width = 3,
  color = "#ffffff"
) => {
  // 生成新的primitive
  const geometryInstance = new GeometryInstance({
    geometry: new PolylineGeometry({
      positions: positions,
      width: width,
      arcType: ArcType.GEODESIC
    }),
    id: id
  })
  const primitive = new Primitive({
    appearance: new PolylineMaterialAppearance({
      material: Material.fromType("Color", {
        color: Color.fromCssColorString(color)
      })
    }),
    geometryInstances: [geometryInstance],
    releaseGeometryInstances: true,
    asynchronous: false,
    allowPicking: allowPicking
  })
  return primitive
}

export { Arc }

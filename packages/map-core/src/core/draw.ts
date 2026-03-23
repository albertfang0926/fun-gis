const viewer = new Cesium.Viewer("cesiumContainer", {
  selectionIndicator: false,
  infoBox: false,
  terrain: Cesium.Terrain.fromWorldTerrain()
})

viewer.cesiumWidget.screenSpaceEventHandler.removeInputAction(
  Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
)
function createPoint(worldPosition) {
  const point = viewer.entities.add({
    position: worldPosition,
    point: {
      color: Cesium.Color.WHITE,
      pixelSize: 5,
      heightReference: Cesium.HeightReference.CLAMP_TO_GROUND
    }
  })
  return point
}

let drawingMode = "line"
function drawShape(positionData) {
  let shape
  if (drawingMode === "line") {
    shape = viewer.entities.add({
      polyline: {
        positions: positionData,
        clampToGround: true,
        width: 3
      }
    })
  } else if (drawingMode === "polygon") {
    shape = viewer.entities.add({
      polygon: {
        hierarchy: positionData,
        material: new Cesium.ColorMaterialProperty(
          Cesium.Color.WHITE.withAlpha(0.7)
        )
      }
    })
  }
  return shape
}
let activeShapePoints = []
let activeShape
let floatingPoint
const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
handler.setInputAction(function (event) {
  // We use `viewer.scene.globe.pick here instead of `viewer.camera.pickEllipsoid` so that
  // we get the correct point when mousing over terrain.
  const ray = viewer.camera.getPickRay(event.position)
  const earthPosition = viewer.scene.globe.pick(ray, viewer.scene)
  // `earthPosition` will be undefined if our mouse is not over the globe.
  if (Cesium.defined(earthPosition)) {
    if (activeShapePoints.length === 0) {
      floatingPoint = createPoint(earthPosition)
      activeShapePoints.push(earthPosition)
      const dynamicPositions = new Cesium.CallbackProperty(function () {
        if (drawingMode === "polygon") {
          return new Cesium.PolygonHierarchy(activeShapePoints)
        }
        return activeShapePoints
      }, false)
      activeShape = drawShape(dynamicPositions)
    }
    activeShapePoints.push(earthPosition)
    createPoint(earthPosition)
  }
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)

handler.setInputAction(function (event) {
  if (Cesium.defined(floatingPoint)) {
    const ray = viewer.camera.getPickRay(event.endPosition)
    const newPosition = viewer.scene.globe.pick(ray, viewer.scene)
    if (Cesium.defined(newPosition)) {
      floatingPoint.position.setValue(newPosition)
      activeShapePoints.pop()
      activeShapePoints.push(newPosition)
    }
  }
}, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
// Redraw the shape so it's not dynamic and remove the dynamic shape.
function terminateShape() {
  activeShapePoints.pop()
  drawShape(activeShapePoints)
  viewer.entities.remove(floatingPoint)
  viewer.entities.remove(activeShape)
  floatingPoint = undefined
  activeShape = undefined
  activeShapePoints = []
}
handler.setInputAction(function (event) {
  terminateShape()
}, Cesium.ScreenSpaceEventType.RIGHT_CLICK)

const options = [
  {
    text: "Draw Lines",
    onselect: function () {
      if (!Cesium.Entity.supportsPolylinesOnTerrain(viewer.scene)) {
        window.alert("This browser does not support polylines on terrain.")
      }

      terminateShape()
      drawingMode = "line"
    }
  },
  {
    text: "Draw Polygons",
    onselect: function () {
      terminateShape()
      drawingMode = "polygon"
    }
  }
]

Sandcastle.addToolbarMenu(options)
// Zoom in to an area with mountains
viewer.camera.lookAt(
  Cesium.Cartesian3.fromDegrees(-122.2058, 46.1955, 1000.0),
  new Cesium.Cartesian3(5000.0, 5000.0, 5000.0)
)
viewer.camera.lookAtTransform(Cesium.Matrix4.IDENTITY)

// import {
//   Cartesian3,
//   Color,
//   PointPrimitive,
//   GroundPolylinePrimitive
// } from "cesium"
// import type { Viewer } from "cesium"

// // 绘制
// // 鼠标事件管理器
// class MouseEventManager {
//   private _viewer: Viewer
//   private _handler: any

//   constructor(viewer: Viewer) {
//     this._viewer = viewer
//     this._handler = new this._viewer.scene.screenSpaceEventHandler(
//       this._viewer.scene.canvas
//     )
//   }

//   // 添加左键点击事件
//   onLeftClick(callback: (position: Cartesian3) => void) {
//     this._handler.setInputAction((event: any) => {
//       const position = this._viewer.scene.pickPosition(event.position)
//       if (!position) return
//       callback(position)
//     }, this._viewer.ScreenSpaceEventType.LEFT_CLICK)
//   }

//   // 添加右键点击事件
//   onRightClick(callback: () => void) {
//     this._handler.setInputAction(() => {
//       callback()
//     }, this._viewer.ScreenSpaceEventType.RIGHT_CLICK)
//   }

//   // 销毁事件处理器
//   destroy() {
//     this._handler.destroy()
//   }
// }

// export class DrawManager {
//   private _viewer?: Viewer

//   // 初始化
//   init(viewer: Viewer) {
//     this._viewer = viewer
//   }

//   // 绘制点
//   drawPoint(position: Cartesian3, color: Color) {
//     if (!this._viewer) throw new Error("Viewer is not initialized")
//     const point = new PointPrimitive()
//     point.position = position
//     point.color = color
//     this._viewer.scene.primitives.add(point)
//   }

//   // 绘制线
//   drawLine(color: Color) {
//     if (!this._viewer) throw new Error("Viewer is not initialized")

//     const positions: Cartesian3[] = []
//     let polyline: GroundPolylinePrimitive | undefined

//     const mouseEvents = new MouseEventManager(this._viewer)

//     // 左键点击添加点
//     mouseEvents.onLeftClick((position) => {
//       positions.push(position)

//       // 绘制点
//       const point = new PointPrimitive()
//       point.position = position
//       point.color = color
//       this._viewer!.scene.primitives.add(point)

//       // 绘制线
//       if (positions.length >= 2) {
//         if (polyline) {
//           this._viewer!.scene.primitives.remove(polyline)
//         }
//         polyline = new GroundPolylinePrimitive({
//           positions: positions,
//           appearance: {
//             material: color
//           }
//         })
//         this._viewer!.scene.primitives.add(polyline)
//       }
//     })

//     // 右键结束绘制
//     mouseEvents.onRightClick(() => {
//       mouseEvents.destroy()
//     })
//   }
// }

class Draw {
  private drawManager: DrawManager

  constructor(viewer: Cesium.Viewer) {
    // ...
    this.drawManager = new DrawManager(viewer)
  }

  private handleDrawComplete(entity: Cesium.Entity, type: DrawType) {
    const drawEntity: DrawEntity = {
      id: generateUniqueId(), // 需要实现一个生成唯一ID的方法
      type,
      entity
    }
    this.drawManager.addEntity(drawEntity)
  }
}

// 该 playground 特意不使用任何前端框架，证明 @fun-gis/entity-manager 零框架依赖
import * as Cesium from "cesium"

import {
  type CompositeEntity,
  CompositeType,
  DataManager,
  type DrawEntity,
  DrawType,
  DrawVisualizer
} from "../../src/index"

const viewer = new Cesium.Viewer("map-container", {
  baseLayer: new Cesium.ImageryLayer(
    new Cesium.OpenStreetMapImageryProvider({
      url: "https://tile.openstreetmap.org/"
    })
  ),
  baseLayerPicker: false,
  geocoder: false,
  homeButton: false,
  sceneModePicker: false,
  navigationHelpButton: false,
  fullscreenButton: false,
  animation: false,
  timeline: false,
  infoBox: false,
  selectionIndicator: false
})
viewer.camera.flyTo({
  destination: Cesium.Cartesian3.fromDegrees(116.39, 39.9, 25000)
})

// 统一管理入口：工厂 + 事件 + 可视化器注册
const dataManager = new DataManager(viewer)
dataManager.registerVisualizer("draw", new DrawVisualizer(viewer))

for (const eventName of [
  "entityCreated",
  "visibilityChanged",
  "entityRemoved"
]) {
  dataManager.on(eventName, (payload: unknown) => {
    console.log(`[entity-manager] ${eventName}`, payload)
  })
}

// 通过工厂创建绘制实体并挂到 Cesium 上
const point = dataManager.createEntity<DrawEntity>("draw", {
  type: DrawType.Point,
  entity: viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(116.39, 39.92),
    point: { pixelSize: 14, color: Cesium.Color.YELLOW }
  }),
  properties: { position: Cesium.Cartesian3.fromDegrees(116.39, 39.92) }
})

const line = dataManager.createEntity<DrawEntity>("draw", {
  type: DrawType.Line,
  entity: viewer.entities.add({
    polyline: {
      positions: Cesium.Cartesian3.fromDegreesArray([
        116.36, 39.88, 116.42, 39.88
      ]),
      width: 4,
      material: Cesium.Color.CYAN
    }
  }),
  properties: {
    positions: Cesium.Cartesian3.fromDegreesArray([
      116.36, 39.88, 116.42, 39.88
    ])
  }
})

// 复合实体：把多个子实体归到同一业务对象下统一管理
const group = dataManager.createEntity<CompositeEntity>("composite", {
  type: CompositeType.Planning,
  name: "规划分组"
})
dataManager.addChildToComposite(group.id, point)
dataManager.addChildToComposite(group.id, line)

// 工具栏：演示显隐 / 移除 / 按类型查询
const toolbar = document.getElementById("toolbar")!

function addButton(label: string, onClick: () => void) {
  const button = document.createElement("button")
  button.textContent = label
  button.addEventListener("click", onClick)
  toolbar.appendChild(button)
}

addButton(`隐藏 ${group.name}`, () => {
  dataManager.setEntityVisibility(group.id, false)
})
addButton(`显示 ${group.name}`, () => {
  dataManager.setEntityVisibility(group.id, true)
})
addButton("按类型查询 Line", () => {
  console.log(
    "Line 实体：",
    dataManager.getEntitiesByType(DrawType.Line).map((it) => it.id)
  )
})
addButton("移除全部", () => {
  for (const entity of dataManager.getAllEntities()) {
    dataManager.removeEntity(entity.id)
  }
})

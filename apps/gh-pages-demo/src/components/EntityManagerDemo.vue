<template>
  <div class="map-container"></div>
  <div class="panel">
    <h1>@fun-gis/entity-manager 实体管理示例</h1>
    <p>
      通过 DataManager 工厂创建点/线实体并归入同一分组，控制台可观察
      entityCreated / visibilityChanged / entityRemoved 生命周期事件。
    </p>
    <div class="actions">
      <button @click="hideGroup">隐藏分组</button>
      <button @click="showGroup">显示分组</button>
      <button @click="queryLines">按类型查询 Line</button>
      <button @click="removeAll">移除全部</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  type CompositeEntity,
  CompositeType,
  DataManager,
  type DrawEntity,
  DrawType,
  DrawVisualizer
} from "@fun-gis/entity-manager"
import * as Cesium from "cesium"
import { onMounted, onUnmounted } from "vue"

let viewer: Cesium.Viewer | null = null
let dataManager: DataManager | null = null
let group: CompositeEntity | null = null

function hideGroup() {
  if (group) dataManager?.setEntityVisibility(group.id, false)
}

function showGroup() {
  if (group) dataManager?.setEntityVisibility(group.id, true)
}

function queryLines() {
  console.log(
    "Line 实体：",
    dataManager?.getEntitiesByType(DrawType.Line).map((it) => it.id)
  )
}

function removeAll() {
  dataManager
    ?.getAllEntities()
    .forEach((it) => dataManager?.removeEntity(it.id))
}

onMounted(() => {
  viewer = new Cesium.Viewer("map-container", {
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

  dataManager = new DataManager(viewer)
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

  group = dataManager.createEntity<CompositeEntity>("composite", {
    type: CompositeType.Planning,
    name: "规划分组"
  })
  dataManager.addChildToComposite(group.id, point)
  dataManager.addChildToComposite(group.id, line)
})

onUnmounted(() => {
  viewer?.destroy()
  viewer = null
  dataManager = null
  group = null
})
</script>

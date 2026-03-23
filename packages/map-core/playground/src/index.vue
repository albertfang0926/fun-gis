<template>
  <div id="map-container"></div>
  <BasePanel></BasePanel>
</template>

<script setup lang="ts">
// third-parties
import { Cartesian3 } from "cesium"
import { onMounted } from "vue"
// customs
import { CesiumViewer } from "../../src/index"
// components
import { BasePanel } from "../../src/components/index"
import { FlightRoute } from "./utils/flightRoute"
import * as Cesium from "cesium"

const DEFAULT_HOME_POSITION: [number, number, number] = [
  116.391333, 39.90731, 1e3
]

const flightRoute = new FlightRoute()

onMounted(async () => {
  const cesiumViewer = new CesiumViewer("map-container")
  cesiumViewer.initMap()
  const viewer = cesiumViewer.viewer
  if (!viewer) return
  const worldTerrain = await Cesium.createWorldTerrainAsync()
  viewer.scene.terrainProvider = worldTerrain
  // viewer.scene.globe.show = false
  const e = viewer.entities.add({
    polygon: {
      hierarchy: new Cesium.PolygonHierarchy(
        Cesium.Cartesian3.fromDegreesArray([
          117.1636747,
          31.8473173, // 1. 左上
          117.1636747,
          31.8373173, // 4. 左下 (逆时针)
          117.1736747,
          31.8373173, // 3. 右下
          117.1736747,
          31.8473173 // 2. 右上
        ])
      ),
      material: Cesium.Color.BLUE.withAlpha(0.5)
    }
  })

  viewer.zoomTo(e)

  if (viewer) {
    viewer.camera.setView({
      destination: Cartesian3.fromDegrees(...DEFAULT_HOME_POSITION)
    })
    flightRoute.drawRoute(viewer)
  }
})
</script>

<style lang="less">
#map-container {
  width: 100%;
  height: 100%;
  margin: 0px;
}
</style>

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

const DEFAULT_HOME_POSITION: [number, number, number] = [
  116.391333, 39.90731, 1e3
]

const flightRoute = new FlightRoute()

onMounted(() => {
  const cesiumViewer = new CesiumViewer("map-container")
  cesiumViewer.initMap()
  const viewer = cesiumViewer.viewer
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

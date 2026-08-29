<template>
  <div id="map-container" class="map-container"></div>
  <DemoPanel v-if="mapMounted"></DemoPanel>
</template>

<script setup lang="ts">
import * as Cesium from "cesium"
import { onMounted, provide, ref, shallowRef } from "vue"

import { drawTool } from "../../src/drawTool"
// components
import DemoPanel from "./components/demoPanel.vue"

const viewer = shallowRef<Cesium.Viewer | undefined>()
const mapMounted = ref(false)
provide("cesium-viewer", viewer)

onMounted(() => {
  const cesiumViewer = new Cesium.Viewer("map-container", {
    baseLayer: new Cesium.OpenStreetMapImageryProvider({
      url: "https://tile.openstreetmap.org/"
    }),
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
  cesiumViewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(116.4, 30, 2e6)
  })

  viewer.value = cesiumViewer
  mapMounted.value = true

  drawTool.init(cesiumViewer)
})
</script>

<style scoped lang="less">
.map-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
</style>

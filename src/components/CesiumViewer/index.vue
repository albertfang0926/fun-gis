<template>
  <div id="viewer-container" ref="viewerRef"></div>
</template>

<script setup lang="ts">
import {
  Viewer,
  Cartesian3,
  ImageryLayer,
  TileMapServiceImageryProvider,
  buildModuleUrl
} from "cesium"
import { onMounted, ref } from "vue"
import { useViewerStore } from "@/stores/cesiumViewer"
const viewerRef = ref()
onMounted(async () => {
  const viewer = new Viewer(viewerRef.value, {
    animation: false,
    homeButton: true,
    geocoder: true,
    baseLayerPicker: false,
    timeline: false,
    fullscreenButton: false,
    infoBox: false,
    sceneModePicker: true,
    navigationInstructionsInitiallyVisible: false,
    navigationHelpButton: false,
    selectionIndicator: false
  })
  ;(viewer.cesiumWidget.creditContainer as any).style.display = "none"
  // viewer.scene.base
  // const viewer = new Viewer(viewerRef.value, {
  //   baseLayer: new ImageryLayer(
  //     await TileMapServiceImageryProvider.fromUrl(buildModuleUrl("Assets/Textures/NaturalEarthII")),
  //     {}
  //   )
  // })
  const homeCoord: [number, number, number] = [117.43111, 32.100556, 1e6]
  viewer.camera.setView({ destination: Cartesian3.fromDegrees(...homeCoord) })
  useViewerStore().setViewer(viewer)
})
</script>

<style scoped lang="less">
#viewer-container {
  width: 100%;
  height: 100%;
}
</style>

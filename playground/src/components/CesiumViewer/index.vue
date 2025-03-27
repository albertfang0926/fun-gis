<template>
  <div id="viewer-container" ref="viewerRef"></div>
</template>

<script setup lang="ts">
import { Viewer, Cartesian3, Ion } from "cesium"
import { onMounted, ref } from "vue"
import { useViewerStore } from "@/stores/cesiumViewer"
import {
  DEFAULT_ACCESS_TOKEN,
  DEFAULT_HOME_POSITION
} from "@/components/CesiumViewer/default"
import type { ICoord3d } from "@/components/CesiumViewer/types"

const viewerRef = ref()
Ion.defaultAccessToken = DEFAULT_ACCESS_TOKEN
onMounted(async () => {
  const viewer = new Viewer(viewerRef.value, {
    animation: false,
    shouldAnimate: true,
    homeButton: true,
    geocoder: false,
    baseLayerPicker: false,
    timeline: false,
    fullscreenButton: false,
    infoBox: false,
    sceneModePicker: true,
    navigationInstructionsInitiallyVisible: false,
    navigationHelpButton: false,
    selectionIndicator: false
    // baseLayer: new ImageryLayer(
    //   await TileMapServiceImageryProvider.fromUrl(buildModuleUrl("Assets/Textures/NaturalEarthII")),
    //   {}
    // )
  })
  ;(viewer.cesiumWidget.creditContainer as any).style.display = "none"
  const homeCoord: ICoord3d = DEFAULT_HOME_POSITION
  viewer.camera.setView({ destination: Cartesian3.fromDegrees(...homeCoord) })
  // provide("cesium-viewer", viewer)
  useViewerStore().setViewer(viewer)
})
</script>

<style scoped lang="less">
#viewer-container {
  width: 100%;
  height: 100%;
}
</style>

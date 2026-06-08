<template>
  <div id="map-container"></div>
  <!-- <BasePanel></BasePanel> -->
</template>

<script setup lang="ts">
// import * as Cesium from "cesium"
// import { ImageryProvider, Ion } from "cesium"
import { onMounted } from "vue"

import { LayerDataSourceType } from "../../src/core/layer-system/constants"
// import { BasePanel } from "../../src/components/index"
import { CesiumViewer } from "../../src/index"
// import { FlightRoute } from "./utils/flightRoute"

// const flightRoute = new FlightRoute()

onMounted(async () => {
  const cesiumViewer = new CesiumViewer("map-container", {
    ionToken: import.meta.env.VITE_CESIUM_ION_TOKEN,
    // homePosition: [116.391333, 39.90731, 1e3],
    imagery: {
      type: LayerDataSourceType.Imagery,
      providerType: "ion",
      providerOptions: {
        assetId: 2
      }
    },
    terrain: {
      type: LayerDataSourceType.Terrain,
      requestVertexNormals: true
    },
    flyToHome: true
  })
  await cesiumViewer.initMap()
  // const viewer = cesiumViewer.viewer
  // if (!viewer) return

  // const e = viewer.entities.add({
  //   polygon: {
  //     hierarchy: new Cesium.PolygonHierarchy(
  //       Cesium.Cartesian3.fromDegreesArray([
  //         117.1636747,
  //         31.8473173, // 1. 左上
  //         117.1636747,
  //         31.8373173, // 4. 左下 (逆时针)
  //         117.1736747,
  //         31.8373173, // 3. 右下
  //         117.1736747,
  //         31.8473173 // 2. 右上
  //       ])
  //     ),
  //     material: Cesium.Color.BLUE.withAlpha(0.5)
  //   }
  // })

  // viewer.zoomTo(e)
  // flightRoute.drawRoute(viewer)
})
</script>

<style lang="less">
#map-container {
  width: 100%;
  height: 100%;
  margin: 0px;
}
</style>

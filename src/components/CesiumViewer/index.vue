<template>
  <div id="viewer-container" ref="viewerRef"></div>
</template>

<script setup lang="ts">
import { Viewer, ImageryLayer, TileMapServiceImageryProvider, buildModuleUrl } from "cesium"
import { onMounted, ref } from "vue"
import { useViewerStore } from "@/stores/cesiumViewer"
const viewerRef = ref()
onMounted(async () => {
  const viewer = new Viewer(viewerRef.value, {
    baseLayer: new ImageryLayer(
      await TileMapServiceImageryProvider.fromUrl(buildModuleUrl("Assets/Textures/NaturalEarthII")),
      {}
    )
  })
  useViewerStore().setViewer(viewer)
})
</script>

<style scoped lang="less">
#viewer-container {
  width: 100%;
  height: 100%;
}
</style>

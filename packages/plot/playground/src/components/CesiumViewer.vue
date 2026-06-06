<script setup lang="ts">
import { CesiumViewer } from "@fesium/core"
import { onMounted, onUnmounted, ref } from "vue"

const containerRef = ref<HTMLDivElement>()
let cesiumViewer: CesiumViewer | null = null

onMounted(() => {
  if (containerRef.value) {
    cesiumViewer = new CesiumViewer(containerRef.value.id)
    cesiumViewer.initMap()
  }
})

onUnmounted(() => {
  if (cesiumViewer?.viewer) {
    cesiumViewer.viewer.destroy()
  }
})
</script>

<template>
  <div class="cesium-container">
    <div ref="containerRef" id="cesiumContainer" class="cesium-viewer"></div>
  </div>
</template>

<style scoped>
.cesium-container {
  width: 100%;
  height: 100vh;
  position: relative;
}

.cesium-viewer {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div id="map-container"></div>
</template>

<script setup lang="ts">
import { CesiumViewer } from "../../src/index" // "@/index" //
import { onMounted } from "vue"

onMounted(() => {
  new CesiumViewer("map-container").initMap()
})
</script>

<style lang="less">
#map-container {
  width: 100%;
  height: 100%;
  margin: 0px;
}
</style>

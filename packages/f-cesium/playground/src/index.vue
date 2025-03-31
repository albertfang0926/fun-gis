<template>
  <div id="map-container"></div>
  <BasePanel></BasePanel>
</template>

<script setup lang="ts">
// third-parties
import { onMounted } from "vue"
// customs
import { CesiumViewer } from "../../src/index"
// components
import { BasePanel } from "../../src/components/index"

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

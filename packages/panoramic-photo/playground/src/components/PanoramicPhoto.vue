<template>
  <div id="panoramic-viewer"></div>
</template>

<script setup lang="ts">
import { Viewer } from "@photo-sphere-viewer/core"
import TestPhoto from "../assets/大疆天空之城全景图.jpg"
import "@photo-sphere-viewer/core/index.css"
import { onMounted } from "vue"

onMounted(() => {
  const viewer = new Viewer({
    container: "panoramic-viewer",
    panorama: TestPhoto
  })
})
</script>

<style scoped>
#panoramic-viewer {
  width: 100vw;
  height: 100vh;
}
</style>

<script setup lang="ts">
import type { Position } from "@photo-sphere-viewer/core"
import { ref } from "vue"

import PanoramicPhoto from "../../src/components/PanoramicPhoto.vue"
import {
  getPanoramaMetadata,
  type IPanoramaMetadata
} from "../../src/utils/exif"
import TestPhoto from "./assets/大疆天空之城全景图.jpg"

const currentPosition = ref<Position>({ yaw: 0, pitch: 0 })
const currentFov = ref(0)
const heading = ref(0)

getPanoramaMetadata(TestPhoto).then((metadata: IPanoramaMetadata) => {
  heading.value = metadata.orientation.heading
})

function onPositionUpdated(position: Position) {
  currentPosition.value = position
}

function onZoomUpdated(vFov: number) {
  currentFov.value = vFov
}
</script>

<template>
  <PanoramicPhoto
    class="viewer"
    :panorama="TestPhoto"
    @position-updated="onPositionUpdated"
    @zoom-updated="onZoomUpdated"
  />

  <div class="hud">
    Yaw: {{ Math.round((currentPosition.yaw / Math.PI) * 180) }}° <br />
    Pitch: {{ Math.round((currentPosition.pitch / Math.PI) * 180) }}° <br />
    FOV (垂直): {{ currentFov }}° <br />
    EXIF Heading: {{ heading }}°
  </div>
</template>

<style scoped>
.viewer {
  width: 100vw;
  height: 100vh;
}

.hud {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  padding: 20px 40px;
  z-index: 10;
}
</style>

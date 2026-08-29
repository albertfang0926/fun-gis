<template>
  <div class="wrap">
    <PanoramicPhoto
      v-if="file"
      class="viewer"
      :panorama="file"
      @position-updated="onPositionUpdated"
      @zoom-updated="onZoomUpdated"
    />
    <label v-else class="picker">
      选择一张全景图（JPG）开始体验
      <input type="file" accept="image/jpeg" @change="onFile" />
    </label>

    <div v-if="file" class="panel">
      <h1>@fun-gis/panoramic-photo 全景示例</h1>
      <p>拖拽旋转，滚轮缩放。</p>
      <p>
        Yaw: {{ Math.round((position.yaw / Math.PI) * 180) }}° / Pitch:
        {{ Math.round((position.pitch / Math.PI) * 180) }}° / FOV: {{ vFov }}° /
        EXIF Heading: {{ heading }}°
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import "@fun-gis/panoramic-photo/style"

import {
  getPanoramaMetadata,
  PanoramicPhoto,
  type Position
} from "@fun-gis/panoramic-photo"
import { ref } from "vue"

const file = ref<File>()
const position = ref<Position>({ yaw: 0, pitch: 0 })
const vFov = ref(0)
const heading = ref(0)

function onFile(event: Event) {
  const input = event.target as HTMLInputElement
  file.value = input.files?.[0]
  if (file.value) {
    getPanoramaMetadata(file.value).then((metadata) => {
      heading.value = metadata.orientation.heading
    })
  }
}

function onPositionUpdated(value: Position) {
  position.value = value
}

function onZoomUpdated(value: number) {
  vFov.value = value
}
</script>

<style scoped>
.wrap {
  position: absolute;
  inset: 0;
}
.viewer {
  width: 100%;
  height: 100%;
}
.picker {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 16px 24px;
  border: 1px dashed #1677ff;
  border-radius: 8px;
  color: #1677ff;
  cursor: pointer;
  font-family: sans-serif;
}
.picker input {
  display: none;
}
</style>

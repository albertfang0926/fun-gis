<template>
  <div id="map-container"></div>
  <div class="panel">
    <h1>@fun-gis/draw 标绘示例</h1>
    <p>点击图形开始绘制，右键 / 双击结束（entity 系图形会自动进入编辑态）。</p>
    <div class="buttons">
      <button
        v-for="shape in shapes"
        :key="shape"
        :class="{ active: shape === activeShape }"
        @click="draw(shape)"
      >
        {{ shape }}
      </button>
    </div>
    <div class="actions">
      <button @click="deactivate">结束绘制</button>
      <button @click="clear">清空（primitive）</button>
    </div>
    <a
      class="repo"
      href="https://github.com/albertfang/fun-gis"
      target="_blank"
    >
      GitHub 仓库
    </a>
  </div>
</template>

<script setup lang="ts">
import * as Cesium from "cesium"
import { onMounted, onUnmounted, ref } from "vue"

import { drawTool } from "@fun-gis/draw"
import "@fun-gis/draw/style"

const shapes = [
  "Point",
  "Polyline",
  "Polygon",
  "Circle",
  "Rectangle",
  "Curve",
  "AttackArrow",
  "FineArrow",
  "DoubleArrow",
  "SwallowtailAttackArrow",
  "SquadCombat",
  "StraightArrow",
  "CurvedArrow",
  "AssaultDirection",
  "FreehandLine",
  "FreehandPolygon",
  "Ellipse",
  "Lune",
  "Triangle"
]
const activeShape = ref<string>()
let viewer: Cesium.Viewer | null = null

function draw(shape: string) {
  activeShape.value = shape
  drawTool.activate(shape)
}

function deactivate() {
  drawTool.deactivate()
  activeShape.value = undefined
}

function clear() {
  drawTool.clear()
  activeShape.value = undefined
}

onMounted(() => {
  viewer = new Cesium.Viewer("map-container", {
    baseLayer: new Cesium.ImageryLayer(
      new Cesium.OpenStreetMapImageryProvider({
        url: "https://tile.openstreetmap.org/"
      })
    ),
    baseLayerPicker: false,
    geocoder: false,
    homeButton: false,
    sceneModePicker: false,
    navigationHelpButton: false,
    fullscreenButton: false,
    animation: false,
    timeline: false,
    infoBox: false,
    selectionIndicator: false
  })
  viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(116.4, 30, 2e6)
  })

  drawTool.init(viewer)
  drawTool.on("drawEnd", () => {
    activeShape.value = undefined
  })
})

onUnmounted(() => {
  drawTool.clear()
  viewer?.destroy()
  viewer = null
})
</script>

<style>
html,
body,
#app {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
#map-container {
  position: absolute;
  inset: 0;
}
.panel {
  position: absolute;
  top: 24px;
  left: 24px;
  width: 340px;
  padding: 16px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  font-family: sans-serif;
}
.panel h1 {
  font-size: 18px;
  margin: 0 0 4px;
}
.panel p {
  font-size: 12px;
  color: #555;
  margin: 0 0 12px;
}
.buttons {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
}
.buttons button.active {
  background: #1677ff;
  color: #fff;
}
.actions {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  margin-top: 8px;
}
.repo {
  display: inline-block;
  margin-top: 12px;
  font-size: 12px;
}
</style>

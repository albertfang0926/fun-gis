<template>
  <component :is="activeDemo" />
  <nav class="tabs">
    <button
      v-for="(demo, key) in demoMap"
      :key="key"
      :class="{ active: key === activeKey }"
      @click="activeKey = key"
    >
      {{ demo.label }}
    </button>
    <a
      class="repo"
      href="https://github.com/albertfang/fun-gis"
      target="_blank"
    >
      GitHub 仓库
    </a>
  </nav>
</template>

<script setup lang="ts">
import { computed, ref } from "vue"

import DrawDemo from "./components/DrawDemo.vue"
import EntityManagerDemo from "./components/EntityManagerDemo.vue"
import PanoramicDemo from "./components/PanoramicDemo.vue"

const demoMap = {
  draw: { label: "标绘 @fun-gis/draw", component: DrawDemo },
  entity: {
    label: "实体管理 @fun-gis/entity-manager",
    component: EntityManagerDemo
  },
  panorama: { label: "全景 @fun-gis/panoramic-photo", component: PanoramicDemo }
}

type DemoKey = keyof typeof demoMap

const activeKey = ref<DemoKey>("draw")
const activeDemo = computed(() => demoMap[activeKey.value].component)
</script>

<style>
html,
body,
#app {
  margin: 0;
  height: 100%;
  overflow: hidden;
}
.map-container {
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
}
.tabs {
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
  align-items: center;
  padding: 8px 12px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  font-family: sans-serif;
  z-index: 100;
}
.tabs button.active {
  background: #1677ff;
  color: #fff;
}
.repo {
  font-size: 12px;
}
</style>

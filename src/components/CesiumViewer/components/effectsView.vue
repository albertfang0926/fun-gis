<template>
  <Button type="primary" @click="() => snow()">雨雪</Button>
</template>

<script setup lang="ts">
import { Button } from "ant-design-vue"
import { storeToRefs } from "pinia"
import { startSnow } from "../managers/effectsManagers/snow"
import { useViewerStore } from "@/stores/cesiumViewer"

const { viewer } = storeToRefs(useViewerStore())
const snow = () => {
  console.log("@snow", viewer.value)
  if (viewer.value) {
    startSnow(viewer.value)
  }
}
</script>

<style scoped></style>

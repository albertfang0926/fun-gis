<template>
  <div id="panoramic-viewer">
    <div
      class="fixed w-100 h-60 bottom-10 left-[50%] translate-x-[-50%] bg-white p-10 z-[10]"
    >
      Yaw: {{ Math.round((currentPosition.yaw / Math.PI) * 180) }}° <br />
      Pitch: {{ Math.round((currentPosition.pitch / Math.PI) * 180) }}° <br />
      FOV (垂直): {{ currentFov }}°
    </div>
  </div>
</template>

<script setup lang="ts">
import { Viewer } from "@photo-sphere-viewer/core"
import TestPhoto from "../assets/大疆天空之城全景图.jpg"
import "@photo-sphere-viewer/core/index.css"
import { onMounted, ref } from "vue"
import { getPanoramaMetadata } from "../utils/index"

const currentPosition = ref<any>({ yaw: 0, pitch: 0 })
const currentFov = ref<number>(0)

onMounted(async () => {
  const metadata = await getPanoramaMetadata(TestPhoto)
  console.log("metadata", metadata)

  const viewer = new Viewer({
    container: "panoramic-viewer",
    panorama: TestPhoto,
    // 默认视角设为 0（因为我们下面将球体旋转了，现在 0 即代表真实的地理正北）
    defaultYaw: 0,
    sphereCorrection: {
      // 核心原理：通过 pan 旋转整个全景球体。将照片的中心位置（原来的 yaw=0）旋转到其真实的方位角（heading）位置上。
      // 这样一来，整个全景引擎里的 yaw 坐标系就和地球的指南针完美的重合了：0=北，90=东，180=南，270=西。
      pan: (metadata.orientation.heading * Math.PI) / 180,
      tilt: 0,
      roll: 0
    }
  })

  // 获取初始姿态和视场角 (vFov 是垂直视场角, hFov 则是水平视场角)
  currentPosition.value = viewer.getPosition()
  currentFov.value = Math.round(viewer.state.vFov)

  // 监听相机转动
  viewer.addEventListener("position-updated", (e) => {
    currentPosition.value = e.position
  })

  // 监听滚轮/手势缩放变化
  viewer.addEventListener("zoom-updated", () => {
    // 你也可以通过 viewer.getZoomLevel() 获取 0-100 的百分比
    currentFov.value = Math.round(viewer.state.vFov)
  })
})
</script>

<style scoped>
#panoramic-viewer {
  width: 100vw;
  height: 100vh;
}
</style>

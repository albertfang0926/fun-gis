<template>
  <div ref="containerRef" class="panoramic-photo"></div>
</template>

<script setup lang="ts">
import "@photo-sphere-viewer/core/index.css"

import {
  type Position,
  type SphereCorrection,
  Viewer,
  type ViewerConfig
} from "@photo-sphere-viewer/core"
import { onBeforeUnmount, onMounted, ref } from "vue"

import { getPanoramaMetadata, type IPanoramaMetadata } from "../utils/exif"

interface IProps {
  /** 全景图 URL 或 File 对象 */
  panorama: string | File
  /** 读取 EXIF/XMP 方位角并自动校正球体朝向，默认开启 */
  autoHeading?: boolean
  /** 透传给 photo-sphere-viewer Viewer 的额外配置 */
  options?: Omit<ViewerConfig, "container" | "panorama">
}

const props = withDefaults(defineProps<IProps>(), {
  autoHeading: true,
  options: () => ({})
})

const emit = defineEmits<{
  ready: [viewer: Viewer]
  "position-updated": [position: Position]
  "zoom-updated": [vFov: number]
}>()

const containerRef = ref<HTMLDivElement>()

let viewer: Viewer | null = null
let objectUrl: string | null = null

onMounted(async () => {
  const panoramaUrl = toPanoramaUrl(props.panorama)
  const headingOptions = props.autoHeading
    ? await buildHeadingOptions(props.panorama)
    : {}

  viewer = new Viewer({
    container: containerRef.value!,
    panorama: panoramaUrl,
    ...headingOptions,
    ...props.options
  })

  viewer.addEventListener("position-updated", (e) => {
    emit("position-updated", e.position)
  })
  viewer.addEventListener("zoom-updated", () => {
    emit("zoom-updated", Math.round(viewer!.state.vFov))
  })

  emit("ready", viewer)
})

onBeforeUnmount(() => {
  viewer?.destroy()
  viewer = null
  if (objectUrl) {
    URL.revokeObjectURL(objectUrl)
    objectUrl = null
  }
})

function toPanoramaUrl(panorama: string | File): string {
  if (typeof panorama === "string") {
    return panorama
  }
  objectUrl = URL.createObjectURL(panorama)
  return objectUrl
}

/**
 * 通过 sphereCorrection.pan 把照片中心（原始 yaw=0）旋转到真实方位角上，
 * 使全景引擎的 yaw 坐标系与指南针重合：0=北，90=东，180=南，270=西。
 */
async function buildHeadingOptions(
  imageInput: string | File
): Promise<{ defaultYaw: number; sphereCorrection: SphereCorrection }> {
  const metadata: IPanoramaMetadata = await getPanoramaMetadata(imageInput)
  return {
    defaultYaw: 0,
    sphereCorrection: {
      pan: (metadata.orientation.heading * Math.PI) / 180,
      tilt: 0,
      roll: 0
    }
  }
}
</script>

<style scoped>
.panoramic-photo {
  width: 100%;
  height: 100%;
}
</style>

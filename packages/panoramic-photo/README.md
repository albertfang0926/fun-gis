# @fun-gis/panoramic-photo

基于 [photo-sphere-viewer](https://photo-sphere-viewer.js.org/) 的全景图查看
组件，自动读取全景图的 EXIF / XMP 方位角（支持 Google GPano 标准与大疆无人机
XMP 标签）并校正球体朝向，使全景视角与地理方向重合：0=北，90=东，180=南，
270=西。

## 安装

```bash
npm i @fun-gis/panoramic-photo
```

peer 依赖需要宿主自行安装：

```bash
npm i vue@^3.4
```

## 快速上手

```vue
<script setup lang="ts">
import { ref } from "vue"

import {
  PanoramicPhoto,
  getPanoramaMetadata,
  type Position
} from "@fun-gis/panoramic-photo"
import "@fun-gis/panoramic-photo/style"
import panoramaUrl from "./assets/panorama.jpg"

const position = ref<Position>({ yaw: 0, pitch: 0 })
const vFov = ref(0)
const heading = ref(0)

// 读取 GPS 位置与朝向角（可选，组件内部会自动做朝向校正）
getPanoramaMetadata(panoramaUrl).then((metadata) => {
  heading.value = metadata.orientation.heading
})
</script>

<template>
  <PanoramicPhoto
    class="viewer"
    :panorama="panoramaUrl"
    @position-updated="(pos) => (position = pos)"
    @zoom-updated="(fov) => (vFov = fov)"
  />
</template>

<style scoped>
.viewer {
  width: 100vw;
  height: 100vh;
}
</style>
```

## API

**Props**

| Prop           | 类型               | 默认值  | 说明                                             |
| -------------- | ------------------ | ------- | ------------------------------------------------ |
| `panorama`     | `string \| File`   | 必填    | 全景图地址或文件对象                             |
| `autoHeading`  | `boolean`          | `true`  | 读取 EXIF/XMP 方位角并自动校正球体朝向           |
| `options`      | `ViewerConfig`     | `{}`    | 透传给 photo-sphere-viewer `Viewer` 的额外配置   |

**事件**

| 事件               | 负载                  | 说明                     |
| ------------------ | --------------------- | ------------------------ |
| `ready`            | `Viewer`              | 查看器实例创建完成       |
| `position-updated` | `Position`            | 相机转动（弧度）         |
| `zoom-updated`     | `number`              | 垂直视场角 vFov（度）    |

**工具函数**

`getPanoramaMetadata(image: string | File)` 返回
`{ location: { latitude, longitude, altitude }, orientation: { heading, pitch, roll } }`，
位置取自 EXIF GPS 标签，朝向优先取 GPano `PoseHeadingDegrees`，其次取大疆
`GimbalYawDegree`。

## 开发

```bash
pnpm -F @fun-gis/panoramic-photo dev    # playground（端口 9152）
pnpm -F @fun-gis/panoramic-photo build  # ES 库构建 + 类型声明
```

<template>
  <div>
    <div class="container">
      <button
        v-for="shape in shapes"
        :key="shape"
        class="button"
        :class="{ active: shape === activeShape }"
        @click="draw(shape)"
      >
        {{ shape }}
      </button>
    </div>
    <div class="toolbar">
      <button class="button" @click="deactivate">结束绘制</button>
      <button class="button" @click="clear">清空（primitive）</button>
    </div>

    <!-- edit panel：仅 primitive 系的 Point/Label 支持属性编辑 -->
    <div v-if="editPanelVisible" class="edit-panel">
      <div
        v-for="(initItems, index) of editFields[currentName]"
        :key="initItems.property"
      >
        <div class="edit-panel-item">
          <span>{{ initItems.label }}</span>
          <input
            v-model="editValues[currentName][index].value"
            style="width: 100px"
          />
          <button @click="() => editCallbacks[currentName][index].callback()">
            更新
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Viewer } from "cesium"
import type { ShallowRef } from "vue"
import { computed, inject, ref, shallowRef, watch } from "vue"

import { drawTool } from "../../../src/drawTool"

const viewer: ShallowRef<Viewer> = inject("cesium-viewer")
const shapes = drawTool.listShapes()
const activeShape = ref<string>()
const editPanelVisible = ref(false)
const current = shallowRef<any>()
const currentName = computed(() => current.value?.name ?? "")

function draw(shape: string) {
  editPanelVisible.value = false
  activeShape.value = shape
  drawTool.activate(shape)
}

function deactivate() {
  drawTool.deactivate()
  activeShape.value = undefined
}

function clear() {
  drawTool.clear()
  editPanelVisible.value = false
}

// primitive 系绘制完成（右键/双击结束后）回调携带实例
drawTool.on("drawEnd", ({ shape, instance }) => {
  activeShape.value = undefined
  if (!instance) return
  current.value = instance
  if (shape === "Point" || shape === "Label") {
    editPanelVisible.value = true
  }
})

// —— Point / Label 属性编辑 ——
const editFields = ref({
  point: [
    { property: "scale", label: "比例" },
    { property: "color", label: "颜色" }
  ],
  label: [
    { property: "text", label: "文本" },
    { property: "scale", label: "比例" },
    { property: "textColor", label: "字体颜色" },
    { property: "bgColor", label: "背景颜色" }
  ]
})

const editValues = ref({
  point: [{ value: "" }, { value: "" }],
  label: [{ value: "" }, { value: "" }, { value: "" }, { value: "" }]
})

watch(editPanelVisible, () => {
  if (!current.value) return
  editValues.value = {
    point: [{ value: current.value.scale }, { value: current.value.color }],
    label: [
      { value: current.value?.text },
      { value: current.value?.scale },
      { value: current.value?.textColor },
      { value: current.value?.bgColor }
    ]
  }
})

const editCallbacks = {
  point: [
    {
      property: "scale",
      callback: () => current.value.updateScale(editValues.value.point[0].value)
    },
    {
      property: "color",
      callback: () => current.value.updateColor(editValues.value.point[1].value)
    }
  ],
  label: [
    {
      property: "text",
      callback: () => current.value.updateText(editValues.value.label[0].value)
    },
    {
      property: "scale",
      callback: () => current.value.updateScale(editValues.value.label[1].value)
    },
    {
      property: "textColor",
      callback: () =>
        current.value.updateColor(
          editValues.value.label[2].value,
          editValues.value.label[3].value
        )
    },
    {
      property: "bgColor",
      callback: () =>
        current.value.updateColor(
          editValues.value.label[2].value,
          editValues.value.label[3].value
        )
    }
  ]
}
</script>

<style scoped lang="less">
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4px;
  position: absolute;
  width: 220px;
  max-height: 60vh;
  overflow-y: auto;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  margin: 24px auto auto 24px;
  padding: 12px;

  .button.active {
    background-color: #1677ff;
    color: #fff;
  }
}
.toolbar {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  gap: 4px;
  position: absolute;
  width: 220px;
  margin: 24px auto auto 24px;
  top: calc(60vh + 40px);
  padding: 0 12px;
}
.edit-panel {
  display: grid;
  top: calc(60vh + 110px);
  row-gap: 4px;
  position: absolute;
  width: 220px;
  background-color: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(8px);
  margin: 24px auto auto 24px;
  padding: 12px;
  &-item {
    display: flex;
    column-gap: 8px;
  }
}
</style>

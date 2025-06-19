<template>
  <div draggable="true" class="base-container">基础面板</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import { useDraggable } from "vue-draggable-plus"

onMounted(() => {
  const container = document.querySelector(".base-container")

  const dragable = useDraggable(container, {
    onstart() {}
  })
  if (!container) {
    throw new Error("未找到dom!")
  }
  if (container instanceof HTMLElement) {
    container.ondragstart = (e) => {
      e.dataTransfer.setData("text/plain", e.target.id)
      console.log("drag start", e.target)
      e.dataTransfer!.dropEffect = "copy"
    }
    container.ondragover = (e) => {
      console.log(e)
      container.classList.add(".moving")
    }
  }
})
</script>

<style scoped lang="less">
.base-container {
  width: 300px;
  height: 300px;
  //   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rebeccapurple;
  cursor: move;
}
.moving {
  background: red;
}
</style>

<template>
  <div class="container" :style="containerStyle">
    <div
      class="option"
      v-for="option of props.content"
      :key="option.name"
      @click="() => option.callback(props.graphic)"
    >
      {{ option.label }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { I_ContextMenu } from "../../types/contextMenu"
import type { BaseEntity } from "../../middleware/baseEntity"

const props = defineProps<{ graphic: BaseEntity; content: I_ContextMenu<BaseEntity>[] }>()
// const options = ref([

// ])

const itemHeight = 32
const containerStyle = {
  height: `${props.content.length * itemHeight}px`,
  "grid-template-rows": `repeat(${props.content.length}, 1fr)`
}
</script>

<style scoped lang="less">
.container {
  // pointer-events: all !important;
  display: grid;
  width: 100px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 4px;
  color: #fff;
  // justify-content: center;
  padding: 0px 8px;
  cursor: default;

  .option {
    display: grid;
    row-gap: 2px;
    padding-left: 2px;
    margin: 2px 0px 2px;
    justify-content: start;
    align-content: center;
    width: 100%;
    border-bottom: solid rgba(255, 255, 255, 0.3) 1px;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      // margin: 2px 0px;
      border-radius: 2px;
    }

    &:last-child {
      border-bottom: none;
    }
  }
}
</style>

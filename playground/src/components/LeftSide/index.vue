<template>
  <div class="left-side">
    <effectsView></effectsView>
    <ChildComponent
      v-model:cCount.change="pCount"
      v-model:changed="isChangeP"
      @update:changed="onUpdate"
    ></ChildComponent>
  </div>
</template>

<script setup lang="ts">
// third-parties
import { reactive, ref, watch } from "vue"
// components
import effectsView from "@/components/CesiumViewer/components/effectsView.vue"
import ChildComponent from "../CesiumViewer/components/child-component.vue"

const pCount = ref({ count: 0 })
const isChangeP = ref(false)

// watch(pCount, () => {
//   console.log("watching", pCount.value.count)
// })

setTimeout(() => {
  console.log("@parent", pCount.value.count)
}, 3e3)

function onUpdate(e: boolean) {
  console.log("onUpdate", pCount.value)
  // isChangeP.value = false
}
</script>

<style scoped lang="less">
.left-side {
  position: absolute;
  top: 20px;
  left: 10px;
  width: 400px;
  height: calc(100% - 40px);
  background-color: rgba(0, 0, 0, 0.5);
}
</style>

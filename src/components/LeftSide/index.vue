<template>
  <div class="left-side">
    <effectsView></effectsView>
  </div>
</template>

<script setup lang="ts">
import effectsView from "@/components/CesiumViewer/components/effectsView.vue"
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

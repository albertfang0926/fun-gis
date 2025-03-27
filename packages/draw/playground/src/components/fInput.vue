<template>
  <div>
    <input v-model="model" style="width: 100px" />
  </div>
</template>

<script setup lang="ts">
const model = defineModel<number | string>()
</script>

<style scoped></style>

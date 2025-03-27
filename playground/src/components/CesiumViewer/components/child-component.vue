<template>
  <div></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"

const isChangeC = defineModel<boolean>("changed")
const [count, modifier] = defineModel<Record<string, number>>("cCount", {
  default: { count: 0 },
  set(_) {
    console.log("@ssss")

    isChangeC.value = !isChangeC.value
  }
})

onMounted(() => {
  setTimeout(() => {
    count.value.count++
    // isChangeC.value = true
  }, 2e3)
})
</script>

<style scoped></style>

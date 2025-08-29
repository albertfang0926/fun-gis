<!-- filepath: src/components/TagInput.vue -->
<template>
  <div class="tag-input">
    <span class="tag" v-for="(tag, index) in tags" :key="tag">
      {{ tag }}
      <span class="remove" @click="removeTag(index)">×</span>
    </span>
    <input
      v-model="input"
      @keydown.enter.prevent="addTag"
      @keydown.backspace="removeLastTag"
      placeholder="输入标签并回车"
      class="input"
    />
  </div>
</template>

<script setup>
import { ref } from "vue"

const tags = ref(["tag1", "tag2", "tag3"])
const input = ref("")

function addTag() {
  const value = input.value.trim()
  if (value && !tags.value.includes(value)) {
    tags.value.push(value)
  }
  input.value = ""
}

function removeTag(index) {
  tags.value.splice(index, 1)
}

function removeLastTag(e) {
  if (!input.value && tags.value.length) {
    tags.value.pop()
  }
}
</script>

<style scoped>
.tag-input {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 4px;
  min-height: 38px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.tag {
  background: #e0e0e0;
  border-radius: 2px;
  padding: 2px 8px;
  margin: 2px 4px 2px 0;
  display: flex;
  align-items: center;
}
.remove {
  margin-left: 4px;
  cursor: pointer;
  color: #888;
}
.input {
  border: none;
  outline: none;
  min-width: 80px;
  flex: 1;
  padding: 4px;
}
</style>

<template>
  <div class="volume-bar-container">
    <div class="volume-bar-column">
      <div
        v-for="(segment, index) in segments"
        :key="index"
        class="volume-segment"
        :class="{ active: index <= activeIndex }"
        :style="{
          animationDelay: `${index * 0.05}s`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'

const props = withDefaults(
  defineProps<{
    volume?: number // 0-100
    segmentCount?: number
  }>(),
  {
    volume: 80,
    segmentCount: 30
  }
)

const segments = ref<number[]>([])
const activeIndex = ref(0)

// 初始化分段
const initSegments = () => {
  segments.value = Array.from({ length: props.segmentCount }, (_, i) => i)
}

// 更新激活的分段索引
const updateActiveIndex = () => {
  activeIndex.value = Math.floor((props.volume / 100) * (props.segmentCount - 1))
}

// 监听音量变化
watch(
  () => props.volume,
  () => {
    updateActiveIndex()
  },
  { immediate: true }
)

onMounted(() => {
  initSegments()
  updateActiveIndex()
})
</script>

<style scoped lang="scss">
.volume-bar-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  //   padding: 20px;
}

.volume-bar-column {
  display: flex;
  flex-direction: column;
  gap: 3px;
  align-items: center;
  position: relative;
}

.volume-segment {
  width: 8px;
  height: 6px;
  background: linear-gradient(
    90deg,
    rgba(0, 50, 100, 0.6) 0%,
    rgba(0, 100, 200, 0.4) 50%,
    rgba(0, 50, 100, 0.6) 100%
  );
  border-radius: 2px;
  opacity: 0.3;
  transition: all 0.3s ease;
  position: relative;

  // 渐变效果：顶部和底部较暗，中间较亮
  &:nth-child(1),
  &:nth-child(2),
  &:nth-child(3) {
    background: linear-gradient(
      90deg,
      rgba(0, 50, 100, 0.8) 0%,
      rgba(0, 80, 160, 0.6) 50%,
      rgba(0, 50, 100, 0.8) 100%
    );
  }

  &:nth-last-child(1),
  &:nth-last-child(2),
  &:nth-last-child(3) {
    background: linear-gradient(
      90deg,
      rgba(0, 50, 100, 0.8) 0%,
      rgba(0, 80, 160, 0.6) 50%,
      rgba(0, 50, 100, 0.8) 100%
    );
  }

  // 激活状态：发光效果和更亮的颜色
  &.active {
    opacity: 1;
    background: linear-gradient(
      90deg,
      rgba(0, 100, 200, 0.9) 0%,
      rgba(0, 150, 255, 1) 50%,
      rgba(0, 100, 200, 0.9) 100%
    );
    box-shadow:
      0 0 8px rgba(0, 150, 255, 0.8),
      0 0 16px rgba(0, 150, 255, 0.4);
    animation: segment-glow 2s ease-in-out infinite;
  }

  // 中间部分更亮
  &:nth-child(n + 10):nth-child(-n + 20).active {
    background: linear-gradient(
      90deg,
      rgba(0, 120, 220, 0.95) 0%,
      rgba(0, 180, 255, 1) 50%,
      rgba(0, 120, 220, 0.95) 100%
    );
    box-shadow:
      0 0 10px rgba(0, 180, 255, 1),
      0 0 20px rgba(0, 180, 255, 0.6);
  }
}

@keyframes segment-glow {
  0%,
  100% {
    opacity: 0.8;
    transform: scaleX(1);
  }
  50% {
    opacity: 1;
    transform: scaleX(1.2);
  }
}

// // 流动动画效果
// .volume-segment.active {
//   &::before {
//     content: '';
//     position: absolute;
//     top: 0;
//     left: -100%;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
//     animation: flow 2s linear infinite;
//   }
// }

// @keyframes flow {
//   0% {
//     left: -100%;
//   }
//   100% {
//     left: 100%;
//   }
// }
</style>

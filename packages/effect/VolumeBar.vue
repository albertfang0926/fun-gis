<template>
  <div class="volume-bar-container">
    <div class="volume-bar-column">
      <div
        v-for="index in segmentCount"
        :key="index"
        class="volume-segment"
        :class="{ active: index <= activeCount }"
        :style="{
          animationDelay: `${(index - 1) * 0.05}s`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue"

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

const activeCount = computed(() =>
  Math.round((props.volume / 100) * props.segmentCount)
)
</script>

<style scoped>
.volume-bar-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
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

  /* 顶部和底部较暗，中间较亮 */
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

  /* 激活状态 */
  &.active {
    opacity: 1;
    background: linear-gradient(
      90deg,
      rgba(0, 100, 200, 0.9) 0%,
      rgba(0, 150, 255, 1) 50%,
      rgba(0, 100, 200, 0.9) 100%
    );
    box-shadow: 0 0 8px rgba(0, 150, 255, 0.8), 0 0 16px rgba(0, 150, 255, 0.4);
    animation: segment-glow 2s ease-in-out infinite;
  }

  /* 中间部分更亮 */
  &:nth-child(n + 10):nth-child(-n + 20).active {
    background: linear-gradient(
      90deg,
      rgba(0, 120, 220, 0.95) 0%,
      rgba(0, 180, 255, 1) 50%,
      rgba(0, 120, 220, 0.95) 100%
    );
    box-shadow: 0 0 10px rgba(0, 180, 255, 1), 0 0 20px rgba(0, 180, 255, 0.6);
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

@media (prefers-reduced-motion: reduce) {
  .volume-segment.active {
    animation: none;
  }
}
</style>

<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loading-indicator">
      <div class="loading-bar"></div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

const isLoading = ref(false);

defineExpose({
  start: () => (isLoading.value = true),
  stop: () => (isLoading.value = false),
  isLoading: isLoading,
});
</script>

<style scoped>
.loading-indicator {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  overflow: hidden;
  z-index: 9999;
}

.loading-bar {
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #0800ff, #00eeff);
  animation: loading 1.5s infinite ease-in-out;
  transform-origin: 0% 50%;
}

@keyframes loading {
  0% {
    transform: scaleX(0);
  }
  50% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
    transform-origin: 100% 50%;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

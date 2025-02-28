<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loading-indicator">
      <!-- Add your loading animation here -->
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isLoading = ref(false);

// Export methods to control loading state
defineExpose({
  start: () => isLoading.value = true,
  stop: () => isLoading.value = false
});
</script>

<style scoped>
.loading-indicator {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(to right, #0800ff, #00eeff);
  z-index: 9999;
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
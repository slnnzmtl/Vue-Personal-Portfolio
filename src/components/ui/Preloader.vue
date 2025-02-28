<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Preloader'
});
</script>

<template>
  <div class="preloader">
    <div class="loader">
      <div class="circle"></div>
      <div class="circle"></div>
      <div class="circle"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.preloader {
  position: fixed;
  inset: 0;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loader {
  display: flex;
  gap: 1rem;
}

.circle {
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: var(--cyan);
  animation: bounce 0.5s ease-in-out infinite;

  &:nth-child(2) {
    animation-delay: 0.1s;
  }

  &:nth-child(3) {
    animation-delay: 0.2s;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-1rem);
  }
}
</style> 
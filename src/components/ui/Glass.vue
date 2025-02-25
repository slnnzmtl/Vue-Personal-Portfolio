<template>
  <div class="glass-wrapper">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.glass-wrapper {
  background: rgba(206, 206, 206, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}
</style> 
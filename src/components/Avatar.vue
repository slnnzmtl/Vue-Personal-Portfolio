<script lang="ts" setup>
import MaleAvatar from '../assets/male-avatar.svg'
</script>

<template>
  <div class="avatar-background">
    <div class="glassmorphic-effect"></div>
    <div class="male-avatar">
      <img :src="MaleAvatar" />
    </div>
  </div>
</template>

<style lang="scss">
.avatar-background {
  position: relative;
  background: rgba(255, 255, 255, 0);
  background-size: 200% 200%;
  animation: gradient-rotate 6s ease-in-out infinite;
  border-radius: 50%;
  width: 300px;
  height: 300px;
  overflow: hidden;
}

.glassmorphic-effect {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 50%;
  backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 0;
}

.male-avatar {
  min-width: 300px;
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  opacity: 0.9;
  z-index: 1;

}

@keyframes gradient-rotate {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
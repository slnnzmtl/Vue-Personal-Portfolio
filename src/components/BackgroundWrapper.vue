<template>
  <div class="light-effects">
    <div v-for="i in 2" :key="i" class="light-group">
      <div class="light light-2"></div>
      <div class="light light-3"></div>
      <div class="light light-4"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BackgroundWrapper",
});
</script>

<style scoped lang="scss">
@property --rotate {
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}

@property --scale {
  syntax: "<number>";
  initial-value: 1;
  inherits: false;
}

@property --opacity {
  syntax: "<number>";
  initial-value: 0.3;
  inherits: false;
}

.background-wrapper {
  position: relative;
  width: 100%;
}

.light-effects {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
  transform-style: preserve-3d;
}

.light-group {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotate 30s linear infinite;
  transform: translateZ(0);
  will-change: transform;
}

.light-group:nth-child(2) {
  animation-direction: reverse;
  animation-duration: 25s;
}

.light-group:nth-child(3) {
  animation-duration: 35s;
}

.light {
  position: absolute;
  border-radius: 50%;
  filter: blur(10vh);
  contain: layout paint style size;
  opacity: var(--opacity);
  mix-blend-mode: screen;
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;
  width: 10vw;
  height: 10vw;
  transition: transform 0.3s ease-out;
}

.light-2 {
  background: #0800ff;
  width: 60vh;
  height: 60vh;
  top: 50%;
  right: -20vw;
  animation: transform-float2 25s ease-in-out infinite,
    opacity-pulse 9s ease-in-out infinite, scale 12s ease-in-out infinite;
  transform-origin: center;
}

.light-3 {
  background: #00eeff;
  width: 40vh;
  height: 40vh;
  bottom: -10vw;
  left: 30%;
  animation: transform-float3 22s ease-in-out infinite,
    opacity-pulse 8s ease-in-out infinite, scale 18s ease-in-out infinite;
}

.light-4 {
  background: #ff00ea;
  width: 45vh;
  height: 45vh;
  top: 30%;
  left: 20%;
  animation: transform-float4 23s ease-in-out infinite,
    opacity-pulse 10s ease-in-out infinite, scale 20s ease-in-out infinite;
}

.content {
  position: relative;
  z-index: 1;
  transform: translateZ(0);
}

@keyframes opacity-pulse {
  0%,
  100% {
    --opacity: 0.3;
  }
  50% {
    --opacity: 0.1;
  }
}

@keyframes scale {
  0%,
  100% {
    --scale: 1;
  }
  50% {
    --scale: 1.2;
  }
}

@keyframes rotate {
  from {
    --rotate: 0deg;
  }
  to {
    --rotate: 360deg;
  }
}

@keyframes transform-float2 {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(var(--scale));
  }
  50% {
    transform: translate3d(-100px, -50px, 50px) scale(var(--scale));
  }
}

@keyframes transform-float3 {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(var(--scale));
  }
  50% {
    transform: translate3d(50px, -100px, 30px) scale(var(--scale));
  }
}

@keyframes transform-float4 {
  0%,
  100% {
    transform: translate3d(0, 0, 0) scale(var(--scale));
  }
  50% {
    transform: translate3d(-75px, 75px, 20px) scale(var(--scale));
  }
}

/* Media Queries for Mobile Adjustments */
@media (max-width: 640px) {
  .light {
    width: 15vw;
    height: 15vw;
    filter: blur(8vh);
  }

  .light-2 {
    width: 50vh;
    height: 50vh;
  }

  .light-3 {
    width: 30vh;
    height: 30vh;
  }

  .light-4 {
    width: 35vh;
    height: 35vh;
  }
}
</style>

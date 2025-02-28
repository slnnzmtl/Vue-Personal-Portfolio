<template>
  <div class="background-wrapper">
    <div class="light-effects">
      <div v-for="i in 2" :key="i" class="light-group">
        <div class="light light-2"></div>
        <div class="light light-3"></div>
        <div class="light light-4"></div>
      </div>
    </div>
    <div class="content">
      <slot></slot>
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
  background: #0a0a0a;
}

.light-group {
  position: absolute;
  width: 100%;
  height: 100%;
  animation: rotate 30s linear infinite;
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
  contain: layout paint style;
  opacity: 0.3;
  mix-blend-mode: screen;
  will-change: transform, opacity;
  transform: translateZ(0);
  backface-visibility: hidden;

  /* Use responsive sizes */
  width: 10vw;
  height: 10vw;
}

.light-2 {
  background: #0800ff;
  width: 60vh;
  height: 60vh;
  top: 50%;
  right: -20vw;
  animation:
    float2 25s ease-in-out infinite,
    pulse 9s ease-in-out infinite,
    scale 12s ease-in-out infinite;
  transform-origin: center;
}

.light-3 {
  background: #00eeff;
  width: 40vh;
  height: 40vh;
  bottom: -10vw;
  left: 30%;
  animation:
    float3 22s ease-in-out infinite,
    pulse 8s ease-in-out infinite,
    scale 18s ease-in-out infinite;
}

.light-4 {
  background: #ff00ea;
  width: 45vh;
  height: 45vh;
  top: 30%;
  left: 20%;
  animation:
    float4 23s ease-in-out infinite,
    pulse 10s ease-in-out infinite,
    scale 20s ease-in-out infinite;
}

.content {
  position: relative;
  z-index: 1;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.3;
    transform: translateZ(0);
  }
  50% {
    opacity: 0.1;
    transform: translateZ(0);
  }
}

@keyframes scale {
  0%,
  100% {
    transform: scale(1) translateZ(0);
  }
  50% {
    transform: scale(1.2) translateZ(0);
  }
}

@keyframes rotate {
  from {
    transform: rotate(0deg) translateZ(0);
  }
  to {
    transform: rotate(360deg) translateZ(0);
  }
}

@keyframes float1 {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(100px, 100px, 0);
  }
}

@keyframes float2 {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(-100px, -50px, 0);
  }
}

@keyframes float3 {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(50px, -100px, 0);
  }
}

@keyframes float4 {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(-75px, 75px, 0);
  }
}

/* Media Queries for Mobile Adjustments */
@media (max-width: 640px) {
  .light {
    width: 15vw;
    height: 15vw;
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

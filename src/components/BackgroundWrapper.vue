<template>
  <div 
    class="background-wrapper"
    @mousemove="handleMouseMove"
    ref="wrapper"
  >
    <div class="light-effects">
      <div class="light-group" v-for="i in 2" :key="i">
        <div 
          class="light light-2" 
          :style="{ 
            transform: `translate(
              ${mousePos.x * -0.03}px,
              ${mousePos.y * -0.03}px
            )`
          }"
        ></div>
        <div 
          class="light light-3" 
          :style="{ 
            transform: `translate(
              ${mousePos.x * 0.015}px,
              ${mousePos.y * 0.015}px
            )`
          }"
        ></div>
        <div 
          class="light light-4" 
          :style="{ 
            transform: `translate(
              ${mousePos.x * -0.025}px,
              ${mousePos.y * -0.025}px
            )`
          }"
        ></div>
      </div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const wrapper = ref<HTMLElement | null>(null);
const mousePos = ref({ x: 0, y: 0 });
const targetPos = ref({ x: 0, y: 0 });
let animationFrame: number | null = null;

const handleMouseMove = (e: MouseEvent) => {
  if (!wrapper.value) return;
  
  const rect = wrapper.value.getBoundingClientRect();
  targetPos.value = {
    x: e.clientX - (rect.left + rect.width / 2),
    y: e.clientY - (rect.top + rect.height / 2)
  };
};

const updatePosition = () => {
  // Smooth lerp animation
  mousePos.value = {
    x: mousePos.value.x + (targetPos.value.x - mousePos.value.x) * 0.1,
    y: mousePos.value.y + (targetPos.value.y - mousePos.value.y) * 0.1
  };
  
  animationFrame = requestAnimationFrame(updatePosition);
};

onMounted(() => {
  animationFrame = requestAnimationFrame(updatePosition);
});

onUnmounted(() => {
  if (animationFrame) cancelAnimationFrame(animationFrame);
});
</script>

<style scoped>
.background-wrapper {
  position: relative;
  min-height: 100vh;
  max-width: 100vw;
  width: 100%;
}

.light-effects {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
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
  contain: layout paint;
  opacity: 0.3;
  mix-blend-mode: screen;
  will-change: transform;
  
  /* Use responsive sizes */
  width: 10vw; /* Base size for mobile */
  height: 10vw; /* Base size for mobile */
}

.light-2 {
  background: #0800FF;
  width: 60vh; /* Adjusted for larger screens */
  height: 60vh; /* Adjusted for larger screens */
  top: 50%;
  right: -20vw; /* Adjusted for proportional positioning */
  animation: float2 25s ease-in-out infinite,
             pulse 9s ease-in-out infinite,
             scale 12s ease-in-out infinite;
}

.light-3 {
  background: #00EEFF;
  width: 40vh; /* Adjusted for larger screens */
  height: 40vh; /* Adjusted for larger screens */
  bottom: -10vw; /* Adjusted for proportional positioning */
  left: 30%;
  animation: float3 22s ease-in-out infinite,
             pulse 8s ease-in-out infinite,
             scale 18s ease-in-out infinite;
}

.light-4 {
  background: #FF00EA;
  width: 45vh; /* Adjusted for larger screens */
  height: 45vh; /* Adjusted for larger screens */
  top: 30%;
  left: 20%;
  animation: float4 23s ease-in-out infinite,
             pulse 10s ease-in-out infinite,
             scale 20s ease-in-out infinite;
}

.content {
  position: relative;
  z-index: 1;
}

@keyframes pulse {
  0%, 100% { opacity: 0.3; }
  50% { opacity: 0.1; }
}

@keyframes scale {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(100px, 100px); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-100px, -50px); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(50px, -100px); }
}

@keyframes float4 {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(-75px, 75px); }
}

/* Media Queries for Mobile Adjustments */
@media (max-width: 640px) {
  .light {
    width: 15vw; /* Increase size for mobile */
    height: 15vw; /* Increase size for mobile */
  }

  .light-2 {
    width: 50vh; /* Adjust size for mobile */
    height: 50vh; /* Adjust size for mobile */
  }

  .light-3 {
    width: 30vh; /* Adjust size for mobile */
    height: 30vh; /* Adjust size for mobile */
  }

  .light-4 {
    width: 35vh; /* Adjust size for mobile */
    height: 35vh; /* Adjust size for mobile */
  }
}
</style> 
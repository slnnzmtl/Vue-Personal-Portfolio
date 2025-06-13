<script lang="ts">
import UserPic from "@/assets/userpic.png";
import { defineComponent, ref } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";

export default defineComponent({
  name: "AuthorAvatar",
  components: {
    GlassMaterial,
  },
  setup() {
    const gradientPos = ref("30% 20%");

    function handleMouseMove(e: MouseEvent) {
      const target = e.currentTarget as HTMLElement;
      const rect = target.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      gradientPos.value = `${x.toFixed(1)}% ${y.toFixed(1)}%`;
    }

    return {
      UserPic,
      gradientPos,
      handleMouseMove,
    };
  },
});
</script>

<template>
  <GlassMaterial class="avatar-background">
    <div
      class="user-avatar"
      @mousemove="handleMouseMove"
      :style="{ '--gradient-pos': gradientPos }"
    >
      <img fetchpriority="high" :src="UserPic" alt="User Avatar" />
    </div>
  </GlassMaterial>
</template>

<style lang="scss">
.avatar-background {
  position: relative;
  border-radius: 50% !important;
  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  height: 400px;
  width: 400px;

  @media (max-width: 768px) {
    height: 300px;
    width: 300px;
  }
}

.user-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  opacity: 0.9;
  z-index: 1;
  padding: 15px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    z-index: 0;
    filter: blur(32px);
    background: radial-gradient(
      circle at var(--gradient-pos, 30% 20%),
      #ff00cc,
      #3333ff,
      #00ffcc,
      #ff00cc 80%
    );
    background-size: 200% 200%;
    animation: gradient-move 6s linear infinite;
    opacity: 0.3;
    pointer-events: none;
  }

  img {
    width: 100%;
    object-fit: fill;
    position: relative;
    z-index: 1;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5)) hue-rotate(10deg);
  }
}

@keyframes gradient-move {
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

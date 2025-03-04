<script lang="ts">
import MaleAvatar from "@/assets/male-avatar.svg";
import { defineComponent } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";

export default defineComponent({
  name: "AuthorAvatar",
  components: {
    GlassMaterial,
  },
  setup() {
    return {
      MaleAvatar,
    };
  },
});
</script>

<template>
  <GlassMaterial class="avatar-background">
    <div class="male-avatar">
      <img :src="MaleAvatar" alt="Male Avatar" />
    </div>
  </GlassMaterial>
</template>

<style lang="scss">
.avatar-background {
  position: relative;
  background: rgba(255, 255, 255, 0);
  background-size: 200% 200%;
  animation: gradient-rotate 6s ease-in-out infinite;
  border-radius: 50% !important;
  overflow: hidden;
  display: flex;
  flex-shrink: 0;
  height: 100%;
  width: 100%;
  max-width: 400px; /* Adjust as needed */
  max-height: 400px; /* Adjust as needed */
}

.male-avatar {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  box-sizing: border-box;
  overflow: hidden;
  opacity: 0.9;
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

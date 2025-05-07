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
      <img fetchpriority="high" :src="MaleAvatar" alt="Male Avatar" />
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
</style>

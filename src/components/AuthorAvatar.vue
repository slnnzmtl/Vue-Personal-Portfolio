<script lang="ts">
import UserPic from "@/assets/userpic.png";
import { defineComponent } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";

export default defineComponent({
  name: "AuthorAvatar",
  components: {
    GlassMaterial,
  },
  setup() {
    return {
      UserPic,
    };
  },
});
</script>

<template>
  <GlassMaterial class="avatar-background">
    <div class="user-avatar">
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

  img {
    width: 100%;
    object-fit: fill;
  }
}
</style>

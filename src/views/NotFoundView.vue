import GlassMaterial from '@/components/ui/GlassMaterial.vue';
<template>
  <div class="flex items-center justify-center min-h-[75vh] bg-transparent p-8 pt-48">
    <div class="text-center text-white">
      <h1 class="font-bold m-0 leading-none mb-4">404</h1>

      <GlassMaterial class="p-8">
        <p class="text-xl md:text-2xl mb-8 opacity-80 font-light">Page not found</p>
        <router-link to="/" class=""> Go back home </router-link>
      </GlassMaterial>
    </div>
  </div>
</template>

<style lang="scss" scoped>
h1 {
  font-size: 300px;
  color: rgba(0, 242, 255, 0.2);
  font-family: "Fira code";

  @media (max-width: 640px) {
    font-size: 128px; // Adjust for smaller screens
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
export default defineComponent({
  name: "NotFoundView",
  components: {
    GlassMaterial,
  },
});
</script>

<template>
  <div class="info-screen flex flex-col items-start gap-8 px-8 py-16">
    <div class="text-left">
      <div class="">
        <h2 class="mb-8">Web Developer & UI/UX Enthusiast</h2>
        <p class="text-lg sm:text-xl mb-8">
          Full-Stack Developer with over 5 years of experience specializing in
          TypeScript, Node.js, and React/Vue. I bring a strong background in
          building complex, high-performance solutions across e-commerce, online
          learning, marketing, and sales domains.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";

export default defineComponent({
  name: "InfoScreen",
  components: {
    SocialLinks,
  },
});
</script>

<style lang="scss" scoped>
.info-screen {
  width: 100%;
}
</style>

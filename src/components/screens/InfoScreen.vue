<template>
  <div class="info-screen flex flex-col items-start gap-8 px-8 py-16 ">
    <div class="text-left">
      <!-- <p class="text-lg sm:text-xl mb-4 text-justify">
          Full-Stack Developer with over 5 years of experience specializing in
          TypeScript, Node.js, and React/Vue.
        </p> -->

      <p class="text-lg sm:text-xl text-justify">
        I bring a strong background in building complex, high-performance
        solutions across e-commerce, online learning, marketing, and sales
        domains.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InfoScreen",
});
</script>

<style lang="scss" scoped>
.info-screen {
  width: 100%;
}
</style>

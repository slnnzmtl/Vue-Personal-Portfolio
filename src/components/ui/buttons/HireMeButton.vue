<script lang="ts">
import SButton from "@/components/ui/buttons/SButton.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HireMeButton",
  components: {
    SButton,
  },
});
</script>

<template>
  <SButton class="hire-me-button rounded-3xl" size="medium" variant="primary">
    <span class="hidden sm:block">Book FREE strategy session</span>
    <span class="block sm:hidden">Book strategy session</span>
  </SButton>
</template>

<style lang="scss" scoped>
.hire-me-button {
  animation: bubble 2s ease-in-out infinite;

  @keyframes bubble {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>

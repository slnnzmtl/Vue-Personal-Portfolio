<script lang="ts" setup>
  import { Button } from '@/components/ui';
</script>

<template>
  <Button
    class="hire-me-button rounded-3xl"
    size="medium"
    type="primary"
  >
    Hire me
  </Button>
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
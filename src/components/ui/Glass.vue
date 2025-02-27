<script lang="ts" setup>
  import { computed, defineProps } from 'vue'

  const props = defineProps<{
    blur?: string,
  }>()

  const blurStyle = computed(() => {
    return {
      backdropFilter: `blur(${props.blur ?? '10px'})`
    }
  })
</script>

<template>
  <div class="glass-wrapper" :style="blurStyle">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.glass-wrapper {
  background: rgba(206, 206, 206, 0.05);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}
</style> 
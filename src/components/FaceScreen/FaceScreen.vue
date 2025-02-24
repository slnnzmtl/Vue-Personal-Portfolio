<script lang="ts" setup>
import { Avatar } from '../'
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: 'Daniel Kazansky'
  },
  position: {
    type: String,
    default: 'Full-stack Developer & Business Automation'
  }
})
</script>

<template>
  <div class="face-screen flex items-center gap-18">
    <Avatar />
    <div class="flex flex-col gap-4 text-left">
      <h2 class="text-6xl font-bold">{{ props.name }}</h2>
      <p class="face-screen__position text-xl font-semibold">{{ props.position }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.face-screen {
  height: calc(100vh - 200px);

  &__position {
    color: var(--text-secondary);
    max-width: 300px;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
}
</style>
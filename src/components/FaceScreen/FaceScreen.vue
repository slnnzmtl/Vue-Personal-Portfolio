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
  <div class="face-screen flex items-center gap-6 sm:gap-18 p-4 pt-10 sm:pt-auto">
    <Avatar class="max-w-[500px] max-h-[500px]" />
    <div class="flex flex-col gap-4 text-left">
      <h1 class="text-center sm:text-left text-4xl sm:text-7xl font-bold">{{ props.name }}</h1>
      <p class="face-screen__position text-3xl font-semibold">{{ props.position }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.face-screen {
  height: 800px;

  &__position {
    color: var(--text-secondary);
    max-width: 700px;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    &__position {
      max-width: 100%;
      text-align: center;
    }
  }

  @media (min-width: 2048px) {
    .face-screen__position {
      font-size: 2.5rem;
    }

    h1 {
      font-size: 6rem;
    }

    Avatar {
      max-width: 600px;
      max-height: 600px;
    }
  }
}
</style>
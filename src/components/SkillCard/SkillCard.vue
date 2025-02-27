<script setup lang="ts">
import { GlassMaterial } from "@/components/ui";
defineProps<{
  title: string;
}>();
</script>

<template>
  <GlassMaterial class="skill-card">
    <h3 class="skill-card__title">{{ title }}</h3>
    <div class="skill-card__content">
      <slot></slot>
    </div>
  </GlassMaterial>
</template>

<style scoped lang="scss">
.skill-card {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 1.5rem;

  &__title {
    color: var(--cyan);
    margin-bottom: 1rem;
  }

  &__content {
    ul {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color: var(--text);
        margin-bottom: 0.5rem;
        opacity: 0.8;
        transition: opacity 0.3s ease;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>

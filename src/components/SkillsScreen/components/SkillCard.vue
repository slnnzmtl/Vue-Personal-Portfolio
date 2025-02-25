<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<template>
  <div class="skill-card">
    <h2 class="skill-card__title">{{ title }}</h2>
    <div class="skill-card__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.skill-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  transition: transform 0.3s ease;

  display: flex;
  flex-direction: column;
  flex-grow: 1;

  &:hover {
    transform: translateY(-5px);
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
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
        font-size: 1rem;
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
<script lang="ts" setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    name: {
      type: String,
      default: 'Project Name'
    },
    description: {
      type: String,
      default: 'Project Description'
    },
    url: {
      type: String,
      default: 'https://example.com'
    }
  })


</script>

<template>
  <div class="project-card">
    <div class="project-card__image">
      <img src="https://picsum.photos/id/1003/400/300" alt="Project Image" />
    </div>
    <div class="project-card__content">
      <h2 class="project-card__title">{{ props.name }}</h2>
      <p class="project-card__description">{{ props.description }}</p>
      <a :href="props.url" target="_blank" class="project-card__link">Visit Website</a>
    </div>
  </div>
</template>
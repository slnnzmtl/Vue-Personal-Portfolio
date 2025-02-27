<template>
  <div class="article-card">
    <h3>{{ article.title }}</h3>
    <p>{{ article.summary }}</p>
    <router-link :to="`/articles/${article.id}`">Read more</router-link>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { Article } from '@/stores/blogTypes'; // Update import to Article

const props = defineProps<{
  article: Article; // Update to use Article type
}>();
</script>

<style scoped lang="scss">
.article-card {
  // Add your styles here
}
</style> 
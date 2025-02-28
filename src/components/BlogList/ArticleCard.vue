<template>
  <div class="article-card">
    <h3>{{ article.title }}</h3>
    <p>{{ article.summary }}</p>
    <router-link :to="`/articles/${article.id}`">Read more</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ArticleCard",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.article-card {
  // Add your styles here
}
</style>

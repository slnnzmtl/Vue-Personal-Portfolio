<template>
  <div class="article-viewer">
    <transition-group :name="transitionName" tag="div" :class="layoutClass">
      <template v-if="!isLoading">
        <ProjectCard 
          v-for="article in articles" 
          :key="article.id"
          :project="article"
          :selected-filters="selectedFilters"
          :type="type"
          selected="test"
          class="h-full"
          @click="onArticleClick(article)"
        />
      </template>
      
      <template v-else>
        <CardPlaceholder v-for="n in itemsPerPage" :key="n" />
      </template>
    </transition-group>

    <Button v-if="hasMoreArticles" @click="loadMore" class="load-more-button">
      Load More
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from 'vue';
import { ProjectCard, CardPlaceholder } from '@/components/ProjectCard';
import { Button } from '@/components/ui';
import { Article } from '@/stores/blogTypes';
import { useBlogStore } from '@/stores';

const { articles } = useBlogStore();

const layoutClass = computed(() => {
  return props.type === 'grid' ? 'grid grid-cols-1 lg:grid-cols-3 gap-8 ml-6 mr-6' : 'flex flex-col gap-4'; 
});

const props = defineProps<{
  articles: Article[];
  selectedFilters?: string[];
  type: 'list' | 'grid';
}>();

const emit = defineEmits<{
  (e: 'click', article: Article): void;
}>();

const onArticleClick = (article: Article) => {
  emit('click', article);
};

</script>

<style scoped lang="scss">
.article-viewer {
  position: relative;
}
</style> 
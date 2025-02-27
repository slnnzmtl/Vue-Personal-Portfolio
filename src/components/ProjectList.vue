<template>
  <div class="project-viewer">
    <transition-group :name="transitionName" tag="div" :class="layoutClass">
      <template v-if="!isLoading">
        <ProjectCard 
          v-for="project in displayedProjects" 
          :key="project.id"
          :project="project"
          :selected-filters="selectedFilters"
          :type="type"
          selected="test"
          class="h-full"
        />
      </template>
      
      <template v-else>
        <CardPlaceholder v-for="n in itemsPerPage" :key="n" />
      </template>
    </transition-group>

    <Button v-if="hasMoreProjects" @click="loadMore" class="load-more-button">
      Load More
    </Button>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, defineProps } from 'vue';
import { ProjectCard, CardPlaceholder } from '@/components/ProjectCard';
import { Button } from '@/components/ui';
import { Project } from '@/stores/projectTypes';

const props = defineProps<{
  projects: Project[];
  selectedFilters: string[];
  type: 'list' | 'grid';
}>();

// ... (rest of the script remains unchanged)
</script>

<style scoped lang="scss">
.project-viewer {
  position: relative;
}

/* Other styles remain unchanged */
</style> 
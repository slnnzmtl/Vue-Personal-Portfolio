<template>
  <div class="project-viewer">
    <div class="project-viewer__cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <template v-if="!isLoading">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id"
          v-bind="project"
        />
      </template>
      <template v-else>
        <CardPlaceholder v-for="n in 6" :key="n" />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { ProjectCard, CardPlaceholder } from '../ProjectCard';
import { projects } from './projectsData'; // Import the projects data

const isLoading = ref(false);
</script>

<style scoped>
.project-viewer {
  width: 100%;
}

.project-viewer__cards {
  gap: 2rem;
  width: 100%;
}
</style> 
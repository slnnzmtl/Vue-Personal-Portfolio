<script lang="ts" setup>
import { computed, ref } from 'vue';
import { ProjectViewer } from '../ProjectViewer'
import { projects } from './projectsData';
import { FilterPanel } from '@components/FilterPanel';

const selectedFilters = ref<string[]>([]);

const technologies = computed(() => {
  return projects ? projects.reduce((acc, project) => {
    project.technologies.forEach(tech => {
      if (!acc.includes(tech)) {
        acc.push(tech);
      }
    });
    return acc;
  }, [] as string[]) : [];
})

const projectFilterChange = (filters: string[]) => {
  selectedFilters.value = filters;
};
</script>

<template>
  <div class="projects-screen">
    <p class="text-2xl sm:text-4xl font-bold mb-8">
      Projects
    </p>
    <p class="text-lg sm:text-xl mb-8">
      Here, you'll find projects I've built or contributed to. Use the filters below to explore projects based on the tech stack you're interested in.
    </p>
    <FilterPanel 
      :technologies="technologies" 
      :selectedFilters="selectedFilters" 
      @onFilterChange="projectFilterChange"
    />
    <ProjectViewer :projects="projects" :selectedFilters="selectedFilters" class="flex w-full" />
  </div>
</template>

<style lang="scss" scoped>
.projects-screen {
  padding: 4rem 2rem;
  text-align: left;
}
</style>
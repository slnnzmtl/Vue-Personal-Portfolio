<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';
import { projects } from '@/stores/projectTypes';
import { FilterPanel, ProjectList } from '@/components';

const router = useRouter();

const selectedFilters = ref<string[]>([]);

const tags = computed(() => {
  return projects ? projects.reduce((acc, project) => {
    project.tags.forEach(tech => {
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

const onProjectClick = (projectId: number) => {
  router.push(`/projects/${projectId}`);
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
      :tags="tags" 
      :selectedFilters="selectedFilters" 
      @onFilterChange="projectFilterChange"
    />

    <ProjectList
      type="grid"
      :projects="projects"
      :selectedFilters="selectedFilters"
      class="flex w-full"
      return-value="id"
      @project-clicked="onProjectClick"
    />
  </div>
</template>

<style lang="scss" scoped>
.projects-screen {
  padding: 4rem 2rem;
  text-align: left;
}
</style>
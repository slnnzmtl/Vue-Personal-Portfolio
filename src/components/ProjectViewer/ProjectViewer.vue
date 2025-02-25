<template>
  <div class="project-viewer grid gap-6">
    <transition-group name="fade" tag="div" class="grid md:grid-cols-2 lg:grid-cols-3 items-start gap-4">
      <template v-if="!isLoading">
        <ProjectCard 
          v-for="project in displayedProjects" 
          :key="project.id"
          :project="project"
          :selected-filters="selectedFilters"
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
import { ref, computed } from 'vue';
import { ProjectCard, CardPlaceholder } from '../ProjectCard';
import { Button } from '@components/ui';
import { Project } from '../ProjectsScreen/projectsData';

const props = defineProps<{
  projects: Project[]
  selectedFilters: string[]
}>();


const filteredProjects = computed(() => {
  if (props.selectedFilters.length === 0) {
    return props.projects;
  }
  return props.projects.filter(project =>
    project.technologies.some(tech => props.selectedFilters.includes(tech))
  );
});

const isLoading = ref(false);
const itemsPerPage = ref(6); // Default items to load
const currentPage = ref(1);

const displayedProjects = computed(() => {
  const start = 0; // Always start from the beginning
  const result = filteredProjects.value.slice(start, currentPage.value * itemsPerPage.value);
  console.log(result)
  return result
});

const hasMoreProjects = computed(() => {
  return currentPage.value * itemsPerPage.value < filteredProjects.value.length;
});

const loadMore = () => {
  if (hasMoreProjects.value) {
    currentPage.value++;
  }
};
</script>

<style scoped lang="scss">
.project-viewer {
  position: relative;
}

.load-more-button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent background */
  border: 1px solid rgba(255, 255, 255, 0.2); /* Light border */
  border-radius: 8px;
  backdrop-filter: blur(10px); /* Frosted glass effect */
  color: var(--text); /* Use theme variable for text color */
  transition: background-color 0.3s, border-color 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.2); /* Darker on hover */
    border-color: rgba(255, 255, 255, 0.4); /* Darker border on hover */
  }
}

/* Transition styles */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
  transform: translateY(10px);
}
</style>
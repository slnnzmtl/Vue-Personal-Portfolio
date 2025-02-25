<template>
  <transition name="fade" mode="out-in">
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 ml-6 mr-6">
      <div class="text-left">
        <p class="text-2xl sm:text-4xl font-bold mb-8">Projects</p>
        <p class="text-lg sm:text-xl mb-8">
          Here, you'll find projects I've built or contributed to. Use the filters below to
          explore projects based on the tech stack you're interested in.
        </p>

        <FilterPanel
          :technologies="projectsStore.technologies"
          :selectedFilters="selectedFilters"
          @onFilterChange="projectFilterChange"
        />

        <ProjectList
          :projects="filteredProjects"
          :activeProject="activeProject"
          :selectedFilters="selectedFilters"
          @project-clicked="onActiveProjectChange"
          type="list"
        />
      </div>

      <MarkupViewer class="col-span-2 hidden lg:block" :active-project="activeProject" />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, defineComponent, ref, watch } from "vue";
import { useProjectsStore } from "../stores/projectsStore";
import { MarkupViewer, FilterPanel, ProjectList } from "@components";
import { Project } from "@/stores/projectTypes";
import { useRoute } from 'vue-router';

const projectsStore = useProjectsStore();

const selectedFilters = ref<string[]>([]);
const activeProject = ref<Project | null>(null);
const route = useRoute();

const filteredProjects = computed(() => {
  if (selectedFilters.value.length === 0) {
    return projectsStore.projects;
  }
  return projectsStore.projects.filter((project) =>
    project.technologies.some((tech) => selectedFilters.value.includes(tech))
  );
});

watch(() => route.params.projectId, (newProjectId) => {
  console.log(newProjectId);
  if (newProjectId) {
    const project = projectsStore.projects.find(p => p.id === Number(newProjectId));
    activeProject.value = project || null;
  }
}, { immediate: true });

const projectFilterChange = (filters: string[]) => {
  selectedFilters.value = filters;
};

const onActiveProjectChange = (project: Project) => {
  console.log(project);
  activeProject.value = project;
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0;
}
</style>

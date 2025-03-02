<template>
  <div
    class="projects-view max-w-screen-xl lg:max-w-screen-2xl w-full mx-auto flex justify-center mx-6"
  >
    <div
      class="max-w-[95%] lg:max-w-[90%] flex flex-wrap lg:flex-nowrap gap-12"
    >
      <div class="text-left scrollable-container w-full lg:max-w-[40%]">
        <p class="text-2xl sm:text-4xl font-bold mb-8">Projects</p>
        <p class="text-lg xl:text-xl mb-8">
          Here, you'll find projects I've built or contributed to. Use the
          filters below to explore projects based on the tech stack you're
          interested in.
        </p>

        <ControlPanel
          :tags="tags"
          :selected-filters="selectedFilters"
          :projects="filteredProjects"
          :active-project="activeProject"
          @on-filter-change="projectFilterChange"
          @on-project-change="onActiveProjectChange"
        />
      </div>

      <div class="scrollable-container col-span-2 lg:max-w-[58%]">
        <MarkupViewer
          class="col-span-2 hidden lg:block"
          :active-project="activeProject"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useProjectsStore } from "@/stores/projectsStore";
import { MarkupViewer, ControlPanel } from "@/components";
import { Project } from "@/stores/projectTypes";
import { useRoute } from "vue-router";
import router from "@/router";

export default defineComponent({
  name: "ProjectsView",
  components: {
    MarkupViewer,
    ControlPanel,
  },
  setup() {
    const projectsStore = useProjectsStore();
    const route = useRoute();

    const selectedFilters = ref<string[]>([]);
    const activeProject = ref<Project | null>(null);

    const filteredProjects = computed(() => {
      const selectedFiltersSet = new Set(selectedFilters.value);
      if (selectedFiltersSet.size === 0) {
        return projectsStore.projects;
      }

      return projectsStore.projects.filter((project) =>
        project.tags.some((tech) => selectedFiltersSet.has(tech)),
      );
    });

    const setActiveProject = (projectId: string) => {
      const project = projectsStore.projects.find(
        (p) => p.id === Number(projectId),
      );
      activeProject.value = project || null;
    };

    watch(
      () => route.params.projectId,
      (newProjectId: string) => {
        if (newProjectId) {
          setActiveProject(newProjectId);
        }
      },
      { immediate: true },
    );

    const projectFilterChange = (filters: string[]) => {
      onActiveProjectChange(null);
      selectedFilters.value = filters;
    };

    const onActiveProjectChange = (projectId: Project["id"] | null) => {
      if (!projectId) {
        router.replace("/projects");
        setActiveProject(null);
      } else {
        router.push(`/projects/${projectId}`);
      }
    };

    return {
      filteredProjects,
      selectedFilters,
      activeProject,
      projectFilterChange,
      onActiveProjectChange,
      setActiveProject,
      tags: projectsStore.tags,
    };
  },
});
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.projects-view {
  position: fixed;
  inset: 0;
}

.scrollable-container {
  overflow-y: auto;
  overflow-x: visible;
  height: 100%;
  width: 100%;
  padding-top: 8rem;
  padding-bottom: 3rem;

  @media (max-width: 1024px) {
    padding-right: 0;
    padding-top: 6rem;
    padding-bottom: 0;
  }

  @extend %scrollbar-hidden;
}
</style>

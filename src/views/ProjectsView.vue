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

      <div
        v-if="isLgLayout"
        class="scrollable-container markup-viewer col-span-2 lg:max-w-[58%]"
      >
        <MarkupViewer
          class="col-span-2 hidden lg:block"
          :active-project="activeProject"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useProjectsStore } from "@/stores/projectsStore";
import { MarkupViewer, ControlPanel } from "@/components";
import { Project } from "@/stores/projectTypes";
import { useRoute } from "vue-router";
import router from "@/router";
import { storeToRefs } from "pinia";
import { useWindowSize } from "@/composables/useWindowSize";

export default defineComponent({
  name: "ProjectsView",
  components: {
    MarkupViewer,
    ControlPanel,
  },
  setup() {
    const projectsStore = useProjectsStore();
    const { selectedFilters, sortedProjects, tags } =
      storeToRefs(projectsStore);
    const route = useRoute();
    const { width } = useWindowSize();

    const activeProjectId = computed(
      () => route.params.projectId as string | undefined,
    );

    const activeProject = computed<Project | null>(() => {
      if (!activeProjectId.value) {
        return null;
      }
      return (
        sortedProjects.value.find(
          (p) => p.id === Number(activeProjectId.value),
        ) || null
      );
    });

    const filteredProjects = computed(() => projectsStore.filteredProjects);

    const projectFilterChange = (filters: string[]) => {
      onActiveProjectChange(null);
      projectsStore.setFilters(filters);
    };

    const onActiveProjectChange = (projectId: Project["id"] | null) => {
      if (!projectId) {
        router.replace("/projects");
      } else {
        router.push(`/projects/${projectId}`);
      }
    };

    const isLgLayout = computed(() => width.value > 1024);

    return {
      isLgLayout,
      filteredProjects,
      selectedFilters,
      activeProject,
      projectFilterChange,
      onActiveProjectChange,
      tags,
    };
  },
});
</script>

<style lang="scss" scoped>
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

  padding-right: 1rem;

  @extend %scrollbar-hidden;
}
</style>

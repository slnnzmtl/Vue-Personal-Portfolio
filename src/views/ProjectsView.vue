<template>
  <div
    class="projects-view max-w-[2000px] w-full mx-auto flex justify-center px-3"
  >
    <div class="flex flex-wrap lg:flex-nowrap gap-4">
      <ScrollableContainer
        direction="flex-col"
        :wrap="false"
        class="text-left w-full lg:max-w-[40%] pt-36"
        hide-scrollbar
      >
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
      </ScrollableContainer>

      <ScrollableContainer
        v-if="isLgLayout"
        ref="markupViewerContainer"
        hide-scrollbar
        class="pt-36"
      >
        <MarkupViewer
          id="markup-viewer"
          class="col-span-2 hidden lg:block"
          :active-project="activeProject"
        >
          <template #prepend>
            <h1>{{ activeProject?.title }}</h1>
          </template>
        </MarkupViewer>
      </ScrollableContainer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from "vue";
import { useProjectsStore } from "@/stores/projectsStore";
import { MarkupViewer, ControlPanel, ScrollableContainer } from "@/components";
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
    ScrollableContainer,
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

    const markupViewerContainer = ref<HTMLElement | null>(null);

    const scrollToTop = () => {
      if (markupViewerContainer.value) {
        markupViewerContainer.value.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    };

    watch(activeProject, (current) => {
      if (!isLgLayout.value) {
        return;
      }

      if (current) {
        setTimeout(() => {
          scrollToTop();
        }, 500);
        return;
      }
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
      markupViewerContainer,
    };
  },
});
</script>

<style lang="scss" scoped>
.projects-view {
  position: fixed;
  inset: 0;
}
</style>

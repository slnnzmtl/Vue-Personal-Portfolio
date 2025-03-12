<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
import FilterPanel from "@/components/FilterPanel/FilterPanel.vue";
import ProjectList from "@/components/ProjectList/ProjectList.vue";
import ScrollableContainer from "@/components/ui/ScrollableContainer.vue";
import { useProjectsStore } from "@/stores/projectsStore";
import { storeToRefs } from "pinia";
import { useWindowSize } from "@/composables/useWindowSize";
import SButton from "@/components/ui/buttons/SButton.vue";

export default defineComponent({
  name: "ProjectsScreen",
  components: {
    FilterPanel,
    ProjectList,
    ScrollableContainer,
    SButton,
  },
  setup() {
    const router = useRouter();
    const store = useProjectsStore();
    const { filteredProjects, selectedFilters, isLoading, error, tags } = storeToRefs(
      store
    );
    const { width } = useWindowSize();

    const projectListLayout = computed(() => {
      return width.value < 1024 ? "scroll" : "grid";
    });

    const projectFilterChange = (filters: string[]) => {
      store.setFilters(filters);
    };

    const onProjectClick = (projectId: number) => {
      if (projectId === -1) {
        router.push("/projects");
        return;
      }

      router.push(`/projects/${projectId}`);
    };

    const projects = computed(() => {
      return filteredProjects.value.slice(0, 3);
    });

    const showAllProjects = () => {
      return router.push("/projects");
    };

    return {
      tags,
      selectedFilters,
      projectFilterChange,
      onProjectClick,
      projects,
      isLoading,
      error,
      projectListLayout,
      showAllProjects,
    };
  },
});
</script>

<template>
  <div class="projects-screen max-w-screen-2xl py-12">
    <div v-if="isLoading" class="loading">Loading projects...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <template v-else>
      <div class="px-6">
        <h2 class="mb-8">Projects</h2>

        <p class="text-lg sm:text-xl mb-8 text-justify text-gray-500">
          Here, you'll find projects I've built or contributed to.
          <br />
          Use the filters below to explore projects based on the tech stack you're
          interested in.
        </p>

        <FilterPanel
          :tags="tags"
          :selected-filters="selectedFilters"
          @on-filter-change="projectFilterChange"
        />
      </div>

      <ScrollableContainer :wrap="false" class="min-h-[600px]">
        <ProjectList
          :layout="projectListLayout"
          :projects="projects"
          :selected-filters="selectedFilters"
          return-value="id"
          @selected="onProjectClick"
        />
      </ScrollableContainer>

      <div class="flex justify-center">
        <SButton
          type="primary"
          class="load-more-button mt-8 xl:mt-0 rounded"
          @click="showAllProjects"
        >
          Show more
        </SButton>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.projects-screen {
  text-align: left;
  width: 100vw;
}
</style>

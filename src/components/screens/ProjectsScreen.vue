<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { FilterPanel, ProjectList, ScrollableContainer } from "@/components";
import { useProjectsStore } from "@/stores/projectsStore";
import { storeToRefs } from "pinia";
import { useWindowSize } from "@/composables/useWindowSize";

export default defineComponent({
  name: "ProjectsScreen",
  components: {
    FilterPanel,
    ProjectList,
    ScrollableContainer,
  },
  setup() {
    const router = useRouter();
    const selectedFilters = ref<string[]>([]);
    const store = useProjectsStore();
    const { projects, isLoading, error } = storeToRefs(store);
    const { width } = useWindowSize();

    const tags = computed(() => {
      return projects.value.reduce((acc, project) => {
        project.tags.forEach((tech) => {
          if (!acc.includes(tech)) {
            acc.push(tech);
          }
        });
        return acc;
      }, [] as string[]);
    });

    const filteredProjects = computed(() => {
      const selectedFiltersSet = new Set(selectedFilters.value);
      const filtered =
        selectedFiltersSet.size === 0
          ? projects.value
          : projects.value.filter((project) =>
              project.tags.some((tech) => selectedFiltersSet.has(tech)),
            );

      return filtered.slice(0, 3);
    });

    const projectListLayout = computed(() => {
      return width.value < 1024 ? "scroll" : "grid";
    });

    const projectFilterChange = (filters: string[]) => {
      selectedFilters.value = filters;
    };

    const onProjectClick = (projectId: number) => {
      if (projectId === -1) {
        router.push("/projects");
        return;
      }

      router.push(`/projects/${projectId}`);
    };

    return {
      tags,
      selectedFilters,
      projectFilterChange,
      onProjectClick,
      filteredProjects,
      isLoading,
      error,
      projectListLayout,
    };
  },
});
</script>

<template>
  <div class="projects-screen max-w-screen-2xl">
    <div v-if="isLoading" class="loading">Loading projects...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <template v-else>
      <div class="px-8">
        <h2 class="mb-8">Projects</h2>

        <p class="text-lg sm:text-xl mb-8">
          Here, you'll find projects I've built or contributed to. Use the
          filters below to explore projects based on the tech stack you're
          interested in.
        </p>

        <FilterPanel
          :tags="tags"
          :selected-filters="selectedFilters"
          @on-filter-change="projectFilterChange"
        />
      </div>

      <ScrollableContainer>
        <ProjectList
          :layout="projectListLayout"
          :projects="filteredProjects"
          :selected-filters="selectedFilters"
          return-value="id"
          @selected="onProjectClick"
        />
      </ScrollableContainer>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.projects-screen {
  padding: 4rem 0;
  text-align: left;
  width: 100vw;
}
</style>

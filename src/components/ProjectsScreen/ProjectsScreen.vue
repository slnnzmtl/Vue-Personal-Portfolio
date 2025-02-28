<script lang="ts">
import { computed, defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { FilterPanel } from "@/components/FilterPanel";
import { ProjectList } from "@/components/ProjectList";
import { useProjectsStore } from "@/stores/projectsStore";
import { storeToRefs } from "pinia";

export default defineComponent({
  name: "ProjectsScreen",
  components: {
    FilterPanel,
    ProjectList,
  },
  setup() {
    const router = useRouter();
    const selectedFilters = ref<string[]>([]);
    const store = useProjectsStore();
    const { projects, isLoading, error } = storeToRefs(store);

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

    onMounted(async () => {
      await store.fetchProjects();
    });

    return {
      tags,
      selectedFilters,
      projectFilterChange,
      onProjectClick,
      filteredProjects,
      isLoading,
      error,
    };
  },
});
</script>

<template>
  <div class="projects-screen">
    <div v-if="isLoading" class="loading">Loading projects...</div>
    <div v-else-if="error" class="error">{{ error }}</div>
    <template v-else>
      <h2 class="mb-8">Projects</h2>

      <p class="text-lg sm:text-xl mb-8">
        Here, you'll find projects I've built or contributed to. Use the filters
        below to explore projects based on the tech stack you're interested in.
      </p>

      <FilterPanel
        :tags="tags"
        :selected-filters="selectedFilters"
        @on-filter-change="projectFilterChange"
      />

      <ProjectList
        type="grid"
        :projects="filteredProjects"
        :selected-filters="selectedFilters"
        class="flex w-full"
        return-value="id"
        @selected="onProjectClick"
      />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.projects-screen {
  padding: 4rem 2rem;
  text-align: left;
}
</style>

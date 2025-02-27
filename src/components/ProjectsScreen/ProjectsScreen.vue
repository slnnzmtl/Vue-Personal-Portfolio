<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { FilterPanel } from "@/components/FilterPanel";
import { ProjectList } from "@/components/ProjectList";
import { projects } from "@/stores/projectTypes";

export default defineComponent({
  name: "ProjectsScreen",
  components: {
    FilterPanel,
    ProjectList,
  },
  setup() {
    const router = useRouter();
    const selectedFilters = ref<string[]>([]);

    const tags = computed(() => {
      return projects
        ? projects.reduce((acc, project) => {
            project.tags.forEach((tech) => {
              if (!acc.includes(tech)) {
                acc.push(tech);
              }
            });
            return acc;
          }, [] as string[])
        : [];
    });

    const filteredProjects = computed(() => {
      const selectedFiltersSet = new Set(selectedFilters.value);
      if (selectedFiltersSet.size === 0) {
        return projects;
      }

      return projects.filter((project) =>
        project.tags.some((tech) => selectedFiltersSet.has(tech)),
      );
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
    };
  },
});
</script>

<template>
  <div class="projects-screen">
    <p class="text-2xl sm:text-4xl font-bold mb-8">Projects</p>

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
  </div>
</template>

<style lang="scss" scoped>
.projects-screen {
  padding: 4rem 2rem;
  text-align: left;
}
</style>

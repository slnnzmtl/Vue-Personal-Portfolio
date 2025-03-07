<template>
  <div>
    <FilterPanel
      :tags="tags"
      :selected-filters="selectedFilters"
      @on-filter-change="onFilterChange"
    />

    <div class="pb-6">
      <ProjectList
        :projects="projects"
        :active-project="activeProject"
        :selected-filters="selectedFilters"
        :layout="projectListLayout"
        return-value="id"
        flex-wrap
        @selected="onProjectChange"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref, watch } from "vue";
import FilterPanel from "@/components/FilterPanel/FilterPanel.vue";
import ProjectList from "@/components/ProjectList/ProjectList.vue";
import { Project } from "@/stores/projectTypes";

export default defineComponent({
  name: "ControlPanel",
  components: {
    FilterPanel,
    ProjectList,
  },
  props: {
    tags: {
      type: Array as PropType<string[]>,
      required: true,
    },
    selectedFilters: {
      type: Array as PropType<string[]>,
      required: true,
    },
    projects: {
      type: Array as PropType<Project[]>,
      required: true,
    },
    activeProject: {
      type: Object as PropType<Project | null>,
      required: false,
      default: null,
    },
  },
  emits: ["onFilterChange", "onProjectChange"],
  setup(props, { emit }) {
    const windowWidth = ref(window.innerWidth);
    const updateWindowWidth = () => {
      windowWidth.value = window.innerWidth;
    };

    window.addEventListener("resize", updateWindowWidth);

    const scrollToProject = (id: number) => {
      if (!id) return;

      setTimeout(() => {
        const project = document.getElementById(`project-${id}`);
        if (!project) return;

        project.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    };

    watch(
      () => props.activeProject,
      (current) => {
        if (!current) return;

        scrollToProject(current?.id);
      },
      { immediate: true }
    );

    const projectListLayout = computed(() => {
      return windowWidth.value < 1024 ? "grid" : "list";
    });

    const onFilterChange = (filters: string[]) => {
      emit("onFilterChange", filters);
    };

    const onProjectChange = (id: number | null) => {
      emit("onProjectChange", id);
    };

    return {
      projectListLayout,
      props,
      onFilterChange,
      onProjectChange,
    };
  },
});
</script>

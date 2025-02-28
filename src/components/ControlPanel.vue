<template>
  <div>
    <FilterPanel
      :tags="tags"
      :selected-filters="selectedFilters"
      @on-filter-change="onFilterChange"
    />

    <ProjectList
      :projects="projects"
      :active-project="activeProject"
      :selected-filters="selectedFilters"
      :type="projectListType"
      return-value="id"
      @selected="onProjectChange"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from "vue";
import { FilterPanel, ProjectList } from "@/components";
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

    const projectListType = computed(() => {
      return windowWidth.value < 1024 ? "grid" : "list";
    });

    const onFilterChange = (filters: string[]) => {
      emit("onFilterChange", filters);
    };

    const onProjectChange = (id: number | null) => {
      emit("onProjectChange", id);
    };

    return {
      projectListType,
      props,
      onFilterChange,
      onProjectChange,
    };
  },
});
</script>

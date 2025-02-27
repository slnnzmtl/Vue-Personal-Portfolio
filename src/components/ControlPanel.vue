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
import { computed, defineComponent, ref } from "vue";
import { FilterPanel, ProjectList } from "@/components";

export default defineComponent({
  name: "ControlPanel",
  components: {
    FilterPanel,
    ProjectList,
  },
  props: {
    tags: {
      type: Array,
      required: true,
    },
    selectedFilters: {
      type: Array,
      required: true,
    },
    projects: {
      type: Array,
      required: true,
    },
    activeProject: {
      type: Object,
      required: true,
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

    const onProjectChange = (id: number) => {
      console.log(id);
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

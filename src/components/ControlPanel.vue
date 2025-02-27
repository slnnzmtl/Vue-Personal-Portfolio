<template>
  <div>
    <FilterPanel
      :tags="tags"
      :selectedFilters="selectedFilters"
      @onFilterChange="onFilterChange"
    />

    <ProjectList
      :projects="projects"
      :activeProject="activeProject"
      :selectedFilters="selectedFilters"
      @project-clicked="onProjectClicked"
      type="list"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import { FilterPanel, ProjectList } from '@/components';

export default defineComponent({
  setup (props) {
    onMounted(() => {
      console.log(props)
    });

    return {
      props
    }
  },
  name: 'ControlPanel',
  components: {
    FilterPanel,
    ProjectList
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
  emits: ['onFilterChange', 'project-clicked'],
  methods: {
    onFilterChange(filters) {
      this.$emit('onFilterChange', filters);
    },
    onProjectClicked(project) {
      this.$emit('project-clicked', project);
    },
  }
});
</script>

<style scoped>
/* Add any specific styles for ControlPanel here */
</style> 
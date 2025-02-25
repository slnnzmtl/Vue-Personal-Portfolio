<template>
  <div class="filter-panel">
    <div class="filter-panel__tags">
      <span
        v-for="tech in technologies"
        :key="tech"
        class="filter-panel__tag"
        @click="toggleFilter(tech)"
        :class="{ 'active': isActive(tech) }"
      >
        {{ tech }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  technologies: string[];
  selectedFilters: string[];
}>();

const emit = defineEmits<{
  (e: 'onFilterChange', filters: string[]): void;
}>();

const toggleFilter = (tech: string) => {
  const index = props.selectedFilters.indexOf(tech);
  if (index === -1) {
    emit('onFilterChange', [...props.selectedFilters, tech]);
  } else {
    emit('onFilterChange', props.selectedFilters.filter(t => t !== tech));
  }
};

const isActive = (tech: string) => {
  return props.selectedFilters.includes(tech);
};
</script>

<style scoped lang="scss">
.filter-panel {
  margin-bottom: 2rem;

  &__title {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
  }

  &__tag {
    background-color: rgba(255, 255, 255, 0.2);
    color: var(--text);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    margin-right: 0.5rem;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: background-color 0.3s;

    &.active {
      background-color: var(--cyan);
      color: var(--background);
    }
  }
}
</style> 
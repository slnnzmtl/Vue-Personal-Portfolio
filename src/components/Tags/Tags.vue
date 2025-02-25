<template>
  <div class="tags">
    <span 
      v-for="tech in technologies" 
      :key="tech" 
      :class="['tag', { 'highlighted': selectedFilters.includes(tech) }]"
    >
      {{ tech }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Tags',
  props: {
    technologies: {
      type: Array as PropType<string[]>,
      required: true,
    },
    selectedFilters: {
      type: Array as PropType<string[]>,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  display: inline-block;
  background-color: rgba(255, 255, 255, 0.2);
  color: var(--text);
  border-radius: 4px;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;

  &.highlighted {
    background-color: var(--cyan);
    color: var(--background);
  }
}
</style> 
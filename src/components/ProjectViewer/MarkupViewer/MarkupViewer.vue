<template>
  <Glass class="markup-content p-4">
    <div v-if="activeProject" v-html="renderedContent" class="markup-content__render rounded-lg"></div>
    <div v-else class="placeholder flex items-center justify-center h-full">
      <p>Please select a project to view its details.</p>
    </div>
  </Glass>
</template>

<script lang="ts" setup>
import { ref, onMounted, defineProps, onBeforeUnmount, computed } from 'vue';
import { marked } from 'marked';
import { Glass } from '@components/ui';

const props = defineProps<{
  activeProject: any; 
  viewerHeight: number; 
}>()

const renderedContent = computed(() => {
  if (props.activeProject) {
    return marked(props.activeProject.html);
  }
  return '';
})
</script>

<style lang="scss">
@import "@styles/mixins/_scrollbar.scss";
.markup-content {
  overflow-y: auto;
  text-align: left;
  
  @extend %scrollbar-tidy; 

  &__render {
    h1, h2, p, ul {
      margin-bottom: 1rem;
    }

    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.5rem;
    }

    ul {
      margin-left: 1rem;
    }

    li {
      margin-bottom: 0.5rem;
      list-style-type: disc;
      margin-left: 1rem;
    }
  }

  .placeholder {
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
  }
}
</style> 
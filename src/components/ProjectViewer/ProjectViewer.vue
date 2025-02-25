<template>
  <div class="project-viewer grid grid-cols-1 md:grid-cols-3 gap-8" @mouseleave="hideMarkup">
    

    <div class="markup-viewer col-span-2 flex flex-col gap-4 p-4">
      <MarkupViewer 
        :active-project="activeProject" 
        :viewer-height="markupContentHeight"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeUnmount, onMounted, ref, nextTick } from 'vue';
import { Project } from '@stores/projectTypes';
import { Glass } from '@components/ui';
import { ProjectList } from './ProjectList';
import { Tags, MarkupViewer } from '@components';

const props = defineProps<{
  projects: Array<Project>;
  selectedFilters: string[];
}>();

const markupContentHeight = ref(0);
const projectListRef = ref<any>(null);

const calculateMarkupContentHeight = () => {
  nextTick(() => {
    if (projectListRef.value) {
      const projectListHeight = projectListRef.value.$el.clientHeight;
      const viewerHeight = projectListHeight - 20; 
      markupContentHeight.value = Math.max(viewerHeight, 0); 
    }
  });
};

onMounted(() => {
  calculateMarkupContentHeight();
  window.addEventListener('resize', calculateMarkupContentHeight); 
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', calculateMarkupContentHeight);
});

</script>

<style scoped lang="scss">
.project-viewer {
  padding: 0.5rem;
  min-height: 60vh;
  overflow: hidden;
}

</style>
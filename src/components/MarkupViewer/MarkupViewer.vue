<template>
  <div class="markup-content">
    <div v-if="activeProject">
      <div class="markup-content__render rounded-lg" v-html="renderedContent" />

      <div v-if="activeProject.images">
        <h2 class="text-lg sm:text-xl mb-4">Images</h2>
        <ImageViewer :images="activeProject.images" />
      </div>
    </div>

    <div v-else class="placeholder flex items-center justify-center h-[70vh]">
      <p>Please select an element to view its details.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ImageViewer from "./ImageViewer.vue";

import { marked } from "marked";

export default defineComponent({
  name: "MarkupViewer",
  components: {
    ImageViewer,
  },
  props: {
    activeProject: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const renderedContent = computed(() => {
      if (props.activeProject) {
        return marked(props.activeProject.html);
      }
      return "";
    });

    return {
      renderedContent,
    };
  },
});
</script>

<style lang="scss">
.markup-content {
  text-align: left;

  &__render {
    h1,
    h2,
    h3,
    p,
    ul,
    img {
      margin-bottom: 2rem;
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

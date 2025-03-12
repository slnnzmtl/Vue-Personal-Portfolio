<template>
  <transition name="fade" mode="out-in" class="markup-content lg:px-2">
    <div v-if="renderedContent">
      <div class="markup-content__render rounded-lg" ref="contentRef">
        <slot name="prepend" />
        <div v-html="renderedContent" @click="handleContentClick"></div>
      </div>

      <div v-if="activeProject.images">
        <h2 class="text-lg sm:text-xl mb-4">Images</h2>
        <ImageViewer :images="activeProject.images" />
      </div>
    </div>

    <div
      v-else
      key="placeholder"
      class="placeholder flex items-center justify-center h-[70vh]"
    >
      <p class="text-center">Please select an element to view its details.</p>
    </div>
  </transition>
</template>

<script lang="ts">
import {
  defineComponent,
  computed,
  ref,
  watch,
  defineAsyncComponent,
  nextTick,
} from "vue";
import { marked } from "marked";
import { useModalService } from "@/composables/useModal";
import { ModalKey } from "@/modals/types";

const ImageViewer = defineAsyncComponent({
  loader: () => import("@/components/MarkupViewer/ImageViewer.vue"),
  delay: 1000,
  timeout: 3000,
  suspensible: true,
});

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
    const project = ref(null);
    const contentRef = ref<HTMLElement | null>(null);
    const { openModal } = useModalService();
    const renderedContent = computed(() => {
      if (props.activeProject && props.activeProject.html) {
        return marked(props.activeProject.html);
      }
      return "";
    });

    const handleContentClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (target.tagName === "IMG") {
        event.preventDefault();
        event.stopPropagation();

        const img = target as HTMLImageElement;
        if (img.src) {
          openModal(ModalKey.ImageViewer, {
            imageUrl: img.src,
          });
        }
      }
    };

    watch(
      () => props.activeProject,
      (current) => {
        project.value = null;

        nextTick(() => {
          project.value = current;
        });
      },
      { immediate: true }
    );

    return {
      renderedContent,
      project,
      contentRef,
      handleContentClick,
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

    img {
      cursor: pointer;
      transition: transform 0.2s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  }

  .placeholder {
    text-align: center;
    padding: 20px;
    font-size: 1.2rem;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

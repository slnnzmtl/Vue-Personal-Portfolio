<template>
  <ModalWindow class="image-viewer-modal" @close="closeModal">
    <GlassMaterial
      class="image-viewer"
      @wheel="handleZoom"
      @mousedown="handleMouseDown"
      @mousemove="pan"
      @mouseup="stopPan"
      @mouseleave="stopPan"
      @click="handleBackgroundClick"
    >
      <img
        ref="imageRef"
        class="image-viewer__image"
        :src="imageUrl"
        :style="{
          transform: `scale(${scale}) translate(${position.x}px, ${position.y}px)`,
          cursor: isPanning ? 'grabbing' : 'grab',
        }"
        alt="Image viewer"
        @click.stop
      />
      <div class="image-viewer__controls" @click.stop>
        <SButton variant="glass" @click="resetView">
          <ResetIcon class="w-5 h-5" />
        </SButton>
        <SButton variant="glass" @click="zoomIn">
          <PlusIcon class="w-5 h-5" />
        </SButton>
        <SButton variant="glass" @click="zoomOut">
          <MinusIcon class="w-5 h-5" />
        </SButton>
      </div>
    </GlassMaterial>
  </ModalWindow>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ModalWindow, SButton, GlassMaterial } from "@/components/ui";
import { PlusIcon, MinusIcon, ResetIcon } from "@/components/icons";

interface Position {
  x: number;
  y: number;
}

export default defineComponent({
  name: "ImageViewerModal",

  components: {
    ModalWindow,
    SButton,
    PlusIcon,
    MinusIcon,
    ResetIcon,
    GlassMaterial,
  },

  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },

  emits: ["close"],

  setup(props, { emit }) {
    const imageRef = ref<HTMLImageElement | null>(null);
    const scale = ref(1);
    const position = ref<Position>({ x: 0, y: 0 });
    const isPanning = ref(false);
    const startPosition = ref<Position>({ x: 0, y: 0 });

    const MIN_SCALE = 0.5;
    const MAX_SCALE = 3;
    const ZOOM_SPEED = 0.1;

    const closeModal = (result: boolean | null = null) => {
      emit("close", result);
    };

    const handleZoom = (e: WheelEvent) => {
      e.preventDefault();
      const delta = e.deltaY > 0 ? -ZOOM_SPEED : ZOOM_SPEED;
      const newScale = Math.max(
        MIN_SCALE,
        Math.min(MAX_SCALE, scale.value + delta),
      );

      if (newScale !== scale.value) {
        const rect = imageRef.value?.getBoundingClientRect();
        if (rect) {
          const mouseX = e.clientX - rect.left;
          const mouseY = e.clientY - rect.top;

          const scaleChange = newScale - scale.value;
          position.value.x -=
            (mouseX - position.value.x) * (scaleChange / scale.value);
          position.value.y -=
            (mouseY - position.value.y) * (scaleChange / scale.value);

          scale.value = newScale;
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.target === imageRef.value) {
        startPan(e);
      }
    };

    const startPan = (e: MouseEvent) => {
      isPanning.value = true;
      startPosition.value = {
        x: e.clientX - position.value.x,
        y: e.clientY - position.value.y,
      };
    };

    const pan = (e: MouseEvent) => {
      if (!isPanning.value) return;

      position.value = {
        x: e.clientX - startPosition.value.x,
        y: e.clientY - startPosition.value.y,
      };
    };

    const stopPan = () => {
      isPanning.value = false;
    };

    const zoomIn = () => {
      scale.value = Math.min(MAX_SCALE, scale.value + ZOOM_SPEED);
    };

    const zoomOut = () => {
      scale.value = Math.max(MIN_SCALE, scale.value - ZOOM_SPEED);
    };

    const resetView = () => {
      scale.value = 1;
      position.value = { x: 0, y: 0 };
    };

    const handleBackgroundClick = (e: MouseEvent) => {
      e.stopPropagation();
      if (e.target === e.currentTarget) {
        closeModal();
      }
    };

    return {
      imageRef,
      scale,
      position,
      isPanning,
      closeModal,
      handleZoom,
      handleMouseDown,
      startPan,
      pan,
      stopPan,
      zoomIn,
      zoomOut,
      resetView,
      handleBackgroundClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.image-viewer-modal {
}

.image-viewer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;

  &__image {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    transition: transform 0.1s ease;
    user-select: none;
    -webkit-user-drag: none;
  }

  &__controls {
    position: fixed;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    border-radius: 0.5rem;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(10px);
  }
}
</style>

<template>
  <div class="image-wrapper" :class="{ loading: isLoading }">
    <div v-if="isLoading" class="image-placeholder">
      <div class="loading-shimmer"></div>
    </div>
    <img
      :src="src"
      :alt="alt"
      class="image"
      :class="{ 'image-loaded': !isLoading }"
      @load="onImageLoad"
      @error="onImageError"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ImageLoad",

  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      default: "",
    },
  },

  setup() {
    const isLoading = ref(true);

    const onImageLoad = () => {
      isLoading.value = false;
    };

    const onImageError = () => {
      isLoading.value = false;
    };

    return {
      isLoading,
      onImageLoad,
      onImageError,
    };
  },
});
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 0;
  transition: opacity 0.3s ease;

  &-loaded {
    opacity: 1;
  }
}

.image-placeholder {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-height: 150px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  overflow: hidden;
}

.loading-shimmer {
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.05) 0%,
    rgba(255, 255, 255, 0.1) 50%,
    rgba(255, 255, 255, 0.05) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>

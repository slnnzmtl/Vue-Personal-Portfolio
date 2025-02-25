<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  name: string
  description: string
  url: string
  image: string
}

const props = defineProps<Props>()
const isImageLoading = ref(true);

const handleImageLoad = () => {
  isImageLoading.value = false;
};
</script>

<template>
  <div class="project-card">
    <div class="project-card__glass"></div>
    <div class="project-card__image">
      <div v-if="isImageLoading" class="image-loader shimmer"></div>
      <img 
        :src="props.image" 
        :alt="props.name"
        @load="handleImageLoad"
        :class="{ 'image-loaded': !isImageLoading }"
      />
    </div>
    <div class="project-card__content">
      <h2 class="project-card__title text-lg sm:text-xl">{{ props.name }}</h2>
      <p class="project-card__description text-sm sm:text-base">{{ props.description }}</p>
      <a :href="props.url" target="_blank" class="project-card__link">
        Visit Website
        <span class="project-card__link-arrow">→</span>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.project-card {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    
    .project-card__link-arrow {
      transform: translateX(5px);
    }
  }

  &__glass {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.1),
      rgba(255, 255, 255, 0.05)
    );
    z-index: 0;
  }

  &__image {
    position: relative;
    height: 200px;
    overflow: hidden;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 0.3s ease;
      opacity: 0;

      &.image-loaded {
        opacity: 1;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    padding: 1.5rem;
    z-index: 1;
    flex-grow: 1;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 0.5rem;
  }

  &__description {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }

  &__link {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    color: var(--cyan);
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s ease;

    &:hover {
      color: var(--cyan-light);
    }

    &-arrow {
      margin-left: 0.5rem;
      transition: transform 0.3s ease;
    }
  }
}

.image-loader {
  position: absolute;
  inset: 0;
  z-index: 2;
}

.shimmer {
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
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
</style>
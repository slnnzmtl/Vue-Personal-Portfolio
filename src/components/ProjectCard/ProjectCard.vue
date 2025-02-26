<script setup lang="ts">
import { computed, ref } from 'vue';
import { Glass } from '@components/ui';
import type { Project } from '@stores/projectTypes';
import { Tags } from '../Tags';

interface Props {
  project: Project;
  selectedFilters: string[];
  type: 'list' | 'grid';
  active: boolean;
}

const props = defineProps<Props>();
const isImageLoading = ref(true);
const isExpanded = ref(false);

const isGridLayout = computed(() => props.type === 'grid');
const activeClass = computed(() => {
  return props.active ? 'active' : '' 
});


const expandedClass = computed(() => {
  return isExpanded || props.active  ? 'expanded' : ''
});

const handleImageLoad = () => {
  isImageLoading.value = false;
};

const expand = () => {
  isExpanded.value = true;
};

const collapse = () => {
  isExpanded.value = false;
};
</script>

<template>
  <Glass 
    v-if="isGridLayout" 
    :class="`project-card flex flex-col relative radius-md overflow-hidden ${activeClass}`"
  >
    <div class="project-card__image">
      <div v-if="isImageLoading" class="image-loader shimmer"></div>
      <img 
        :src="project?.image" 
        :alt="project?.name"
        @load="handleImageLoad"
        :class="{ 'image-loaded': !isImageLoading }"
      />
    </div>
    
    <div class="project-card__content flex flex-col gap-4 p-4 text-left">
      <h2 class="project-card__title text-lg sm:text-xl">{{ project?.name }}</h2>
      <p class="project-card__description text-sm sm:text-base">{{ project?.description }}</p>
      
      <Tags 
        :technologies="project?.technologies" 
        :selectedFilters="selectedFilters" 
      />

      <a :href="project?.url" target="_blank" class="project-card__link">
        Read more
        <span class="project-card__link-arrow">→</span>
      </a>
    </div>
  </Glass>

  <Glass 
    v-else 
    :class="`project-card project-card--list relative radius-md overflow-hidden p-4 ${activeClass} ${expandedClass}`"
  >
    <div class="flex gap-4">
      <div class="project-card__image">
        <div v-if="isImageLoading" class="image-loader shimmer"></div>
        <img 
          :src="project?.image" 
          :alt="project?.name"
          @load="handleImageLoad"
          :class="{ 'image-loaded': !isImageLoading }"
        />
      </div>

      <div class="flex flex-col gap-2 justify-around flex-grow">
        <h2 class="project-card__title text-lg sm:text-xl">{{ project?.name }}</h2>

        <Tags 
          :technologies="project?.technologies" 
          :selectedFilters="selectedFilters" 
        />
      </div>
    </div>
    
    <div class="project-card__content">
      <p class="project-card__description text-sm sm:text-base py-4">{{ project?.description }}</p>
    </div>
  </Glass>
</template>

<style scoped lang="scss">
:root {
  --card-transition: 0.3s ease;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
}

.project-card {
  transition: all .3s ease;
  cursor: pointer;

  &.active {
    background: var(--cyan-alpha-10);
    transform: translateX(5px);
  }

  &:hover {
    transform: translateY(-5px);
    
    .project-card__link-arrow {
      transform: translateX(5px);
    }
  }

  &--list {
    &:hover {
      transform: translateX(5px);
    }

    .project-card__image {
      height: auto;
      width: 20%;
      max-width: 120px;
      min-width: 80px;
      object-fit: cover;
      overflow: hidden;
      border-radius: var(--radius-lg);
    }

    .project-card__content {
      max-height: 0;
      overflow: hidden;
      opacity: 0;
      transition: max-height 0.3s ease, opacity 0.3s ease, padding 0.3s ease;
    }

    &.expanded {
      .project-card__content {
        max-height: 200px;
        opacity: 1;
      }
    }
  }

  &__image {
    position: relative;
    height: 300px; 
    overflow: hidden;
    z-index: 1;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity var(--card-transition);
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
    z-index: 1;
    flex-grow: 1;
  }

  &__title {
    font-weight: 600;
    color: var(--text);
    margin-bottom: var(--spacing-sm);
  }

  &__description {
    color: var(--text-secondary);
    margin-bottom: var(--spacing-md);
    line-height: 1.4;
  }

  &__link {
    margin-top: var(--spacing-md);
    display: inline-flex;
    align-items: center;
    color: var(--cyan);
    text-decoration: none;
    font-weight: 500;
    transition: color var(--card-transition);

    &:hover {
      color: var(--cyan-light);
    }

    &-arrow {
      margin-left: .5rem;
      transition: transform 0.3s;
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
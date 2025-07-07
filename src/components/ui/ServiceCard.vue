<template>
  <GlassMaterial
    :class="['service-card p-6 mb-4', { 'has-link': hasLink }]"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="service-title">{{ title }}</div>
    <div class="service-description">
      {{ description }}
    </div>
    <router-link v-if="hasLink" :to="linkTo" class="read-more-link">
      <ReadMore :hovered="isHovered" />
    </router-link>
  </GlassMaterial>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import ReadMore from "@/components/ui/ReadMore.vue";

interface Props {
  title: string;
  description: string;
  linkTo?: string;
}

const props = defineProps<Props>();

const isHovered = ref(false);
const hasLink = !!props.linkTo;

const onMouseEnter = () => {
  isHovered.value = true;
};

const onMouseLeave = () => {
  isHovered.value = false;
};
</script>

<style lang="scss" scoped>
.service-card {
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:hover {
    transform: translateY(-2px);
  }

  &.has-link {
    background: rgba(0, 255, 145, 0.1);
  }
}

.service-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--cyan);
}

.service-description {
  color: var(--white-600);
  line-height: 1.6;
}

.read-more-link {
  text-decoration: none;
}
</style>

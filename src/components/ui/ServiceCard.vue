<template>
  <GlassMaterial
    :class="['service-card p-6', { 'has-link': hasLink }]"
    @click="handleClick"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
  >
    <div class="service-title">{{ title }}</div>
    <div class="service-description">
      {{ description }}
    </div>

    <ReadMore v-if="hasLink" class="mt-2" :hovered="isHovered" />
  </GlassMaterial>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import ReadMore from "@/components/ui/ReadMore.vue";
import { useRouter } from "vue-router";
import { useTranslation } from "@/composables/useTranslation";

interface Props {
  title: string;
  description: string;
  linkTo?: string;
}

const props = defineProps<Props>();
const router = useRouter();
const { t } = useTranslation();

const isHovered = ref(false);
const hasLink = !!props.linkTo;

const onMouseEnter = () => {
  isHovered.value = true;
};

const onMouseLeave = () => {
  isHovered.value = false;
};

const handleClick = () => {
  if (props.linkTo) {
    router.push(props.linkTo);
  }
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
    cursor: pointer;
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

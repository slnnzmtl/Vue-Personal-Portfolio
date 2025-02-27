<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  type?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}>();

const isPrimary = computed(() => props.type === 'primary');
const isSecondary = computed(() => props.type === 'secondary');
const isTertiary = computed(() => props.type === 'tertiary'); 

const isSmall = computed(() => props.size === 'small');
const isMedium = computed(() => props.size === 'medium');
const isLarge = computed(() => props.size === 'large');
</script>

<template>
  <button
    :class="[
      'button',
      isPrimary && 'button--primary',
      isSecondary && 'button--secondary',
      isTertiary && 'button--tertiary',
      isSmall && 'button--small',
      isMedium && 'button--medium',
      isLarge && 'button--large',
      props.disabled && 'button--disabled',
      props.loading && 'button--loading',
    ]"
    :disabled="props.disabled"
    :type="props.type"
  >
    <slot />
  </button>
</template>

<style scoped lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;

  &:hover {
    animation: scale .3s ease-in-out forwards;
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.2);
    }
  }

  &--primary {
    background-color: var(--cyan);
    color: var(--background);
  }

  &--secondary {
    background-color: var(--background);
    color: var(--text);
  }

  &--tertiary {
    background-color: var(--text);
    color: var(--background);
  }

  &--small {
    padding: 0.25rem 0.5rem;
    font-size: 0.875rem;
  }

  &--medium {
    padding: 0.5rem 1.5rem;
    font-size: 1rem;
  }

  &--large {
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
  }

  &--disabled {
    background-color: var(--background);
    color: var(--text-secondary);
    cursor: not-allowed;
  }

  &--loading {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
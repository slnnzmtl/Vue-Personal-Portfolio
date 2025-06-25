<script lang="ts">
import { computed, defineComponent, PropType } from "vue";

export default defineComponent({
  name: "SButton",
  props: {
    type: {
      type: String as PropType<"primary" | "secondary" | "tertiary">,
      default: "button",
    },
    size: {
      type: String,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    href: {
      type: String,
      default: "",
    },
    target: {
      type: String,
      default: "_self",
    },
  },
  setup(props) {
    const isPrimary = computed(() => props.type === "primary");
    const isSecondary = computed(() => props.type === "secondary");
    const isTertiary = computed(() => props.type === "tertiary");

    const isSmall = computed(() => props.size === "small");
    const isMedium = computed(() => props.size === "medium");
    const isLarge = computed(() => props.size === "large");

    const isHref = computed(() => !!props.href);
    return {
      isPrimary,
      isSecondary,
      isTertiary,
      isSmall,
      isMedium,
      isLarge,
      isHref,
    };
  },
});
</script>

<template>
  <a v-if="isHref" :href="href" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
  <button
    v-else
    :class="[
      'button',
      isPrimary && 'button--primary',
      isSecondary && 'button--secondary',
      isTertiary && 'button--tertiary',
      isSmall && 'button--small',
      isMedium && 'button--medium',
      isLarge && 'button--large',
      disabled && 'button--disabled',
      loading && 'button--loading',
      'rounded-3xl',
    ]"
    :disabled="disabled"
    v-bind="$attrs"
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
    animation: scale 0.3s ease-in-out forwards;
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
    opacity: 0.5;
  }
}
</style>

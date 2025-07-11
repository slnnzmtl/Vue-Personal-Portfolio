<template>
  <span class="read-more" :class="{ 'read-more--hovered': hovered }">
    {{ t('common.readMore') }}
    <span class="read-more__arrow">→</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useTranslation } from "@/composables/useTranslation";

export default defineComponent({
  name: "ReadMore",
  props: {
    hovered: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const { t } = useTranslation();
    
    return {
      t,
    };
  },
});
</script>

<style scoped lang="scss">
.read-more {
  display: inline-flex;
  align-items: center;
  color: var(--cyan);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &--hovered {
    color: var(--cyan-dark);
  }

  &__arrow {
    margin-left: 0.5rem;
    transition: transform 0.3s;
    animation: slide-right 2s infinite;

    @keyframes slide-right {
      0% {
        transform: translateX(0);
      }
      50% {
        transform: translateX(5px);
      }
      100% {
        transform: translateX(0);
      }
    }
  }

  &--hovered &__arrow {
    animation: none;
    transform: translateX(5px);
  }
}
</style>

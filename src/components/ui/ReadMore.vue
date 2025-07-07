<template>
  <span class="read-more" :class="{ 'read-more--hovered': hovered }">
    Read more
    <span class="read-more__arrow">→</span>
  </span>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ReadMore",
  props: {
    hovered: {
      type: Boolean,
      default: false,
    },
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
  }

  &--hovered &__arrow {
    transform: translateX(5px);
  }
}
</style>

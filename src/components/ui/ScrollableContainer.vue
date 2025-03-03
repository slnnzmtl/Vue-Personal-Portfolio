<template>
  <div class="scrollable-wrapper">
    <div
      class="scrollable-container flex gap-4 overflow-x-auto scroll-smooth"
      :class="[direction, wrap ? 'flex-wrap' : 'flex-nowrap']"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ScrollableContainer",
  props: {
    direction: {
      type: String,
      default: "flex-row",
      validator: (value: string) => ["flex-row", "flex-col"].includes(value),
    },
    wrap: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.scrollable-wrapper {
  width: 100%;
  position: relative;
}

.scrollable-container {
  @extend %scrollbar-tidy;
  padding-bottom: 1rem;
}
</style>

<template>
  <div :class="containerClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

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
    hideScrollbar: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const containerClass = computed(() => {
      return [
        "scrollable-wrapper scroll-smooth",
        props.hideScrollbar ? "hide-scrollbar" : "",
        props.direction,
        props.wrap ? "flex-wrap" : "flex-nowrap",
      ];
    });

    return {
      containerClass,
    };
  },
});
</script>

<style lang="scss" scoped>
.scrollable-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  overflow-x: auto;
  overflow-y: auto;

  @extend %scrollbar-tidy;
  padding-bottom: 1rem;

  &.hide-scrollbar {
    @extend %scrollbar-hidden;
    padding-right: 0;
  }
}
</style>

<template>
  <div ref="scrollableContainer" :class="containerClass">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";

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
  emits: ["scroll"],
  setup(props, { emit }) {
    const scrollableContainer = ref<HTMLElement | null>(null);

    const containerClass = computed(() => {
      return [
        "scrollable-wrapper scroll-smooth",
        props.hideScrollbar ? "hide-scrollbar" : "",
        props.direction,
        props.wrap ? "flex-wrap" : "flex-nowrap",
      ];
    });

    const handleScroll = (e: Event) => {
      emit("scroll", e);
    };

    watch(
      () => scrollableContainer.value,
      (container) => {
        if (container) {
          container.addEventListener("scroll", handleScroll);
        }
      },
      { immediate: true }
    );

    return {
      containerClass,
      scrollableContainer,
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

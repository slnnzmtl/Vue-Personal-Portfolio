<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "GlassMaterial",
  props: {
    blur: {
      type: String,
      default: "10px",
    },
  },
  setup(props) {
    const blurStyle = {
      backdropFilter: `blur(${props.blur})`,
    };

    return {
      blurStyle,
    };
  },
});
</script>

<template>
  <div class="glass-wrapper" :style="blurStyle">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.glass-wrapper {
  background: rgba(22, 22, 22, 0.2);
  border-radius: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease;
}
</style>

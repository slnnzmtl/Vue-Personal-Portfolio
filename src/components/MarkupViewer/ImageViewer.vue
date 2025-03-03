<template>
  <div class="image-viewer">
    <ImageLoad :src="imageUrl" :alt="'Image viewer'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ImageLoad } from "@/components/ui";

export default defineComponent({
  name: "ImageViewer",

  components: {
    ImageLoad,
  },

  props: {
    imageUrl: {
      type: String,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.image-viewer {
  width: 100%;
  height: 100%;
}
</style>

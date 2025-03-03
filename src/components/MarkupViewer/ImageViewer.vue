<template>
  <ScrollableContainer>
    <div class="image-viewer flex flex-nowrap gap-4">
      <div
        v-for="imageUrl in images"
        :key="imageUrl"
        class="image-viewer__image flex cursor-pointer"
        @click.stop="onImageClick(imageUrl)"
      >
        <ImageLoad :src="imageUrl" :alt="'Image viewer'" />
      </div>
    </div>
  </ScrollableContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ImageLoad } from "@/components/ui";
import { useModalService } from "@/composables";
import { ModalKey } from "@/modals/types";

export default defineComponent({
  name: "ImageViewer",

  components: {
    ImageLoad,
  },

  props: {
    images: {
      type: Array<string>,
      required: true,
    },
  },
  setup() {
    const { openModal } = useModalService();

    const onImageClick = (imageUrl: string) => {
      console.log({ imageUrl });
      openModal(ModalKey.ImageViewer, { imageUrl });
    };

    return {
      onImageClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.image-viewer {
  width: 100%;
  height: 100%;
}
</style>

<template>
  <ScrollableContainer>
    <div class="image-viewer flex flex-nowrap gap-4">
      <div
        v-for="imageUrl in images"
        :key="imageUrl"
        class="image-viewer__image flex"
        @click.stop="onImageClick(imageUrl)"
      >
        <img :src="imageUrl" alt="Image viewer" />
      </div>
    </div>
  </ScrollableContainer>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ScrollableContainer } from "@/components";
import { Project } from "@/stores/projectTypes";
import { useModalService } from "@/composables";
import { ModalKey } from "@/modals/types";

export default defineComponent({
  name: "ImageViewer",
  components: {
    ScrollableContainer,
  },
  props: {
    images: {
      type: Object as PropType<Project>,
      required: true,
    },
  },
  setup() {
    const { openModal } = useModalService();

    const onImageClick = (imageUrl: string) => {
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
  height: 300px;

  &__image {
    overflow: hidden;
    width: 300px;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { MarkupViewer } from "@/components/MarkupViewer";
import { ModalWindow } from "@/components";
import { ModalKey } from "@/modals/types";

export default defineComponent({
  name: "ProjectDetailsModal",
  components: {
    MarkupViewer,
    ModalWindow,
  },
  props: {
    project: {
      type: Object,
      required: true,
    },
  },
  emits: ["closeModal"],
  setup(props, { emit }) {
    const closeModal = () => {
      emit("closeModal");
    };

    watch(
      () => props.project,
      () => {
        console.log(props.project);
      },
      { immediate: true },
    );

    return {
      closeModal,
      modalKey: ModalKey.ProjectDetails,
    };
  },
});
</script>

<template>
  <ModalWindow :name="modalKey" @close="closeModal">
    {{ project }}
    <MarkupViewer :active-project="project" />
  </ModalWindow>
</template>

<style scoped lang="scss">
.project-details-modal {
  padding: 2rem;
  top: 0;
}
</style>

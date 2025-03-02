<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import { useModalService } from "@/composables";

export default defineComponent({
  name: "ModalWindow",
  components: {
    GlassMaterial,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const { closeModal } = useModalService();

    const onClose = (result: boolean | null) => {
      closeModal(props.name, result);
      emit("close", result);
    };

    const stopPropagation = (event: MouseEvent) => {
      event.stopPropagation();
    };

    return {
      onClose,
      stopPropagation,
    };
  },
});
</script>

<template>
  <GlassMaterial blur="40px" class="modal-overlay" @click="onClose">
    <div class="modal" @click="stopPropagation">
      <slot name="default" />
    </div>
  </GlassMaterial>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: start;
  justify-content: center;
  z-index: 1000;
  border-radius: 0;
  border: none;

  overflow-y: auto;
}

.modal {
  /* padding: 2rem; */
}
</style>

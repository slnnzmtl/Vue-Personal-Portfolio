<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import { useModalService } from "@/composables";
import SIcon from "@/components/ui/SIcon.vue";

export default defineComponent({
  name: "ModalWindow",
  components: {
    GlassMaterial,
    SIcon,
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

    const onClose = () => {
      closeModal(props.name, null);
      emit("close", null);
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
    <button class="modal-close" @click="onClose">
      <SIcon name="CloseIcon" />
    </button>

    <div class="modal" @click="stopPropagation">
      <slot name="default" />
    </div>
  </GlassMaterial>
</template>

<style lang="scss" scoped>
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

.modal-close {
  position: absolute;
  top: 3rem;
  right: 3rem;
  background: none;
  border: none;
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s ease-in-out;
  }
}

.modal {
  /* padding: 2rem; */
}
</style>

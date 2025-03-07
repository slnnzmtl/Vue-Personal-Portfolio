<template>
  <Teleport to="body">
    <div v-for="modal in activeModals" :key="modal.name" class="modal-overlay">
      <component
        :is="modal.name"
        v-bind="modal.props"
        @close="closeModal(modal.name, $event)"
      />
    </div>
  </Teleport>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { useModalService } from "@/composables/useModal";

export default defineComponent({
  name: "ModalProvider",
  setup() {
    const { activeModals, closeModal } = useModalService();

    const toggleBodyScroll = (hasActiveModals: boolean) => {
      if (hasActiveModals) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    };

    watch(() => activeModals.length > 0, toggleBodyScroll, { immediate: true });

    return {
      activeModals,
      closeModal,
    };
  },
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
</style>

<script lang="ts" setup>
import { ModalComponent } from '@/modals/types';
import { Modal } from '@/components/ui';
import { TransitionGroup, provide, ref } from 'vue';

const modalsVisible = ref([]);

const openModal = (modal: ModalComponent) => {
  console.log(modal);
  modalsVisible.value = [...modalsVisible.value, modal];
};

const closeModal = (key: string) => {
  console.log({
    key,
    modalsVisible: modalsVisible.value,
  });
  modalsVisible.value = [
    ...modalsVisible.value.filter((modal) => modal.component !== key),
  ];
};

provide('openModal', openModal);
provide('closeModal', closeModal);
</script>

<template>
  <div>
    <slot />

    <TransitionGroup name="modal-transition" tag="div">
      <Modal
        v-for="modal in modalsVisible"
        :key="modal.component"
        @close-modal="closeModal(modal.component)"
      >
        <component
          :is="modal.component"
          v-bind="modal.props"
          @close-modal="closeModal(modal.component)"
        />
      </Modal>
    </TransitionGroup>
  </div>
</template>

<style scoped>
.modal-transition-enter-active,
.modal-transition-leave-active {
  transition: opacity 0.3s ease;
}

.modal-transition-enter-from,
.modal-transition-leave-to {
  opacity: 0;
}
</style>
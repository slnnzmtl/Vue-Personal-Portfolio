<script setup lang="ts">
import { Glass } from './';

const emit = defineEmits(['closeModal']);

const closeModal = () => {
  emit('closeModal');
};

const stopPropagation = (event: MouseEvent) => {
  event.stopPropagation();
};
</script>

<template>
  <div class="modal-overlay" @click="closeModal">
    <Glass class="modal" @click="stopPropagation">
      <slot name="default" @close-modal="closeModal" />
    </Glass>
  </div>
</template>

<style scoped>
.modal-overlay {
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  padding: 2rem;
}
</style>
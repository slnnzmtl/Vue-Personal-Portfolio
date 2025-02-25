<script setup lang="ts">
import Glass from './Glass.vue';
import { useModal } from '@composables';

const { isVisible, closeModal } = useModal();
</script>

<template>
  <Glass v-if="isVisible" class="modal" @click="closeModal">
    <slot></slot>
  </Glass>
</template>

<style scoped>
.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000; /* Ensure it appears above other content */
}
</style>
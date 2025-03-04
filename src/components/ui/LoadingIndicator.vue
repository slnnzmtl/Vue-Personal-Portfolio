<template>
  <Transition name="fade">
    <div v-if="isLoading" class="loading-indicator">
      <div class="loading-circle"></div>
    </div>
  </Transition>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LoadingIndicator",
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    start() {
      this.isLoading = true;
    },
    stop() {
      this.isLoading = false;
    },
  },
});
</script>

<style scoped>
.loading-indicator {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 9999;
}

.loading-circle {
  width: 50px;
  height: 50px;
  border: 5px solid #00eeff;
  border-top: 5px solid #0800ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

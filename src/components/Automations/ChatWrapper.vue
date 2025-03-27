<script lang="ts">
import { defineComponent, ref, onMounted, nextTick, onUnmounted } from "vue";
import ChatInterface from "./ChatInterface.vue";

export default defineComponent({
  name: "ChatWrapper",
  components: {
    ChatInterface,
  },
  props: {
    mode: {
      type: String,
      default: "toggle",
      validator: (value: string) => ["toggle", "static"].includes(value),
    },
    initialExpanded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const isExpanded = ref(props.initialExpanded);
    const chatWrapper = ref<HTMLElement | null>(null);

    const handleClickOutside = (event: MouseEvent) => {
      if (
        props.mode === "toggle" &&
        isExpanded.value &&
        chatWrapper.value &&
        !chatWrapper.value.contains(event.target as Node)
      ) {
        toggleChat();
      }
    };

    const toggleChat = () => {
      isExpanded.value = !isExpanded.value;
    };

    onMounted(() => {
      if (props.mode === "toggle") {
        document.addEventListener("click", handleClickOutside);
      }
    });

    onUnmounted(() => {
      if (props.mode === "toggle") {
        document.removeEventListener("click", handleClickOutside);
      }
    });

    return {
      isExpanded,
      chatWrapper,
      toggleChat,
    };
  },
});
</script>

<template>
  <div>
    <Transition name="fade">
      <div v-if="mode === 'toggle' && !isExpanded" class="fixed bottom-10 right-10 z-50">
        <SButton
          type="primary"
          class="rounded-full w-14 h-14 shadow-lg cursor-pointer"
          @click.stop="toggleChat"
        >
          <span class="text-4xl hover:text-5xl transition-all duration-300">💬</span>
        </SButton>
      </div>
    </Transition>

    <Transition name="slide-fade" v-if="mode === 'toggle'">
      <div
        v-show="isExpanded"
        ref="chatWrapper"
        class="fixed bottom-24 right-6 z-50 w-full max-w-md"
        @click.stop
      >
        <ChatInterface :is-expanded="isExpanded" @close="toggleChat" />
      </div>
    </Transition>

    <div v-else class="w-full max-w-2xl mx-auto">
      <ChatInterface :is-expanded="true" :is-static="true" />
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}

.slide-fade-enter-from {
  transform: translateY(20px);
  opacity: 0;
}

.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>

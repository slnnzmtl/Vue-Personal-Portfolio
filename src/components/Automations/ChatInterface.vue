<script lang="ts">
import { defineComponent, ref, onMounted, nextTick, onUnmounted } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import SButton from "@/components/ui/buttons/SButton.vue";
import InputField from "../ui/InputField.vue";
import TextareaField from "../ui/TextareaField.vue";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export default defineComponent({
  name: "ChatInterface",
  components: {
    GlassMaterial,
    SButton,
    InputField,
    TextareaField,
  },
  props: {
    isExpanded: {
      type: Boolean,
      default: false,
    },
    isStatic: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const messages = ref<Message[]>([]);
    const inputMessage = ref("");
    const isLoading = ref(false);
    const chatContainer = ref<HTMLElement | null>(null);
    const chatWrapper = ref<HTMLElement | null>(null);

    // Initial greeting message
    const initialMessage: Message = {
      id: "initial",
      content:
        "Hi! I'm here to help you with your marketing automation needs. What would you like to know?",
      role: "assistant",
      timestamp: new Date(),
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        props.isExpanded &&
        chatWrapper.value &&
        !chatWrapper.value.contains(event.target as Node)
      ) {
        closeChat();
      }
    };

    const scrollToBottom = async () => {
      await nextTick();
      if (chatContainer.value) {
        chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
      }
    };

    const closeChat = () => {
      emit("close");
    };

    const sendMessage = async () => {
      if (!inputMessage.value.trim() || isLoading.value) return;

      const userMessage: Message = {
        id: Date.now().toString(),
        content: inputMessage.value.trim(),
        role: "user",
        timestamp: new Date(),
      };

      messages.value.push(userMessage);
      inputMessage.value = "";
      isLoading.value = true;

      try {
        // TODO: Replace with actual API call to your LLM backend
        const response = await fetch("/api/chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: userMessage.content,
            history: messages.value,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to get response");
        }

        const data = await response.json();
        const assistantMessage: Message = {
          id: Date.now().toString(),
          content: data.response,
          role: "assistant",
          timestamp: new Date(),
        };

        messages.value.push(assistantMessage);
      } catch (error) {
        console.error("Error sending message:", error);
        // Add error message to chat
        messages.value.push({
          id: Date.now().toString(),
          content:
            "I apologize, but I'm having trouble processing your request. Please try again later.",
          role: "assistant",
          timestamp: new Date(),
        });
      } finally {
        isLoading.value = false;
      }
    };

    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
      }
    };

    onMounted(() => {
      messages.value.push(initialMessage);
      scrollToBottom();
      document.addEventListener("click", handleClickOutside);
    });

    onUnmounted(() => {
      document.removeEventListener("click", handleClickOutside);
    });

    return {
      messages,
      inputMessage,
      isLoading,
      chatContainer,
      chatWrapper,
      sendMessage,
      handleKeyPress,
      closeChat,
    };
  },
});
</script>

<template>
  <GlassMaterial class="p-6 relative shadow-xl" blur="20px">
    <div class="flex items-center justify-between mb-4">
      <h3 class="text-lg font-semibold">Chat Assistant</h3>
      <button
        v-if="!isStatic"
        @click.stop="closeChat"
        class="text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Chat Messages -->
    <div
      ref="chatContainer"
      class="h-[300px] overflow-y-auto space-y-4 mb-4 pr-2 scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent"
    >
      <div
        v-for="message in messages"
        :key="message.id"
        class="flex gap-4"
        :class="
          message.role === 'user' ? 'flex-row-reverse text-right' : 'flex-row text-left'
        "
      >
        <div
          class="w-8 h-8 rounded-full flex items-center justify-center"
          :class="message.role === 'user' ? 'bg-primary text-white' : 'bg-primary/10'"
        >
          {{ message.role === "user" ? "👤" : "🤖" }}
        </div>
        <div
          class="flex-1 rounded-lg"
          :class="message.role === 'user' ? 'bg-primary text-white' : 'bg-card'"
        >
          <p class="whitespace-pre-wrap">{{ message.content }}</p>
          <span class="text-xs opacity-70 mt-2 block">
            {{ message.timestamp.toLocaleTimeString() }}
          </span>
        </div>
      </div>
      <div v-if="isLoading" class="flex gap-4">
        <div class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
          🤖
        </div>
        <div class="flex-1 rounded-lg bg-card p-4">
          <div class="flex gap-2">
            <div class="w-2 h-2 rounded-full bg-primary/20 animate-bounce" />
            <div class="w-2 h-2 rounded-full bg-primary/20 animate-bounce delay-100" />
            <div class="w-2 h-2 rounded-full bg-primary/20 animate-bounce delay-200" />
          </div>
        </div>
      </div>
    </div>

    <!-- Input Area -->
    <div class="flex gap-3 items-center">
      <div class="flex-1">
        <TextareaField
          v-model="inputMessage"
          label="Type your message..."
          @keydown="handleKeyPress"
          :disabled="isLoading"
        />
      </div>
      <SButton
        variant="primary"
        class="px-6 h-max"
        @click="sendMessage"
        :disabled="isLoading || !inputMessage.trim()"
      >
        Send
      </SButton>
    </div>
  </GlassMaterial>
</template>

<style scoped>
.scrollbar-thin::-webkit-scrollbar {
  width: 6px;
}

.scrollbar-thin::-webkit-scrollbar-track {
  background: transparent;
}

.scrollbar-thin::-webkit-scrollbar-thumb {
  background-color: var(--primary);
  border-radius: 3px;
  opacity: 0.2;
}

/* Fade transition for the toggle button */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide and fade transition for the chat interface */
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

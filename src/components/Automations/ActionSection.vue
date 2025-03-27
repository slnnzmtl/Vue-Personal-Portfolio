<script lang="ts">
import { defineComponent } from "vue";
import ChatInterface from "./ChatInterface.vue";

export default defineComponent({
  name: "ActionSection",
  components: {
    ChatInterface,
  },
});
</script>

<template>
  <section class="bg-background relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        class="absolute -left-1/4 -bottom-1/4 h-96 w-96 rounded-full bg-primary-600/10 blur-3xl"
      />
    </div>

    <div class="container mx-auto px-4 relative">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Let's Start Your
          <span class="text-purple-600">Marketing Automation</span>
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Chat with our AI assistant to get personalized recommendations for your
          marketing automation needs.
        </p>
      </div>

      <!-- Chat Interface -->
      <div class="max-w-2xl mx-auto">
        <ChatInterface mode="static" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>

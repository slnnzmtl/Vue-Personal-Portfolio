<script lang="ts">
import SButton from "@/components/ui/buttons/SButton.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "HeroSection",
  components: {
    SButton,
  },
  setup() {
    const handleDemoRequest = () => {
      console.log("Demo requested");
    };

    return { handleDemoRequest };
  },
});
</script>

<template>
  <section
    class="relative w-full overflow-hidden bg-gradient-to-b from-primary-900/10 to-background"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-left justify-center text-center">
        <h1 class="mb-6 font-bold tracking-tight text-left">
          Supercharge your marketing with
          <span class="text-purple-600"> Intelligent Automation</span>
        </h1>

        <p class="mb-12 max-w-2xl text-lg text-left sm:text-xl">
          Personalized campaigns, optimized workflows, and flexible hosting: USA, Europe,
          or your own server.
        </p>

        <SButton
          size="lg"
          type="primary"
          class="w-max relative overflow-hidden px-4 py-3"
          @click="handleDemoRequest"
        >
          <span class="relative z-10">Request a personalized demo</span>
          <div
            class="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-primary-600 opacity-0 transition-opacity group-hover:opacity-100"
          />
        </SButton>
      </div>
    </div>

    <div class="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        class="absolute -right-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/20 blur-3xl"
      />
      <div
        class="absolute -left-1/4 -bottom-1/4 h-96 w-96 rounded-full bg-primary-600/20 blur-3xl"
      />
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}
</style>

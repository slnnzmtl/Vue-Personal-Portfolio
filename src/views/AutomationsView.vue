<template>
  <div class="automations-view mt-10 animate-fade-in">
    <div class="relative grid gap-30">
      <HeroSection
        class="max-w-[90vw] min-h-[70vh] lg:max-w-screen-xl mx-auto flex flex-col justify-center"
      />
      <FeatureSection class="max-w-[90vw] lg:max-w-screen-xl mx-auto" />
      <BenefitSection class="max-w-[100vw] w-full mx-auto" />
      <ActionSection class="max-w-[90vw] lg:max-w-screen-xl mx-auto" />
    </div>

    <ChatWrapper mode="toggle" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HeroSection from "@/components/Automations/HeroSection.vue";
import FeatureSection from "@/components/Automations/FeatureSection.vue";
import BenefitSection from "@/components/Automations/BenefitSection.vue";
import ActionSection from "@/components/Automations/ActionSection.vue";
import ChatInterface from "@/components/Automations/ChatInterface.vue";
import ChatWrapper from "@/components/Automations/ChatWrapper.vue";
export default defineComponent({
  name: "AutomationsView",
  components: {
    HeroSection,
    FeatureSection,
    BenefitSection,
    ActionSection,
    ChatInterface,
    ChatWrapper,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.automations-view {
  background-color: var(--background-color);
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: static;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.8s ease-out forwards;
}
</style>

<template>
  <div class="ai-analytics-view mt-10 animate-fade-in">
    <div class="relative grid gap-12">
      <AIHeroSection
        class="mt-[10vh] max-w-[90vw] min-h-[60vh] lg:max-w-screen-xl mx-auto flex flex-col justify-center"
      />
      <AIHowItWorksSection class="max-w-[90vw] lg:max-w-screen-xl mx-auto" />
      <AIWhatIsItSection class="max-w-[90vw] lg:max-w-screen-xl mx-auto" />
      <AITargetAudienceSection class="max-w-[90vw] lg:max-w-screen-xl mx-auto" />
      <AIWhyNowSection class="max-w-[100vw] w-full mx-auto" />
      <AIBenefitsSection class="max-w-[90vw] lg:max-w-screen-xl mx-auto" />
      <AIExampleReportSection class="max-w-[90vw] lg:max-w-screen-xl mx-auto" />
      <AIPricingSection class="max-w-[90vw] lg:max-w-screen-xl mx-auto" />
      <AIFAQSection class="max-w-[90vw] lg:max-w-screen-xl mx-auto" />
      <AIFinalCTASection class="max-w-[90vw] lg:max-w-screen-xl mx-auto" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AIHeroSection from "@/components/AIAnalytics/AIHeroSection.vue";
import AIHowItWorksSection from "@/components/AIAnalytics/AIHowItWorksSection.vue";
import AIWhatIsItSection from "@/components/AIAnalytics/AIWhatIsItSection.vue";
import AITargetAudienceSection from "@/components/AIAnalytics/AITargetAudienceSection.vue";
import AIWhyNowSection from "@/components/AIAnalytics/AIWhyNowSection.vue";
import AIBenefitsSection from "@/components/AIAnalytics/AIBenefitsSection.vue";
import AIExampleReportSection from "@/components/AIAnalytics/AIExampleReportSection.vue";
import AIPricingSection from "@/components/AIAnalytics/AIPricingSection.vue";
import AIFAQSection from "@/components/AIAnalytics/AIFAQSection.vue";
import AIFinalCTASection from "@/components/AIAnalytics/AIFinalCTASection.vue";

export default defineComponent({
  name: "AIAnalyticsView",
  components: {
    AIHeroSection,
    AIHowItWorksSection,
    AIWhatIsItSection,
    AITargetAudienceSection,
    AIWhyNowSection,
    AIBenefitsSection,
    AIExampleReportSection,
    AIPricingSection,
    AIFAQSection,
    AIFinalCTASection,
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.ai-analytics-view {
  background-color: var(--background-color);
  padding-top: 2rem;
  padding-bottom: 2rem;
  position: static;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
</style>

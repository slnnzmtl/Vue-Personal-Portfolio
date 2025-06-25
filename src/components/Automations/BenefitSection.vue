<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import SButton from "@/components/ui/buttons/SButton.vue";
import ScrollableContainer from "../ui/ScrollableContainer.vue";

export default defineComponent({
  name: "BenefitSection",
  components: {
    GlassMaterial,
    SButton,
    ScrollableContainer,
  },
  setup() {
    const benefits = [
      {
        title: "Increased Lead Generation",
        description:
          "Automate lead capture and nurturing to convert more prospects into customers.",
        icon: "📈",
        metric: "40%",
        metricLabel: "Higher Conversion Rate",
      },
      {
        title: "Improved Customer Engagement",
        description:
          "Deliver personalized experiences that keep customers coming back for more.",
        icon: "🤝",
        metric: "60%",
        metricLabel: "Better Retention",
      },
      {
        title: "Enhanced Campaign Performance",
        description:
          "Optimize your marketing campaigns with data-driven insights and automation.",
        icon: "🎯",
        metric: "3x",
        metricLabel: "Higher ROI",
      },
      {
        title: "Streamlined Workflows",
        description: "Reduce manual tasks and focus on strategic marketing initiatives.",
        icon: "⚡",
        metric: "70%",
        metricLabel: "Time Saved",
      },
      {
        title: "Data-Driven Insights",
        description:
          "Make informed decisions with comprehensive analytics and reporting.",
        icon: "📊",
        metric: "85%",
        metricLabel: "Better Decision Making",
      },
    ];

    return { benefits };
  },
});
</script>

<template>
  <section class="bg-background relative">
    <div class="container mx-auto px-4 relative">
      <div class="text-center mb-16">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Maximize ROI,
          <span class="text-purple-600">Minimize Effort</span>
        </h2>
        <p class="text-lg text-muted-foreground max-w-2xl mx-auto">
          Transform your marketing strategy with intelligent automation that delivers
          measurable results.
        </p>
      </div>

      <ScrollableContainer class="w-full">
        <div class="flex flex-nowrap gap-4">
          <GlassMaterial
            v-for="benefit in benefits"
            :key="benefit.title"
            class="p-6 group min-w-[250px] lg:min-w-auto"
          >
            <div class="flex flex-col gap-4 text-left h-full justify-between">
              <div>
                <div class="flex items-start gap-4 mb-6">
                  <span class="text-3xl">{{ benefit.icon }}</span>
                  <h3 class="text-xl">{{ benefit.title }}</h3>
                </div>
                <p class="text-md text-muted-foreground">{{ benefit.description }}</p>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-2xl font-bold text-primary">{{ benefit.metric }}</span>
                <span class="text-md text-muted-foreground">{{
                  benefit.metricLabel
                }}</span>
              </div>
            </div>
          </GlassMaterial>
        </div>
      </ScrollableContainer>

      <div class="text-center mt-10">
        <p class="text-lg text-muted-foreground mb-8">
          Ready to transform your marketing strategy?
        </p>
        <SButton size="lg" variant="primary" class="group px-8 py-6">
          <span class="relative z-10">Start Automating Today</span>
        </SButton>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;

  h3 {
    font-size: 1.2rem;
  }
}
</style>

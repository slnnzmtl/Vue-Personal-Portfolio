<script lang="ts">
import { defineComponent } from "vue";
import SButton from "@/components/ui/buttons/SButton.vue";
import HostingOptions from "./HostingOptions.vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import ScrollableContainer from "../ui/ScrollableContainer.vue";

export default defineComponent({
  name: "FeatureSection",
  components: {
    SButton,
    HostingOptions,
    GlassMaterial,
    ScrollableContainer,
  },
  setup() {
    const features = [
      {
        title: "Personalized Customer Journeys",
        description:
          "Create tailored experiences for different customer segments with dynamic content and automated workflows.",
        icon: "🎯",
      },
      {
        title: "Automated Email Marketing",
        description:
          "Streamline your email campaigns with smart automation, lead nurturing, and intelligent follow-ups.",
        icon: "📧",
      },
      {
        title: "Social Media Automation",
        description:
          "Schedule posts, manage interactions, and analyze performance across all your social channels.",
        icon: "📱",
      },
      {
        title: "Lead Scoring and Segmentation",
        description:
          "Identify and segment leads automatically for targeted campaigns and better conversion rates.",
        icon: "📊",
      },
    ];

    return { features };
  },
});
</script>

<template>
  <section class="bg-background">
    <div class="mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-6 px-4">
        Drive results with
        <span class="text-purple-600">Advanced Marketing Automation</span>
      </h2>

      <p class="text-muted-foreground text-lg text-center mb-12 px-4">
        Automate your marketing processes to save time, boost efficiency, and drive
        growth.
      </p>

      <ScrollableContainer>
        <div class="flex flex-nowrap gap-4">
          <GlassMaterial
            v-for="feature in features"
            :key="feature.title"
            class="group p-6 min-w-[250px] lg:min-w-auto text-left"
          >
            <div class="flex flex-nowrap gap-4 mb-6">
              <div class="text-4xl">{{ feature.icon }}</div>
              <h3>{{ feature.title }}</h3>
            </div>
            <p class="text-muted-foreground">{{ feature.description }}</p>
          </GlassMaterial>
        </div>
      </ScrollableContainer>

      <!-- <HostingOptions /> -->
    </div>
  </section>
</template>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
}

h3 {
  font-size: 1.2rem;
  margin: 0;
}

table {
  border-radius: 0.5rem;
  background: var(--card);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

th {
  font-weight: 600;
  color: var(--foreground);
}

td {
  color: var(--muted-foreground);
}
</style>

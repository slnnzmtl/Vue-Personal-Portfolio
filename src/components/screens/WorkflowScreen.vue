<template>
  <div class="workflow-screen py-16">
    <h2 class="text-left font-bold mb-10 px-6">My Workflow</h2>
    <p class="text-lg sm:text-xl mb-8 text-justify px-6">
      My structured approach drives project success through deep understanding of business
      needs, precise estimation, exceptional UI design, and delivery that exceeds
      expectations.
    </p>

    <ScrollableContainer>
      <div class="workflow-items flex flex-nowrap gap-4 py-4 px-6">
        <GlassMaterial
          v-for="(point, index) in workflowPoints"
          :key="index"
          class="workflow-item flex flex-col items-center p-3 bg-gray-800 rounded-lg min-w-[250px]"
        >
          <component :is="point.icon" />
          <h3 class="font-semibold mb-2">{{ point.title }}</h3>
          <p class="text-sm text-center text-gray-400">
            {{ point.description }}
          </p>
        </GlassMaterial>
      </div>
    </ScrollableContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import UnderstandBusinessIcon from "@/assets/icons/UnderstandBusinessIcon.vue";
import EstimateProjectIcon from "@/assets/icons/EstimateProjectIcon.vue";
import ImplementUiIcon from "@/assets/icons/ImplementUiIcon.vue";
import BestExperienceIcon from "@/assets/icons/BestExperienceIcon.vue";
import ScrollableContainer from "@/components/ui/ScrollableContainer.vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";

interface WorkflowPoint {
  icon: any;
  title: string;
  description: string;
}

export default defineComponent({
  name: "WorkflowScreen",
  components: {
    UnderstandBusinessIcon,
    EstimateProjectIcon,
    ImplementUiIcon,
    BestExperienceIcon,
    ScrollableContainer,
    GlassMaterial,
  },
  setup() {
    const workflowPoints = computed<WorkflowPoint[]>(() => [
      {
        icon: UnderstandBusinessIcon,
        title: "Understand Business Needs",
        description: "Translating business goals into actionable technical requirements",
      },
      {
        icon: EstimateProjectIcon,
        title: "Estimate a Project",
        description: "Delivering realistic timelines with transparent resource planning",
      },
      {
        icon: ImplementUiIcon,
        title: "Focus on UX",
        description: "Building intuitive interfaces that users love to interact with",
      },
      {
        icon: BestExperienceIcon,
        title: "Achieve the Best Experience",
        description: "Refining solutions to exceed client and user expectations",
      },
    ]);

    return {
      workflowPoints,
    };
  },
});
</script>

<style scoped>
.scrollable-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollable-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.workflow-items {
  padding-bottom: 20px;
}

.workflow-item {
  max-width: 25%;
  width: 100%;
  transition: transform 0.3s ease;
}

.workflow-item:hover {
  transform: translateY(-10px);
}

@media (min-width: 1024px) {
  .workflow-items {
    justify-content: center;
  }
}
</style>

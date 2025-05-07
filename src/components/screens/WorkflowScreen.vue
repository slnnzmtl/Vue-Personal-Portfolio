<template>
  <div class="workflow-screen py-12">
    <h2 class="text-left font-bold mb-10 px-6">How I deliver projects</h2>
    <p class="text-lg sm:text-xl mb-8 text-justify px-6 text-white-800">
      My structured approach drives project success through deep understanding of business
      needs, precise estimation, exceptional UI design, and delivery that exceeds
      expectations.
    </p>

    <ScrollableContainer>
      <div class="workflow-items flex flex-nowrap gap-4 pt-4 px-6">
        <button
          v-for="(point, index) in workflowPoints"
          :key="index"
          class="w-full max-w-[25%] min-w-[250px]"
          @click="handleModalOpen(point.id)"
        >
          <GlassMaterial
            class="workflow-item flex flex-col items-center p-3 rounded-lg w-full h-full"
          >
            <SIcon :name="point.icon" class="max-w-16" />
            <h3 class="font-semibold mb-2">{{ point.title }}</h3>
            <p class="text-sm text-center text-gray-400">
              {{ point.description }}
            </p>
          </GlassMaterial>
        </button>
      </div>
    </ScrollableContainer>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import ScrollableContainer from "@/components/ui/ScrollableContainer.vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import SButton from "../ui/buttons/SButton.vue";
import SIcon from "../ui/SIcon.vue";
import { useModalService } from "@/composables/useModal";
import { ModalKey } from "@/modals/types";

interface WorkflowPoint {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export default defineComponent({
  name: "WorkflowScreen",
  components: {
    ScrollableContainer,
    GlassMaterial,
    SButton,
    SIcon,
  },
  setup() {
    const { openModal } = useModalService();

    const workflowPoints = computed<WorkflowPoint[]>(() => [
      {
        id: "understand-business-needs",
        icon: "UnderstandBusinessIcon",
        title: "Understand Business Needs",
        description: "Translating business goals into actionable technical requirements",
      },
      {
        id: "estimate-a-project",
        icon: "EstimateProjectIcon",
        title: "Estimate a Project",
        description: "Delivering realistic timelines with transparent resource planning",
      },
      {
        id: "focus-on-ux",
        icon: "ImplementUiIcon",
        title: "Focus on UX",
        description: "Building intuitive interfaces that users love to interact with",
      },
      {
        id: "achieve-best-experience",
        icon: "BestExperienceIcon",
        title: "Achieve the Best Experience",
        description: "Refining solutions to exceed client and user expectations",
      },
    ]);

    const handleModalOpen = async (id: string) => {
      await openModal(ModalKey.SkillCard, {
        id,
      });
    };

    return {
      workflowPoints,
      handleModalOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
.scrollable-container {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.scrollable-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.workflow-item {
  transition: transform 0.3s ease;
  animation: none !important;
  background: rgba(214, 109, 255, 0.1);

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
  }
}

@media (min-width: 1024px) {
  .workflow-items {
    justify-content: center;
  }
}
</style>

<template>
  <div class="flex flex-col gap-6 text-justify">
    <h2 class="font-bold px-6">{{ t("workflowScreen.title") }}</h2>
    <p class="text-lg sm:text-xl px-6 text-white-800">
      {{ t("workflowScreen.description") }}
    </p>

    <ScrollableContainer>
      <div class="workflow-items flex flex-nowrap gap-4 sm:pt-4 px-6 xl:px-12">
        <button
          v-for="(point, index) in workflowPoints"
          :key="index"
          class="workflow-item w-full max-w-[25%] min-w-[250px] flex-shrink-0 cursor-pointer"
          @click="handleModalOpen(point.id)"
        >
          <GlassMaterial
            class="workflow-item-container flex flex-col items-center p-3 rounded-lg w-full h-full"
          >
            <SIcon :name="point.icon" class="max-w-16 cursor-pointer" />
            <h3 class="font-semibold mb-4">{{ point.title }}</h3>
            <p class="text-sm text-center text-gray-400 mb-4">
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
import { IconName, ICON_NAMES } from "@/types/icons";
import { useTranslation } from "@/composables/useTranslation";

interface WorkflowPoint {
  id: string;
  icon: IconName;
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
    const { t } = useTranslation();

    const workflowPoints = computed<WorkflowPoint[]>(() => [
      {
        id: "understand-business-needs",
        icon: ICON_NAMES.UNDERSTAND_BUSINESS,
        title: t("workflowScreen.points.understandBusinessNeeds.title"),
        description: t("workflowScreen.points.understandBusinessNeeds.description"),
      },
      {
        id: "estimate-a-project",
        icon: ICON_NAMES.ESTIMATE_PROJECT,
        title: t("workflowScreen.points.estimateProject.title"),
        description: t("workflowScreen.points.estimateProject.description"),
      },
      {
        id: "focus-on-ux",
        icon: ICON_NAMES.IMPLEMENT_UI,
        title: t("workflowScreen.points.focusOnUX.title"),
        description: t("workflowScreen.points.focusOnUX.description"),
      },
      {
        id: "achieve-best-experience",
        icon: ICON_NAMES.BEST_EXPERIENCE,
        title: t("workflowScreen.points.achieveBestExperience.title"),
        description: t("workflowScreen.points.achieveBestExperience.description"),
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
      t,
    };
  },
});
</script>

<style lang="scss" scoped>
h3 {
  font-size: 1.2rem;
  line-height: 1.5;
}

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

  &-container {
    background: rgba(214, 109, 255, 0.1);
  }

  @media (min-width: 1024px) {
    &:hover {
      transform: translateY(-10px);
      cursor: pointer;

      * {
        cursor: pointer;
      }
    }
  }
}

@media (min-width: 1268px) {
  .workflow-items {
    justify-content: center;
  }
}
</style>

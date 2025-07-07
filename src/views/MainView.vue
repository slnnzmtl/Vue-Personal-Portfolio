<template>
  <div class="main-view flex flex-col gap-24 w-full">
    <FaceScreen class="mt-32 max-w-screen-2xl w-full mx-auto" />
    <WorkflowScreen class="max-w-screen-2xl w-full mx-auto" />
    <ServicesScreen class="max-w-screen-2xl w-full mx-auto px-6" />
    <HireMeButton @click="handleConsultationForm" class="w-max mx-auto" />

    <SkillsScreen class="max-w-screen-2xl w-full mx-auto" />

    <div class="max-w-screen-2xl mx-auto">
      <ProjectsScreen />
    </div>

    <HireScreen
      v-if="showHireScreen"
      class="max-w-screen-2xl w-full mx-auto"
      id="hire-screen"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, defineAsyncComponent } from "vue";
import FaceScreen from "@/components/screens/FaceScreen.vue";
import { useProjectsStore } from "@/stores/projectsStore";
import WorkflowScreen from "@/components/screens/WorkflowScreen.vue";
import SkillsScreen from "@/components/screens/SkillsScreen.vue";
import ServicesScreen from "@/components/screens/ServicesScreen.vue";
import HireMeButton from "@/components/ui/buttons/HireMeButton.vue";
import { useConsultationService } from "@/composables/useAIAnalyticsConsultation";
import { useModalService } from "@/composables";
import { ModalKey } from "@/modals/types";

const ProjectsScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/ProjectsScreen.vue"),
});

const HireScreen = defineAsyncComponent(
  () => import("@/components/screens/HireScreen.vue")
);

export default defineComponent({
  name: "MainView",

  components: {
    FaceScreen,
    WorkflowScreen,
    SkillsScreen,
    ProjectsScreen,
    HireScreen,
    ServicesScreen,
    HireMeButton,
  },

  setup() {
    const { openModal } = useModalService();

    const projectsStore = useProjectsStore();
    const showHireScreen = ref(false);

    const loadProjects = async () => {
      await projectsStore.fetchProjects();
    };

    const handleConsultationForm = () => {
      openModal(ModalKey.ConsultationForm);
    };

    onMounted(() => {
      loadProjects();

      setTimeout(() => {
        showHireScreen.value = true;
      }, 100);
    });

    return {
      showHireScreen,
      handleConsultationForm,
    };
  },
});
</script>

<style scoped>
.main-view {
  position: relative;
  z-index: 1;
}
</style>

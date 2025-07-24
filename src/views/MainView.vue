<template>
  <div class="main-view flex flex-col gap-24 w-full">
    <FaceScreen class="mt-30 max-w-screen-2xl w-full mx-auto" />
    <ProjectsScreen class="max-w-screen-2xl mx-auto animate-fade-in" />
    <WorkflowScreen
      v-if="showWorkflowScreen"
      class="max-w-screen-2xl w-full mx-auto animate-fade-in"
    />

    <HireMeButton
      v-if="showWorkflowScreen"
      @click="handleConsultationForm"
      class="w-max mx-auto animate-fade-in"
    />

    <SkillsScreen
      v-if="showSkillsScreen"
      class="max-w-screen-2xl w-full mx-auto animate-fade-in"
    />

    <HireScreen
      v-if="showHireScreen"
      class="max-w-screen-2xl w-full mx-auto animate-fade-in"
      id="hire-screen "
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, defineAsyncComponent } from "vue";
import FaceScreen from "@/components/screens/FaceScreen.vue";
import { useProjectsStore } from "@/stores/projectsStore";
import { useModalService } from "@/composables";
import { ModalKey } from "@/modals/types";

const ProjectsScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/ProjectsScreen.vue"),
});

const HireScreen = defineAsyncComponent(
  () => import("@/components/screens/HireScreen.vue")
);

const SkillsScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/SkillsScreen.vue"),
});

const WorkflowScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/WorkflowScreen.vue"),
});

const HireMeButton = defineAsyncComponent({
  loader: () => import("@/components/ui/buttons/HireMeButton.vue"),
});

export default defineComponent({
  name: "MainView",

  components: {
    FaceScreen,
    WorkflowScreen,
    SkillsScreen,
    ProjectsScreen,
    HireScreen,
    HireMeButton,
  },

  setup() {
    const { openModal } = useModalService();

    const projectsStore = useProjectsStore();
    const showHireScreen = ref(false);
    const showWorkflowScreen = ref(false);
    const showSkillsScreen = ref(false);

    const loadProjects = async () => {
      await projectsStore.fetchProjects();
    };

    const handleConsultationForm = () => {
      openModal(ModalKey.ConsultationForm);
    };

    onMounted(() => {
      loadProjects();

      setTimeout(() => {
        showWorkflowScreen.value = true;
      }, 500);

      setTimeout(() => {
        showSkillsScreen.value = true;
      }, 1000);

      setTimeout(() => {
        showHireScreen.value = true;
      }, 1000);
    });

    return {
      showHireScreen,
      showWorkflowScreen,
      showSkillsScreen,
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

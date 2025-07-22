<template>
  <div class="main-view flex flex-col gap-24 w-full">
    <FaceScreen class="mt-30 max-w-screen-2xl w-full mx-auto" />
    <ProjectsScreen class="max-w-screen-2xl mx-auto" />
    <WorkflowScreen class="max-w-screen-2xl w-full mx-auto" />

    <HireMeButton @click="handleConsultationForm" class="w-max mx-auto" />

    <SkillsScreen class="max-w-screen-2xl w-full mx-auto" />

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

<template>
  <div class="main-view flex flex-col w-full">
    <FaceScreen class="max-w-screen-2xl w-full mx-auto" />
    <WorkflowScreen class="max-w-screen-2xl w-full mx-auto" />
    <SkillsScreen class="max-w-screen-2xl w-full mx-auto" />

    <div class="max-w-screen-2xl mx-auto">
      <ProjectsScreen />
    </div>

    <HireScreen class="max-w-screen-2xl w-full mx-auto" id="hire-screen" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, defineAsyncComponent } from "vue";
import FaceScreen from "@/components/screens/FaceScreen.vue";
import { useProjectsStore } from "@/stores/projectsStore";
import WorkflowScreen from "@/components/screens/WorkflowScreen.vue";
import SkillsScreen from "@/components/screens/SkillsScreen.vue";

const ProjectsScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/ProjectsScreen.vue"),
});

const HireScreen = defineAsyncComponent(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import("@/components/screens/HireScreen.vue"));
    }, 1000);
  });
});

export default defineComponent({
  name: "MainView",

  components: {
    FaceScreen,
    WorkflowScreen,
    SkillsScreen,
    ProjectsScreen,
    HireScreen,
  },

  setup() {
    const projectsStore = useProjectsStore();

    const loadProjects = async () => {
      await projectsStore.fetchProjects();
    };

    onMounted(() => {
      loadProjects();
    });

    return {};
  },
});
</script>

<style scoped>
.main-view {
  position: relative;
  z-index: 1;
}
</style>

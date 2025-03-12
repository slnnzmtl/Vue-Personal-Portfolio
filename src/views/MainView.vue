<template>
  <div class="main-view flex flex-col w-full">
    <FaceScreen class="max-w-screen-2xl w-full mx-auto" />
    <!-- <AboutMeScreen class="max-w-screen-2xl w-full mx-auto" />\ -->
    <WorkflowScreen class="max-w-screen-2xl w-full mx-auto" />
    <SkillsScreen class="max-w-screen-2xl w-full mx-auto" />

    <div class="max-w-screen-2xl mx-auto">
      <ProjectsScreen id="projects-screen" />
    </div>

    <HireScreen class="max-w-screen-2xl w-full mx-auto" id="hire-screen" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, defineAsyncComponent } from "vue";
import FaceScreen from "@/components/screens/FaceScreen.vue";
import { useProjectsStore } from "@/stores/projectsStore";
import LoadingIndicator from "@/components/ui/LoadingIndicator.vue";

const WorkflowScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/WorkflowScreen.vue"),
  suspensible: true,
});

const SkillsScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/SkillsScreen.vue"),
  timeout: 3000,
  delay: 1000,
  suspensible: true,
});

const ProjectsScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/ProjectsScreen.vue"),
  timeout: 3000,
  delay: 1000,
  suspensible: true,
});

const HireScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/HireScreen.vue"),
  timeout: 3000,
  delay: 1000,
  suspensible: true,
});

const AboutMeScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/AboutMeScreen.vue"),
  suspensible: true,
});

export default defineComponent({
  name: "MainView",

  components: {
    FaceScreen,
    WorkflowScreen,
    SkillsScreen,
    ProjectsScreen,
    HireScreen,
    AboutMeScreen,
  },

  setup() {
    const loadingIndicator = ref<InstanceType<typeof LoadingIndicator> | null>(null);

    const projectsStore = useProjectsStore();

    const loadProjects = async () => {
      await projectsStore.fetchProjects();
      loadingIndicator.value?.stop();
    };

    onMounted(() => {
      setTimeout(() => {
        loadProjects();
      }, 1000);

      loadingIndicator.value?.start();
    });

    return {
      loadingIndicator,
    };
  },
});
</script>

<style scoped>
.loading-placeholder {
  min-height: 200px;
  background: linear-gradient(90deg, #1a1a1a 0%, #2a2a2a 50%, #1a1a1a 100%);
  background-size: 200% 100%;
  animation: loading 1.5s infinite;
}

.main-view {
  position: relative;
  z-index: 1;
}

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>

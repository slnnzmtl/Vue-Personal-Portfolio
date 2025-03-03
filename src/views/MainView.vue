<template>
  <div class="main-view flex flex-col w-full">
    <FaceScreen class="max-w-screen-2xl w-full mx-auto" />
    <SkillsScreen class="max-w-screen-2xl w-full mx-auto" />

    <div ref="projectsRef" class="max-w-screen-2xl mx-auto">
      <Suspense v-if="shouldLoadProjects">
        <template #default>
          <ProjectsScreen id="projects-screen" />
        </template>
        <template #fallback>
          <div class="loading-placeholder"></div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, defineAsyncComponent } from "vue";
import { SkillsScreen, FaceScreen } from "@/components/screens";

const ProjectsScreen = defineAsyncComponent({
  loader: () => import("@/components/screens/ProjectsScreen.vue"),
  suspensible: true,
});

export default defineComponent({
  name: "MainView",

  components: {
    FaceScreen,
    SkillsScreen,
    ProjectsScreen,
  },

  setup() {
    const faceRef = ref<HTMLElement | null>(null);
    const skillsRef = ref<HTMLElement | null>(null);
    const projectsRef = ref<HTMLElement | null>(null);

    const shouldLoadFace = ref(true); // Load immediately since it's above the fold
    const shouldLoadSkills = ref(false);
    const shouldLoadProjects = ref(false);

    onMounted(() => {
      const observerOptions = {
        root: null,
        rootMargin: "50px",
        threshold: 0,
      };

      const projectsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          shouldLoadProjects.value = true;
          projectsObserver.disconnect();
        }
      }, observerOptions);

      if (projectsRef.value) projectsObserver.observe(projectsRef.value);
    });

    return {
      faceRef,
      skillsRef,
      projectsRef,
      shouldLoadFace,
      shouldLoadSkills,
      shouldLoadProjects,
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

@keyframes loading {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}
</style>

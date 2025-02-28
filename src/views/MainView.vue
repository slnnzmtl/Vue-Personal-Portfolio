<template>
  <div class="main-view">
    <div ref="faceRef">
      <Suspense v-if="shouldLoadFace">
        <template #default>
          <AsyncFaceScreen />
        </template>
        <template #fallback>
          <div class="loading-placeholder"></div>
        </template>
      </Suspense>
    </div>

    <div ref="skillsRef">
      <Suspense v-if="shouldLoadSkills">
        <template #default>
          <AsyncSkillsScreen id="skills-screen" />
        </template>
        <template #fallback>
          <div class="loading-placeholder"></div>
        </template>
      </Suspense>
    </div>

    <div ref="projectsRef">
      <Suspense v-if="shouldLoadProjects">
        <template #default>
          <AsyncProjectsScreen id="projects-screen" />
        </template>
        <template #fallback>
          <div class="loading-placeholder"></div>
        </template>
      </Suspense>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { defineAsyncComponent } from "vue";

const faceRef = ref<HTMLElement | null>(null);
const skillsRef = ref<HTMLElement | null>(null);
const projectsRef = ref<HTMLElement | null>(null);

const shouldLoadFace = ref(true); // Load immediately since it's above the fold
const shouldLoadSkills = ref(false);
const shouldLoadProjects = ref(false);

// Consistent naming and loading strategy for all components
const AsyncFaceScreen = defineAsyncComponent({
  loader: () => import("@/components/FaceScreen/FaceScreen.vue"),
  delay: 200,
  timeout: 3000,
  suspensible: true,
});

const AsyncSkillsScreen = defineAsyncComponent({
  loader: () => import("@/components/SkillsScreen/SkillsScreen.vue"),
  delay: 200,
  timeout: 3000,
  suspensible: true,
});

const AsyncProjectsScreen = defineAsyncComponent({
  loader: () => import("@/components/ProjectsScreen/ProjectsScreen.vue"),
  delay: 200,
  timeout: 3000,
  suspensible: true,
});

onMounted(() => {
  const observerOptions = {
    root: null,
    rootMargin: "50px",
    threshold: 0,
  };

  const skillsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      shouldLoadSkills.value = true;
      skillsObserver.disconnect();
    }
  }, observerOptions);

  const projectsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      shouldLoadProjects.value = true;
      projectsObserver.disconnect();
    }
  }, observerOptions);

  if (skillsRef.value) skillsObserver.observe(skillsRef.value);
  if (projectsRef.value) projectsObserver.observe(projectsRef.value);
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

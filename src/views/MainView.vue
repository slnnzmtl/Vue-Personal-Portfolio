<template>
  <div class="main-view">
    <FaceScreen />
    <SkillsScreen id="skills-screen" />
    <ProjectsScreen id="projects-screen" />
  </div>
</template>

<script lang="ts">
import { FaceScreen, SkillsScreen, ProjectsScreen } from "@/components";

export default {
  name: "MainView",
  components: {
    FaceScreen,
    SkillsScreen,
    ProjectsScreen,
  },
};
</script>

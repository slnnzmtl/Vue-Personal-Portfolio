<template>
  <div class="main-view mt-20">
    <FaceScreen class="max-w-screen-xl mx-auto" />
    <SkillsScreen class="max-w-screen-xl mx-auto" id="skills-screen" />
    <ProjectsScreen class="max-w-screen-xl mx-auto" id="projects-screen" />
  </div>
</template>

<script setup lang="ts">
import { FaceScreen, SkillsScreen, ProjectsScreen } from '@components';
</script> 
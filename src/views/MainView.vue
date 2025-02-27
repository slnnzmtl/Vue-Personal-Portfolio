<template>
  <div class="main-view">
    <FaceScreen />
    <SkillsScreen id="skills-screen" />
    <ProjectsScreen id="projects-screen" />
  </div>
</template>

<script setup lang="ts">
import { FaceScreen, SkillsScreen, ProjectsScreen } from '@/components';
</script> 
<script lang="ts" setup>
import ProjectCard from './ProjectCard.vue'
</script>

<template>
  <div class="projects-screen h-[100vh]">
    <h1 class="projects-screen__title">Projects</h1>
    <div class="projects-screen__cards">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects-screen {
  &__title {
    text-align: center;
    margin-bottom: 40px;
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
}
</style>
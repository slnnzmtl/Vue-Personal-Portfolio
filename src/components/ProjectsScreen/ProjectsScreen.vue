<script lang="ts" setup>
import { ProjectViewer } from '../ProjectViewer'
</script>

<template>
  <div class="projects-screen">
    <p class="text-xl sm:text-4xl font-bold mb-8">
      Projects
    </p>
    <p class="text-lg sm:text-xl mb-16">
      Here, you'll find projects I've built or contributed to. Use the filters below to explore projects based on the tech stack you're interested in.
    </p>
    <ProjectViewer />
  </div>
</template>

<style lang="scss" scoped>
.projects-screen {
  padding: 4rem 2rem;
  text-align: left;
  
  &__cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
  }
}
</style>
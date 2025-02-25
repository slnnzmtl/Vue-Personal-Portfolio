<script lang="ts" setup>
import { ProjectViewer } from '../ProjectViewer'
</script>

<template>
  <div class="projects-screen">
    <p class="text-xl sm:text-4xl font-bold mb-16">
      Projects
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
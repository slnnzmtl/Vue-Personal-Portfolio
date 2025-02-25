<template>
  <section class="skills-screen">
    <p class="text-3xl sm:text-4xl font-bold mb-8">Technology stack</p>
    <p class="text-lg sm:text-xl mb-16">I work with many technologies, covering every detail of web development.</p>

    <div class="flex gap-4 sm:max-h-[600px] justify-between w-full">
      <SkillCard title="Core">
        <ul>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Programming concepts</li>
          <li>Testing (Jest/Enzyme)</li>
          <li>Webpack, Git Flow</li>
          <li>Docker</li>
        </ul>
      </SkillCard>

      <SkillCard title="Front-end">
        <ul>
          <li>React / Vue</li>
          <li>React Native</li>
          <li>Redux / Vuex / </li>
          <li>MobX / Pinia</li>
          <li>Next.js / Nuxt.js</li>
          <li>MaterialUI</li>
          <li>TailwindCSS</li>
          <li>Bootstrap</li>
          <li>Chart.js</li>
        </ul>
      </SkillCard>

      <SkillCard title="Back-end">
        <ul>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>AWS</li>
          <li>Docker</li>
          <li>Kubernetes</li>
        </ul>
      </SkillCard>

      <SkillCard title="Databases">
        <ul>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
          <li>Firebase</li>
          <li>Redis</li>
        </ul>
      </SkillCard>

      <SkillCard title="DevOps">
        <ul>
          <li>Docker</li>
          <li>k8s</li>
          <li>Github Actions</li>
          <li>AWS</li>
        </ul>
      </SkillCard>
    </div>
  </section>
</template>

<script setup lang="ts">
import { SkillCard } from '@components';
</script>

<style scoped lang="scss">
.skills-screen {
  padding: 4rem 2rem;
  text-align: left;
}

.skill-item {
  flex: 1;
  min-width: 250px;
}
</style> 
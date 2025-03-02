<template>
  <div class="skills-container">
    <div class="px-8">
      <h2 class="mb-8">Technology stack</h2>

      <p class="text-lg sm:text-xl mb-8">
        I work with many technologies, covering every detail of web development.
      </p>
    </div>

    <div
      ref="scrollContainer"
      class="flex flex-row flex-nowrap gap-4 overflow-x-auto overflow-y-hidden px-8 py-4 scroll-smooth"
    >
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
          <li>Redux / Vuex /</li>
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
  </div>
</template>

<script lang="ts">
import { SkillCard } from "@/components/SkillCard";

export default {
  name: "SkillsScreen",
  components: {
    SkillCard,
  },
};
</script>

<style lang="scss" scoped>
.skills-container {
  width: 100%;
  overflow-x: hidden;
  position: relative;
  text-align: left;

  & > div {
    @extend %scrollbar-tidy;
  }

  @keyframes pulse {
    0% {
      transform: translateY(-50%) scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1);
    }

    70% {
      transform: translateY(-50%) scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }

    100% {
      transform: translateY(-50%) scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
}
</style>

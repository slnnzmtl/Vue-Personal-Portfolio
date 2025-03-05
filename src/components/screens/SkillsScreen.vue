<template>
  <div class="skills-container">
    <div class="px-6">
      <h2 class="mb-8">Technology stack</h2>

      <p class="text-lg sm:text-xl mb-8 text-justify text-gray-500">
        I work with many technologies, covering every detail of web development.
      </p>
    </div>

    <ScrollableContainer>
      <div class="flex gap-4 w-full justify-between flex-nowrap px-6">
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
    </ScrollableContainer>
  </div>
</template>

<script lang="ts">
import SkillCard from "@/components/SkillCard/SkillCard.vue";
import ScrollableContainer from "@/components/ui/ScrollableContainer.vue";
export default {
  name: "SkillsScreen",
  components: {
    SkillCard,
    ScrollableContainer,
  },
};
</script>

<style lang="scss" scoped>
.skills-container {
  width: 100%;
  position: relative;
  text-align: left;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import ScrollableContainer from "@/components/ui/ScrollableContainer.vue";

export default defineComponent({
  name: "AboutMeScreen",
  components: {
    GlassMaterial,
    ScrollableContainer,
  },
  setup() {
    const experiences = [
      {
        title: "Full-Stack Development",
        description:
          "Over 5 years of experience building complex web applications with React, Vue, Node.js, and various databases.",
      },
      {
        title: "Technical Leadership",
        description:
          "Led development teams in implementing best practices, code reviews, and architectural decisions.",
      },
      {
        title: "Problem Solving",
        description:
          "Strong analytical skills with a focus on finding elegant solutions to complex technical challenges.",
      },
      {
        title: "Continuous Learning",
        description:
          "Committed to staying current with emerging technologies and industry trends.",
      },
    ];

    return {
      experiences,
    };
  },
});
</script>

<template>
  <div class="about-me-screen py-12 px-6">
    <div class="flex flex-nowrap justify-between gap-6">
      <div class="about-description w-1/3 text-left">
        <h2 class="font-bold mb-10">About Me</h2>
        <p class="text-lg sm:text-xl text-gray-400 mb-4">
          I'm a passionate full-stack developer with expertise in modern web technologies.
          My journey in tech began with a deep curiosity about how digital products work,
          which evolved into a career focused on creating exceptional user experiences.
        </p>
      </div>

      <div class="w-2/3 justify-end flex flex-wrap gap-3">
        <GlassMaterial
          v-for="(exp, index) in experiences"
          :key="index"
          class="experience-item flex flex-col p-6 min-w-[250px] lg:w-[25%]"
        >
          <h4 class="text-xl font-medium mb-3">{{ exp.title }}</h4>
          <p class="text-sm text-gray-400">
            {{ exp.description }}
          </p>
        </GlassMaterial>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about-me-screen {
  display: flex;

  .about-me-content {
    width: 100%;
    height: 100%;
  }

  .experience-item {
    max-width: 400px;
    width: 100%;
    transition: transform 0.3s ease;

    @media (min-width: 1024px) {
      &:hover {
        transform: translateY(-10px);
      }
    }
  }

  @media (max-width: 768px) {
    .experience-items {
      // padding-bottom: 1rem;
    }
  }
}
</style>

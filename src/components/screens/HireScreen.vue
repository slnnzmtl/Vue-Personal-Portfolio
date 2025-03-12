<script lang="ts">
import { defineComponent } from "vue";
import DownloadResume from "@/components/ui/buttons/DownloadResume.vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";

export default defineComponent({
  name: "HireScreen",
  components: {
    DownloadResume,
    GlassMaterial,
    SocialLinks,
  },
});
</script>

<template>
  <div class="hire-screen py-20 px-4">
    <div class="hire-content">
      <h2 class="font-bold mb-6">Ready to Work Together?</h2>

      <div class="hire-description mb-10">
        <p class="text-lg text-gray-400 mb-4">
          I'm currently open to new opportunities and collaborations. If you're looking
          for a developer with a strong background, let's connect!
        </p>
        <p class="text-lg text-gray-400">
          Whether you need a full-stack developer for your team or have a project in mind,
          I'd love to discuss how we can work together to create something amazing.
        </p>
      </div>

      <GlassMaterial class="p-4 mb-6">
        <SocialLinks />
      </GlassMaterial>

      <div class="resume-section min-w-full relative">
        <DownloadResume
          title="Download my CV to learn more about my experience and skills:"
          buttonText="Download PDF"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hire-screen {
  display: flex;
  justify-content: center;
  min-height: 600px;

  .hire-content {
    max-width: 800px;
    width: 100%;
  }

  .social-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    padding-bottom: 1rem;
  }

  .resume-section {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    justify-content: center;
  }
}
</style>

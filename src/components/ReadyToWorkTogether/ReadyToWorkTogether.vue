<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import DownloadResume from "@/components/ui/buttons/DownloadResume.vue";
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";

export default defineComponent({
  name: "ReadyToWorkTogether",
  components: {
    DownloadResume,
    GlassMaterial,
    SocialLinks,
  },
  props: {
    title: {
      type: String,
      default: "Ready to Work Together?",
    },
    showContacts: {
      type: Boolean,
      default: true,
    },
  },
});
</script>

<template>
  <div class="hire-content">
    <h2 class="title text-6xl font-bold mb-8">
      <slot name="title"> Ready to Work Together? </slot>
    </h2>

    <div class="mb-10">
      <p class="text-lg text-white-800 mb-4">
        <slot name="content">
          I'm currently open to new opportunities and collaborations. If you're looking
          for a developer with a strong background, let's connect!
        </slot>
      </p>
    </div>

    <GlassMaterial v-if="showContacts" class="p-4 mb-6">
      <SocialLinks />
    </GlassMaterial>

    <div class="pt-6" v-if="$slots.default">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hire-content {
  max-width: 800px;
  width: 100%;
}

.resume-section {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  justify-content: center;
}
</style>

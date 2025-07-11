<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import DownloadResume from "@/components/ui/buttons/DownloadResume.vue";
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";
import { useTranslation } from "@/composables/useTranslation";

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
  setup() {
    const { t } = useTranslation();

    return {
      t,
    };
  },
});
</script>

<template>
  <div class="hire-content">
    <h2 class="title text-6xl font-bold mb-8">
      <slot name="title"> {{ t("readyToWorkTogether.title") }} </slot>
    </h2>

    <div class="mb-10">
      <p class="text-lg text-white-800 mb-4">
        <slot name="content">
          {{ t("readyToWorkTogether.content") }}
        </slot>
      </p>
    </div>

    <GlassMaterial v-if="showContacts" class="p-4 mb-6">
      <SocialLinks />
    </GlassMaterial>

    <div class="pt-4" v-if="$slots.default">
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

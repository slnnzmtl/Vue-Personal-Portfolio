<script lang="ts">
import SButton from "@/components/ui/buttons/SButton.vue";
import DownloadIcon from "@/components/icons/DownloadIcon.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "DownloadResume",
  components: {
    SButton,
    DownloadIcon,
  },
  props: {
    title: {
      type: String,
      default: "If you are recruiter, you can download my resume below.",
    },
    buttonText: {
      type: String,
      default: "Download CV",
    },
    type: {
      type: String,
      default: "text",
    },
  },
  setup() {
    const handleDownload = () => {
      const cvUrl = "/files/daniel-kazansky.pdf";
      window.open(cvUrl, "_blank");

      window.gtag("event", "cv_downloaded");
    };

    return {
      handleDownload,
    };
  },
  computed: {
    isButton(): boolean {
      return this.type === "button";
    },
  },
});
</script>

<template>
  <p v-if="title" class="text-sm text-white-800 mb-4">
    {{ title }}

    <button v-if="!isButton" type="button" @click="handleDownload">
      <span class="button-text underline cursor-pointer">{{ buttonText }}</span>
    </button>
  </p>

  <SButton
    class="download-resume-button"
    size="large"
    type="primary"
    v-if="isButton"
    @click="handleDownload"
  >
    <div class="button-content">
      <DownloadIcon class="download-icon" />
      <span class="button-text">{{ buttonText }}</span>
    </div>
  </SButton>
</template>

<style lang="scss" scoped>
.download-resume-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;

  .button-content {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  .download-icon {
    width: 1.5rem;
    height: 1.5rem;
  }

  .button-text {
    font-weight: 600;
    font-size: 1.125rem;
  }
}
</style>

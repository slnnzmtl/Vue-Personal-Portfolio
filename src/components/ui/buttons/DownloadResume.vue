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
  setup() {
    const handleDownload = () => {
      const cvUrl = "/daniel-kazansky.pdf";
      window.open(cvUrl, "_blank");
    };

    return {
      handleDownload,
    };
  },
});
</script>

<template>
  <SButton
    class="download-resume-button"
    size="large"
    type="primary"
    @click="handleDownload"
  >
    <div class="button-content">
      <DownloadIcon class="download-icon" />
      <span class="button-text">Download CV</span>
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

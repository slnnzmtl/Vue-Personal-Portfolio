<script lang="ts">
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";
import DownloadResume from "@/components/ui/buttons/DownloadResume.vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import ModalWindow from "@/components/ui/ModalWindow.vue";

import { defineComponent } from "vue";

export default defineComponent({
  name: "HireFormModal",
  components: {
    SocialLinks,
    GlassMaterial,
    ModalWindow,
    DownloadResume,
  },
  emits: ["close"],
  setup(props, { emit }) {
    const closeModal = (result: boolean | null) => {
      console.log("closeModal", result);
      emit("close", result);
    };

    return {
      closeModal,
    };
  },
});
</script>

<template>
  <ModalWindow name="ModalKey.HireForm" @close="closeModal">
    <div
      class="hire-form-modal flex flex-col gap-4 items-left justify-center max-w-[100vw]"
    >
      <GlassMaterial class="p-6">
        <SocialLinks class="gap-6" />
      </GlassMaterial>

      <p class="mt-6">
        If you are recruiter and want to hire me, you can download my resume below.
      </p>

      <DownloadResume class="" />
    </div>
  </ModalWindow>
</template>

<style lang="scss" scoped>
.hire-form-modal {
  padding: 2rem;
  width: 600px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-title {
  font-size: 2rem;
  font-weight: bold;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--cyan);
    box-shadow: 0 0 0 0.2rem rgba(0, 31, 63, 0.25);
  }

  &::placeholder {
    color: #999;
  }
}

textarea.form-input {
  min-height: 150px;
  resize: vertical;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>

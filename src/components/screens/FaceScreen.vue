<script lang="ts">
import { defineComponent } from "vue";
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import AuthorAvatar from "@/components/AuthorAvatar.vue";
import { ModalKey } from "@/modals/types";
import { useModalService } from "@/composables";
import HireMeButton from "../ui/buttons/HireMeButton.vue";
import SButton from "../ui/buttons/SButton.vue";

export default defineComponent({
  name: "AuthorFace",
  components: {
    AuthorAvatar,
    SocialLinks,
    GlassMaterial,
    HireMeButton,
  },
  setup() {
    const { openModal } = useModalService();

    const onModalOpen = async () => {
      await openModal(ModalKey.ConsultationForm);
    };

    return {
      onModalOpen,
    };
  },
});
</script>

<template>
  <div class="face-screen items-center py-10 px-3">
    <div class="author-avatar relative w-full flex justify-center">
      <AuthorAvatar />
    </div>

    <div class="flex flex-col items-center md:items-start gap-6 md:gap-3 text-left">
      <h1 class="text-center text-6xl font-bold">Kazansky Development</h1>
      <p
        class="text-xl lg:text-3xl font-semibold text-center md:text-left text-secondary text-shadow"
      >
        Software development & AI solutions studio
      </p>

      <p class="sm:text-base text-center text-white-800 my-2 md:text-left">
        Building high-quality software and AI solutions with trusted partners — empowering
        businesses to thrive <br class="hidden xl:block" />
        in the digital age.
      </p>

      <GlassMaterial class="p-4 mx-4 md:mx-0 mt-2 w-full lg:w-auto">
        <SocialLinks title="Contact me:" />
      </GlassMaterial>
      <div class="md:hidden">
        <SButton variant="primary" @click="onModalOpen" class="mt-2">
          Book a FREE strategy session
        </SButton>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.face-screen {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-top: 12rem;
  gap: 3rem;
  height: 60vh;
  max-height: 800px;

  @media (max-width: 768px) {
    max-height: 100%;
    height: 100%;
    margin-top: 0;
    padding-top: 100px;
  }

  .author-avatar {
    align-items: center;
    max-width: 300px;
    margin: 0 auto;

    flex-shrink: 1;

    @media (max-width: 1280px) {
      max-width: 200px;
    }
  }

  @media (min-width: 768px) {
    grid-template-columns: 30% 1fr;
    grid-template-rows: 1fr;
  }

  &__position {
    @media (max-width: 768px) {
      max-width: 100%;
    }
  }

  @media (min-width: 2048px) {
    &__position {
      font-size: 2.5rem;
    }

    h1 {
      font-size: 4rem;
    }
  }
}

.text-secondary {
  color: var(--text-secondary);
}
</style>

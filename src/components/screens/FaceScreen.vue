<script lang="ts">
import { defineComponent } from "vue";
import { ModalKey } from "@/modals/types";
import { useModalService } from "@/composables";
import HireMeButton from "../ui/buttons/HireMeButton.vue";
import SButton from "../ui/buttons/SButton.vue";
import SocialLinks from "@/components/SocialLinks/SocialLinks.vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import AuthorAvatar from "@/components/AuthorAvatar.vue";
import ServicesScreen from "./ServicesScreen.vue";

export default defineComponent({
  name: "AuthorFace",
  components: {
    AuthorAvatar,
    SocialLinks,
    GlassMaterial,
    HireMeButton,
    ServicesScreen,
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
  <div
    class="face-screen flex flex-col xl:flex-row gap-12 xl:gap-12 justify-center xl:justify-between xl:items-center px-6 w-full"
  >
    <div
      class="flex flex-col lg:flex-row gap-12 lg:gap-22 xl:gap-22 items-center mt-[150px] lg:mt-0"
    >
      <div class="author-avatar relative w-full flex justify-center">
        <AuthorAvatar />
      </div>

      <div class="flex flex-col items-center lg:items-start gap-6 lg:gap-3 text-left">
        <h1 class="text-center lg:text-left font-bold">Kazansky Development</h1>
        <p
          class="text-xl lg:text-2xl font-semibold text-center lg:text-left text-secondary text-shadow mb-4"
        >
          Software development & <br />
          AI solutions studio
        </p>

        <!-- <p
          class="sm:text-base max-w-[800px] xl:max-w-full text-center text-white-800 lg:text-left mb-4"
        >
          Building high-quality software and AI solutions with trusted partners —
          empowering businesses to thrive in the digital age.
        </p> -->

        <GlassMaterial class="max-w-[600px] p-4 mb-4 w-full lg:w-auto">
          <SocialLinks title="Contact me:" />
        </GlassMaterial>

        <div class="lg:hidden mt-4 sm:mt-2">
          <SButton variant="primary" @click="onModalOpen">
            Book FREE strategy session
          </SButton>
        </div>
      </div>
    </div>

    <ServicesScreen />
  </div>
</template>

<style lang="scss" scoped>
.face-screen {
  height: 80vh;
  max-height: 900px;
  width: 100%;

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
  }

  @media (max-width: 1024px) {
    max-height: 100%;
    min-height: 100vh;
    height: 100%;
    margin-top: 0;
  }
}

.author-avatar {
  align-items: center;
  max-width: min-content;
  margin: 0 auto;

  flex-shrink: 0;

  @media (min-width: 1024px) {
    grid-template-columns: 30% 1fr;
    grid-template-rows: 1fr;
    margin: 0;
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

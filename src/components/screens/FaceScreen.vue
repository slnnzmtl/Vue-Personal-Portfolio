<script setup lang="ts">
import AuthorAvatar from "@/components/AuthorAvatar.vue";
import SocialLinks from "../SocialLinks/SocialLinks.vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
</script>

<template>
  <div
    class="face-screen items-center p-10 xl:min-h-[600px] mt-[150px] mb-[50px]"
  >
    <div class="relative w-full flex justify-center">
      <AuthorAvatar />
    </div>

    <div class="flex flex-col items-center xl:items-start gap-4 text-left">
      <h1 class="text-center text-6xl font-bold">Daniel Kazansky</h1>
      <p
        class="text-2xl lg:text-3xl font-semibold text-center lg:text-left text-secondary text-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      >
        Web development with focus on user experience
      </p>
      <GlassMaterial class="mt-2 p-4 mx-4 md:mx-0">
        <SocialLinks />
      </GlassMaterial>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.face-screen {
  //  grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-18

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 3rem;

  @media (min-width: 1280px) {
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
      font-size: 6rem;
    }

    .author-avatar {
      @apply max-w-[600px] max-h-[600px];
    }
  }
}

.text-secondary {
  color: var(--text-secondary);
}
</style>

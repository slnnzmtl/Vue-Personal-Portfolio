<script setup lang="ts">
import AuthorAvatar from "@/components/AuthorAvatar.vue";
import SocialLinks from "../SocialLinks/SocialLinks.vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
</script>

<template>
  <div class="face-screen items-center py-10 px-3 mb-[50px]">
    <div class="author-avatar relative w-full flex justify-center">
      <AuthorAvatar />
    </div>

    <div class="flex flex-col items-center xl:items-start gap-4 text-left">
      <h1 class="text-center text-6xl font-bold">Daniel Kazansky</h1>
      <p
        class="text-xl lg:text-3xl font-semibold text-center lg:text-left text-secondary text-shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      >
        Web development with focus on user experience
      </p>
      <GlassMaterial class="p-4 mx-4 md:mx-0 w-full lg:w-auto">
        <SocialLinks />
      </GlassMaterial>

      <p class="sm:text-base text-center mt-12 xl:mt-6 xl:text-left">
        I bring a strong background in building complex, high-performance
        solutions across e-commerce, online learning, marketing, and sales
        domains.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.face-screen {
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  margin-top: 12rem;
  gap: 6rem;
  min-height: 600px;

  @media (max-width: 768px) {
    height: 100vh;
    max-height: 1000px;
    margin-top: 0;
    padding-top: 100px;
    gap: 3rem;
  }

  .author-avatar {
    align-items: center;
    max-width: 300px;
    margin: 0 auto;
  }

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

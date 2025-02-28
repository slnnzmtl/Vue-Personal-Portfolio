<script lang="ts">
import AuthorAvatar from "@/components/AuthorAvatar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FaceScreen",
  components: {
    AuthorAvatar,
  },
  props: {
    name: {
      type: String,
      default: "Daniel Kazansky",
    },
    position: {
      type: String,
      default: "Full-stack Developer & Business Automation",
    },
  },
});
</script>

<template>
  <div
    class="face-screen flex items-center flex-col lg:flex-row gap-6 sm:gap-18 p-4 pt-10 sm:pt-auto mt-25"
  >
    <AuthorAvatar class="max-w-[300px] md:max-w-[400px]" />
    <div class="flex flex-col gap-4 text-left">
      <h1 class="text-center lg:text-left text-4xl sm:text-7xl font-bold">
        {{ name }}
      </h1>

      <p
        class="face-screen__position text-xl lg:text-3xl font-semibold text-center lg:text-left"
      >
        {{ position }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.face-screen {
  height: 800px;

  &__position {
    color: var(--text-secondary);
    max-width: 700px;

    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    &__position {
      max-width: 100%;
    }
  }

  @media (min-width: 2048px) {
    .face-screen__position {
      font-size: 2.5rem;
    }

    h1 {
      font-size: 6rem;
    }

    Avatar {
      max-width: 600px;
      max-height: 600px;
    }
  }
}
</style>

<script lang="ts">
import { defineComponent, ref } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import { useRouter } from "vue-router";
import ReadMore from "../ui/ReadMore.vue";

export default defineComponent({
  name: "ServicesScreen",
  components: {
    GlassMaterial,
    ReadMore,
  },
  setup() {
    const router = useRouter();
    const isHovered = ref(false);
    const active = ref(false);

    const services = [
      {
        title: "Web Development",
        description:
          "Creating modern web applications and websites using the latest technologies",
        icon: "💻",
        path: "/services",
      },
      {
        title: "AI & Automation Systems",
        description:
          "Development of intelligent automation systems and artificial intelligence for your business",
        icon: "🤖",
        path: "/services",
      },
    ];

    const handleCardClick = (service: typeof services[0]) => {
      router.push({
        name: "services",
      });
    };

    const onMouseEnter = () => {
      isHovered.value = true;
    };

    const onMouseLeave = () => {
      isHovered.value = false;
    };

    return {
      services,
      handleCardClick,
      isHovered,
      active,
      onMouseEnter,
      onMouseLeave,
    };
  },
});
</script>

<template>
  <section class="bg-background">
    <div class="mx-auto flex flex-col gap-12">
      <h2 class="text-3xl md:text-4xl font-bold text-center px-4">What I am doing</h2>

      <div class="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <GlassMaterial
          v-for="service in services"
          :key="service.title"
          class="service-card cursor-pointer p-6 text-center flex flex-col gap-6"
          @click="handleCardClick(service)"
          @mouseenter="onMouseEnter"
          @mouseleave="onMouseLeave"
        >
          <div class="text-4xl">{{ service.icon }}</div>
          <h3 class="text-xl font-semibold">{{ service.title }}</h3>
          <p class="text-muted-foreground">{{ service.description }}</p>

          <div class="flex h-full items-end justify-center">
            <ReadMore v-if="!active" :hovered="isHovered" />
          </div>
        </GlassMaterial>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
h3 {
  margin: 0;
  line-height: 1.4;
}

.service-card {
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);

    .link-arrow {
      transform: translateX(5px);
    }
  }

  .link {
    display: inline-flex;
    align-items: center;
    color: var(--cyan);
    text-decoration: none;
    font-weight: 500;

    &-arrow {
      margin-left: 0.5rem;
      transition: transform 0.3s ease;
    }
  }
}
</style>

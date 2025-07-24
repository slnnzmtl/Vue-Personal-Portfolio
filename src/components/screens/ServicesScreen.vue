<script lang="ts">
import { defineComponent, ref } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import { useRouter } from "vue-router";
import ReadMore from "../ui/ReadMore.vue";
import { useTranslation } from "@/composables/useTranslation";

export default defineComponent({
  name: "ServicesScreen",
  components: {
    GlassMaterial,
    ReadMore,
  },
  setup() {
    const router = useRouter();
    const { t } = useTranslation();
    const hovered = ref("");
    const active = ref(false);

    const services = [
      {
        title: "services.webDevelopment.title",
        description: "services.webDevelopment.description",
        icon: "💻",
        path: "/services",
        name: "web-development",
      },
      {
        title: "services.aiAutomation.title",
        description: "services.aiAutomation.description",
        icon: "🤖",
        path: "/services",
        name: "ai-automation",
      },
    ];

    const handleCardClick = (service: typeof services[0]) => {
      router.push({
        name: "services",
        hash: `#${service.name}`,
      });
    };

    const onMouseEnter = (name: string) => {
      hovered.value = name;
    };

    const onMouseLeave = () => {
      hovered.value = "";
    };

    const isHovered = (name: string) => {
      return hovered.value === name;
    };

    return {
      services,
      handleCardClick,
      active,
      onMouseEnter,
      onMouseLeave,
      isHovered,
      t,
    };
  },
});
</script>

<template>
  <section class="bg-background">
    <div class="mx-auto flex flex-col gap-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-6 mx-auto">
        <GlassMaterial
          v-for="service in services"
          :key="service.title"
          class="service-card cursor-pointer p-6 text-center flex flex-col gap-3 lg:max-w-[350px]"
          @click="handleCardClick(service)"
          @mouseenter="onMouseEnter(service.name)"
          @mouseleave="onMouseLeave"
        >
          <div class="text-4xl">{{ service.icon }}</div>
          <h3 class="font-semibold">{{ t(service.title) }}</h3>
          <p class="text-xs text-muted-foreground">{{ t(service.description) }}</p>

          <div class="flex h-full items-end justify-center">
            <ReadMore v-if="!active" :hovered="isHovered(service.name)" />
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
  font-size: 1.1rem;
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

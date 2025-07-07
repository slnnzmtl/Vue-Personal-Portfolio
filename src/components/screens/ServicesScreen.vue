<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ServicesScreen",
  components: {
    GlassMaterial,
  },
  setup() {
    const router = useRouter();
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

    return { services, handleCardClick };
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
          class="service-card p-6 text-center flex flex-col gap-6"
          @click="handleCardClick(service)"
        >
          <div class="text-4xl">{{ service.icon }}</div>
          <h3 class="text-xl font-semibold">{{ service.title }}</h3>
          <p class="text-muted-foreground">{{ service.description }}</p>
        </GlassMaterial>
      </div>
    </div>
  </section>
</template>

<style scoped>
h3 {
  margin: 0;
  line-height: 1.4;
}

.service-card {
  transition: transform 0.3s ease;
  cursor: pointer;
  &:hover {
    transform: translateY(-10px);
  }
}
</style>

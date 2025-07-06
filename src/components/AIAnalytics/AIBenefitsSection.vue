<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import ScrollableContainer from "../ui/ScrollableContainer.vue";

export default defineComponent({
  name: "AIBenefitsSection",
  components: {
    GlassMaterial,
    ScrollableContainer,
  },
  setup() {
    const benefits = [
      {
        title: "Автоматичний аналіз дзвінків та чатів",
        description: "Система обробляє всі розмови без вашої участі",
        icon: "✔️",
      },
      {
        title: "Звіти у зручному для вас форматі",
        description: "Telegram, пошта, Google Таблиці - оберіть що зручно",
        icon: "✔️",
      },
      {
        title: "Рекомендації для покращення роботи команди",
        description: "Конкретні поради для підвищення ефективності",
        icon: "✔️",
      },
      {
        title: "Виявлення слабких місць у скриптах",
        description: "Знайдіть проблемні місця в комунікації з клієнтами",
        icon: "✔️",
      },
      {
        title: "Система працює без перерв і вихідних",
        description: "24/7 моніторинг якості всіх продажів",
        icon: "✔️",
      },
    ];

    return { benefits };
  },
});
</script>

<template>
  <section class="bg-background py-16">
    <div class="mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 px-4">
        Що ви отримаєте
      </h2>

      <div class="grid sm:grid-cols-2 gap-6">
        <GlassMaterial
          v-for="benefit in benefits"
          :key="benefit.title"
          class="group p-6 min-w-[280px] lg:min-w-auto text-left"
        >
          <div class="flex items-start gap-4 mb-4">
            <span class="text-green-500 text-2xl font-bold flex-shrink-0">{{
              benefit.icon
            }}</span>
            <div>
              <h3 class="text-lg font-semibold mb-3">{{ benefit.title }}</h3>
              <p class="text-muted-foreground">{{ benefit.description }}</p>
            </div>
          </div>
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
</style>

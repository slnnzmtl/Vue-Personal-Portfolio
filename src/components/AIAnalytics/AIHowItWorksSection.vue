<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import ScrollableContainer from "../ui/ScrollableContainer.vue";

export default defineComponent({
  name: "AIHowItWorksSection",
  components: {
    GlassMaterial,
    ScrollableContainer,
  },
  setup() {
    const steps = [
      {
        title: "Менеджер завершує розмову",
        description:
          "Після кожного дзвінка або чату система автоматично отримує дані для аналізу",
        icon: "📞",
        step: "1",
      },
      {
        title: "Система автоматично розшифровує",
        description: "AI миттєво обробляє аудіо записи дзвінків або текст чатів",
        icon: "🎯",
        step: "2",
      },
      {
        title: "AI аналізує якість розмови",
        description: "Система виявляє недоліки та формує рекомендації для покращення",
        icon: "🧠",
        step: "3",
      },
      {
        title: "Ви отримуєте звіт",
        description:
          "Детальний аналіз приходить у Telegram, на пошту або в Google Таблицю",
        icon: "📊",
        step: "4",
      },
    ];

    return { steps };
  },
});
</script>

<template>
  <section class="bg-background py-16">
    <div class="mx-auto flex flex-col gap-12">
      <h2 class="font-bold text-center px-4">Як це працює</h2>

      <ScrollableContainer>
        <div class="flex flex-nowrap gap-6">
          <GlassMaterial
            v-for="step in steps"
            :key="step.title"
            class="flex flex-col gap-4 group p-6 min-w-[280px] lg:min-w-auto text-left relative"
          >
            <div class="flex flex-nowrap items-center gap-6">
              <div class="text-4xl">{{ step.icon }}</div>
              <h3 class="font-semibold">{{ step.title }}</h3>
            </div>
            <p class="text-muted-foreground">{{ step.description }}</p>
          </GlassMaterial>
        </div>
      </ScrollableContainer>
    </div>
  </section>
</template>

<style scoped>
h3 {
  font-size: 1.2rem;
  margin: 0;
  line-height: 1.4;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
}
</style>

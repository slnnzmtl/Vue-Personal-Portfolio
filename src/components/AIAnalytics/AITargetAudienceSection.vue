<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import ScrollableContainer from "../ui/ScrollableContainer.vue";

export default defineComponent({
  name: "AITargetAudienceSection",
  components: {
    GlassMaterial,
    ScrollableContainer,
  },
  setup() {
    const targetGroups = [
      {
        title: "Бізнес із командою продажів від 2 осіб",
        description:
          "Ідеально підходить для команд, де важливо контролювати якість роботи кожного менеджера",
        icon: "👥",
      },
      {
        title: "Власники, які хочуть бачити реальну картину воронки",
        description:
          "Отримайте повне розуміння процесів продажів без необхідності особистого контролю",
        icon: "👨‍💼",
      },
      {
        title: "Керівники, які втомилися слухати записи вручну",
        description: "Автоматизуйте процес контролю якості та аналізу розмов",
        icon: "🎧",
      },
      {
        title: "Компанії, що прагнуть збільшити ефективність",
        description:
          "Підвищте конверсію відділу продажів за допомогою точних даних та рекомендацій",
        icon: "📈",
      },
    ];

    return { targetGroups };
  },
});
</script>

<template>
  <section class="bg-background py-16">
    <div class="mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 px-4">
        Для кого це рішення
      </h2>

      <div class="grid gap-3">
        <GlassMaterial
          v-for="group in targetGroups"
          :key="group.title"
          class="group p-6 min-w-[300px] lg:min-w-auto text-left"
        >
          <div class="flex items-start gap-4 mb-4">
            <div class="text-4xl flex-shrink-0">{{ group.icon }}</div>
            <div>
              <div class="flex items-center gap-2 mb-3">
                <h3 class="text-lg font-semibold">{{ group.title }}</h3>
              </div>
              <p class="text-muted-foreground">{{ group.description }}</p>
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

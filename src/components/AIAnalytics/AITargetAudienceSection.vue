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
    <div class="mx-auto flex flex-col gap-12">
      <h2 class="font-bold text-center px-4">Для кого це рішення</h2>

      <div class="grid gap-4">
        <GlassMaterial
          v-for="group in targetGroups"
          :key="group.title"
          class="group p-6 min-w-[300px] lg:min-w-auto text-left"
        >
          <div class="flex sm:items-center gap-4">
            <div class="w-[32px] text-3xl mt-2 sm:mt-0 flex-shrink-0">
              {{ group.icon }}
            </div>

            <div class="flex flex-col gap-2">
              <h3 class="font-semibold">{{ group.title }}</h3>
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
  font-size: 1.2rem;
}
</style>

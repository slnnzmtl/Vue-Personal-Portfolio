<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";

export default defineComponent({
  name: "AIWhyNowSection",
  components: {
    GlassMaterial,
  },
  setup() {
    const reasons = [
      {
        title: "Ваші конкуренти вже використовують AI у продажах",
        icon: "🚀",
      },
      {
        title: "Людський фактор призводить до втрати клієнтів",
        icon: "🚀",
      },
      {
        title: "Ви не можете контролювати все самостійно",
        icon: "🚀",
      },
    ];

    const benefits = [
      {
        title: "100% діалогів під контролем",
        icon: "✓",
      },
      {
        title: "Виявлення помилок у реальному часі",
        icon: "✓",
      },
      {
        title: "Підвищення конверсії без збільшення витрат на рекламу",
        icon: "✓",
      },
    ];

    return { reasons, benefits };
  },
});
</script>

<template>
  <section class="bg-gradient-to-b from-background to-primary-900/5 py-16">
    <div class="max-w-[1200px] mx-auto px-4 flex flex-col gap-12">
      <h2 class="text-3xl md:text-4xl font-bold text-center">
        Чому це необхідно прямо зараз
      </h2>

      <div class="grid md:grid-cols-2 gap-8">
        <GlassMaterial class="p-8 flex flex-col gap-6 px-6">
          <h3 class="font-semibold text-center">Реальність ринку</h3>
          <div class="space-y-4">
            <div v-for="reason in reasons" :key="reason.title" class="flex gap-3 nowrap">
              <span class="mt-1 text-orange-500 text-sm font-bold flex-shrink-0">
                {{ reason.icon }}
              </span>
              <p class="text-md">{{ reason.title }}</p>
            </div>
          </div>
        </GlassMaterial>

        <!-- Benefits with AI -->
        <GlassMaterial class="p-8 flex flex-col gap-6 px-6">
          <h3 class="font-semibold text-center">З AI-аналітикою</h3>
          <div class="space-y-4">
            <div
              v-for="benefit in benefits"
              :key="benefit.title"
              class="flex gap-3 nowrap"
            >
              <span
                class="mt-1 text-green-500 text-md font-bold flex-shrink-0 bg-green-100 rounded-full w-6 h-6 flex items-center justify-center text-sm"
                >{{ benefit.icon }}</span
              >
              <p>{{ benefit.title }}</p>
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
  font-size: 1.25rem;
  line-height: 1.6;
}
</style>

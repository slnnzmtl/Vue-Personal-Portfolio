<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import SButton from "@/components/ui/buttons/SButton.vue";

export default defineComponent({
  name: "AIPricingSection",
  components: {
    GlassMaterial,
    SButton,
  },
  setup() {
    const pricingOptions = [
      {
        title: "Стартове впровадження",
        price: "від 800$",
        description: "Базове налаштування системи для невеликих команд",
        icon: "🚀",
      },
      {
        title: "Повне налаштування та інтеграція",
        price: "від 1500$",
        description: "Комплексне рішення з повною інтеграцією в ваші системи",
        icon: "⚙️",
        featured: true,
      },
      {
        title: "Підтримка та оптимізація",
        price: "від 100$/міс",
        description: "Постійна підтримка та покращення системи",
        icon: "🔧",
      },
    ];

    const handleRequestSubmit = () => {
      console.log("Request submitted");
    };

    return { pricingOptions, handleRequestSubmit };
  },
});
</script>

<template>
  <section class="bg-background py-16">
    <div class="mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-6 px-4">
        Тарифи
      </h2>

      <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
        <GlassMaterial
          v-for="option in pricingOptions"
          :key="option.title"
          :class="[
            'p-6 text-center relative',
            option.featured ? 'ring-2 ring-purple-500 transform scale-105' : ''
          ]"
        >
          <div v-if="option.featured" class="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span class="bg-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
              Популярний
            </span>
          </div>
          
          <div class="text-4xl mb-4">{{ option.icon }}</div>
          <h3 class="text-xl font-semibold mb-3">{{ option.title }}</h3>
          <div class="text-3xl font-bold text-purple-600 mb-4">{{ option.price }}</div>
          <p class="text-muted-foreground mb-6">{{ option.description }}</p>
          
          <div class="flex items-center gap-2 justify-center">
            <span class="text-green-500 text-lg">✔️</span>
            <span class="text-sm">{{ option.title }}</span>
          </div>
        </GlassMaterial>
      </div>

      <div class="text-center mb-8">
        <GlassMaterial class="inline-block p-6">
          <p class="text-lg font-semibold text-purple-600 mb-2">
            🎯 Тестовий період для перших клієнтів — за спеціальною ціною
          </p>
          <p class="text-muted-foreground">
            Скористайтеся можливістю протестувати систему з особливими умовами
          </p>
        </GlassMaterial>
      </div>

      <div class="text-center">
        <SButton
          size="lg"
          variant="primary"
          class="px-8 py-4 text-lg"
          @click="handleRequestSubmit"
        >
          Залишити заявку
        </SButton>
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

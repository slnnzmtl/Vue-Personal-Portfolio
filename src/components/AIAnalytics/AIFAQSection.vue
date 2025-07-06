<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";

export default defineComponent({
  name: "AIFAQSection",
  components: {
    GlassMaterial,
  },
  setup() {
    const faqs = [
      {
        question: "Чи потрібно щось встановлювати?",
        answer: "Ні, рішення працює через хмару",
        icon: "💻",
      },
      {
        question: "Це складно?",
        answer: "Ні, ми все налаштуємо за вас",
        icon: "⚙️",
      },
      {
        question: "Чи підходить для малого бізнесу?",
        answer: "Так, ми адаптуємо систему під будь-який обсяг",
        icon: "🏢",
      },
    ];

    return { faqs };
  },
});
</script>

<template>
  <section class="bg-background py-16">
    <div class="mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 px-4">
        Часті питання
      </h2>

      <div class="max-w-4xl mx-auto space-y-6">
        <GlassMaterial
          v-for="faq in faqs"
          :key="faq.question"
          class="p-6"
        >
          <div class="flex items-start gap-4">
            <div class="text-3xl flex-shrink-0">{{ faq.icon }}</div>
            <div class="flex-1">
              <h3 class="text-lg font-semibold mb-3 text-purple-600">
                {{ faq.question }}
              </h3>
              <p class="text-muted-foreground text-lg">
                {{ faq.answer }}
              </p>
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

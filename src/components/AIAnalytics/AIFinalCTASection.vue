<script lang="ts">
import { defineComponent } from "vue";
import SButton from "@/components/ui/buttons/SButton.vue";
import GlassMaterial from "../ui/GlassMaterial.vue";

export default defineComponent({
  name: "AIFinalCTASection",
  components: {
    SButton,
    GlassMaterial,
  },
  setup() {
    const handleConsultationRequest = () => {
      console.log("Free consultation requested");
    };

    return { handleConsultationRequest };
  },
});
</script>

<template>
  <section class="bg-gradient-to-b from-background to-primary-900/10 py-20">
    <div class="max-w-4xl mx-auto text-center px-4">
      <GlassMaterial class="p-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Не втрачайте клієнтів через слабкий контроль продажів.
        </h2>

        <p class="text-lg text-muted-foreground mb-8">
          Запустіть AI-аналітику та отримуйте реальні дані для покращення роботи команди.
        </p>

        <SButton
          size="lg"
          variant="primary"
          class="px-8 py-4 text-lg relative overflow-hidden"
          @click="handleConsultationRequest"
        >
          <span class="relative z-10">Записатися на безкоштовну консультацію</span>
          <div
            class="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-primary-600 opacity-0 transition-opacity group-hover:opacity-100"
          />
        </SButton>

        <div
          class="mt-8 flex justify-center items-center gap-4 text-sm text-muted-foreground"
        >
          <span>⏰ Консультація займає 30 хвилин</span>
          <span>•</span>
          <span>💼 Індивідуальний підхід</span>
          <span>•</span>
          <span>🎯 Конкретні рекомендації</span>
        </div>
      </GlassMaterial>
    </div>
  </section>
</template>

<style scoped>
h2 {
  line-height: 1.2;
}
</style>

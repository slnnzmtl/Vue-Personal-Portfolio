<script lang="ts">
import { defineComponent } from "vue";
import SButton from "@/components/ui/buttons/SButton.vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import { useConsultationService } from "@/composables";

export default defineComponent({
  name: "AIFinalCTASection",
  components: {
    SButton,
    GlassMaterial,
  },
  setup() {
    const { openConsultation, ServiceType } = useConsultationService();

    const handleConsultationRequest = () => {
      openConsultation(ServiceType.AIAnalytics);
    };

    return { handleConsultationRequest };
  },
});
</script>

<template>
  <section class="bg-gradient-to-b from-background to-primary-900/10 py-20">
    <div class="max-w-4xl mx-auto text-center">
      <GlassMaterial class="flex flex-col gap-8 p-6 sm:px-12 py-12">
        <h2 class="font-bold">
          Не втрачайте клієнтів через <br />
          слабкий контроль продажів.
        </h2>

        <p class="text-lg text-muted-foreground">
          Запустіть AI-аналітику та отримуйте реальні <br />
          дані для покращення роботи команди.
        </p>

        <SButton
          size="lg"
          variant="primary"
          class="mt-4 px-8 py-4 text-lg relative overflow-hidden sm:w-max mx-auto"
          @click="handleConsultationRequest"
        >
          <span class="relative z-10 text-sm sm:text-base"
            >Записатися на безкоштовну консультацію</span
          >
        </SButton>

        <div
          class="mt-4 flex flex-wrap justify-center items-center gap-4 sm:gap-8 text-sm text-muted-foreground"
        >
          <span>⏰ Консультація займає 30 хвилин</span>
          <span>💼 Індивідуальний підхід</span>
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

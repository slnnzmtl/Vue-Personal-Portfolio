<script lang="ts">
import SButton from "@/components/ui/buttons/SButton.vue";
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";
import { useConsultationService } from "@/composables";
import AIReportExample from "./AIReportExample.vue";

export default defineComponent({
  name: "AIHeroSection",
  components: {
    SButton,
    GlassMaterial,
    AIReportExample,
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
  <section class="relative w-full bg-gradient-to-b from-primary-900/10 to-background">
    <h1 class="flex items-center mb-6 text-4xl font-semibold gap-4 flex-wrap sm:px-4">
      <span class="text-nowrap">🤖 AI-аналітика</span>
      <span class="text-purple-600 text-nowrap">для продажів</span>
    </h1>

    <h2 class="mb-16 font-semibold text-left sm:px-4">
      Ваші продажі під контролем 24/7 — AI сам аналізує дзвінки, чати та виявляє проблеми
      у відділі продажів
    </h2>

    <div class="container grid lg:grid-cols-2 gap-12 lg:gap-16 mx-auto sm:px-4">
      <AIReportExample class="h-max" />

      <div class="flex flex-col justify-center items-center order-first lg:order-last">
        <GlassMaterial class="max-w-max p-6 mb-12">
          <p class="text-lg text-left sm:text-xl text-green-600 font-semibold">
            ✅ Менеджери продають ефективніше<br />
            ✅ Клієнти отримують кращий сервіс<br />
            ✅ Ви отримуєте реальні дані для покращення роботи команди
          </p>
        </GlassMaterial>

        <SButton
          size="lg"
          variant="primary"
          class="w-max relative overflow-hidden px-6 py-4 text-lg"
          @click="handleConsultationRequest"
        >
          Отримати консультацію
        </SButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
h2 {
  line-height: 1.4;
  font-size: 1.3rem;
}
</style>

<script lang="ts">
import SButton from "@/components/ui/buttons/SButton.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "AIHeroSection",
  components: {
    SButton,
  },
  setup() {
    const handleConsultationRequest = () => {
      console.log("Consultation requested");
    };

    return { handleConsultationRequest };
  },
});
</script>

<template>
  <section
    class="relative w-full overflow-hidden bg-gradient-to-b from-primary-900/10 to-background"
  >
    <div class="container mx-auto px-4">
      <div class="flex flex-col items-left justify-center text-center">
        <h1 class="flex items-center mb-8">
          <span class="text-6xl mr-2">🤖</span>
          <span class="text-4xl font-semibold">AI-аналітика</span>
          <span class="text-4xl ml-2 text-purple-600">для продажів</span>
        </h1>

        <h2 class="mb-8 font-semibold tracking-tight text-left">
          Ваші продажі під контролем 24/7 — AI сам аналізує дзвінки, чати та виявляє
          проблеми у відділі продажів
        </h2>

        <p
          class="mb-12 max-w-2xl text-lg text-left sm:text-xl text-green-600 font-semibold"
        >
          ✅ Менеджери продають ефективніше<br />
          ✅ Клієнти отримують кращий сервіс<br />
          ✅ Ви отримуєте реальні дані для покращення роботи команди
        </p>

        <div class="mb-8 w-full flex">
          <SButton
            size="lg"
            variant="primary"
            class="w-max relative overflow-hidden px-6 py-4 text-lg"
            @click="handleConsultationRequest"
          >
            <span class="relative z-10">Отримати консультацію</span>
            <div
              class="absolute inset-0 -z-10 bg-gradient-to-r from-primary to-primary-600 opacity-0 transition-opacity group-hover:opacity-100"
            />
          </SButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  line-height: 1.2;
}

@media (max-width: 768px) {
  h1 {
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";

export default defineComponent({
  name: "AIWhatIsItSection",
  components: {
    GlassMaterial,
  },
  setup() {
    const features = [
      {
        title: "Розшифровує дзвінки та листування",
        icon: "✔️",
      },
      {
        title: "Аналізує, чи дотримуються менеджери скриптів",
        icon: "✔️",
      },
      {
        title: "Виявляє пропущені можливості для закриття угод",
        icon: "✔️",
      },
      {
        title: "Визначає слабкі місця та допомагає покращити конверсію",
        icon: "✔️",
      },
    ];

    return { features };
  },
});
</script>

<template>
  <section class="bg-background py-16">
    <div class="mx-auto flex flex-col gap-6">
      <h2 class="font-bold text-center px-4">Що таке AI-аналітика для продажів</h2>

      <p class="text-md text-center text-cyan-400 mb-6">
        Це повністю автоматизований агент на базі ChatGPT, який самостійно:
      </p>

      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="flex items-start gap-4"
        >
          <span class="text-green-500 text-md font-bold flex-shrink-0">{{
            feature.icon
          }}</span>

          <p class="text-md">{{ feature.title }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

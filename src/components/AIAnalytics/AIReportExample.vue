<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";

export default defineComponent({
  name: "AIReportExample",
  components: {
    GlassMaterial,
  },
});
</script>

<template>
  <GlassMaterial class="p-6">
    <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm">
      <div class="mb-4">
        <span class="text-blue-400">Розмова №1275:</span>
      </div>

      <div class="space-y-3">
        <div class="flex items-start gap-3">
          <span class="text-green-500 text-lg">✅</span>
          <span>Клієнт цікавився умовами оплати</span>
        </div>

        <div class="flex items-start gap-3">
          <span class="text-yellow-500 text-lg">⚠️</span>
          <span>Менеджер не зробив спроби закрити угоду</span>
        </div>

        <div class="flex items-start gap-3">
          <span class="text-blue-400 text-lg">💡</span>
          <span>Рекомендація: допрацювати скрипт на етапі заперечень</span>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-6 pt-4">
        <div class="text-orange-400 font-semibold">
          Висновок: Потенційну угоду можна було закрити, потрібна корекція підходу
        </div>
      </div>
    </div>

    <div class="mt-6 text-center">
      <p class="text-muted-foreground">
        Кожен звіт містить детальний аналіз з конкретними рекомендаціями для покращення
      </p>
    </div>
  </GlassMaterial>
</template>

<style scoped>
.font-mono {
  font-family: "Fira Code", "Courier New", monospace;
}
</style>

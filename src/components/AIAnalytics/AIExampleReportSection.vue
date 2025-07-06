<script lang="ts">
import { defineComponent } from "vue";
import AIReportExample from "./AIReportExample.vue";

export default defineComponent({
  name: "AIExampleReportSection",
  components: {
    AIReportExample,
  },
});
</script>

<template>
  <section class="bg-background py-16">
    <div class="mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-12 px-4">
        Приклад звіту від AI
      </h2>

      <div class="max-w-4xl mx-auto">
        <AIReportExample />
      </div>
    </div>
  </section>
</template>

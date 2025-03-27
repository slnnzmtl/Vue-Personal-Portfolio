<script lang="ts">
import { defineComponent } from "vue";
import GlassMaterial from "../ui/GlassMaterial.vue";

export default defineComponent({
  name: "HostingOptions",
  components: {
    GlassMaterial,
  },
  setup() {
    const hostingOptions = [
      {
        title: "USA/Europe Hosting",
        features: [
          "Managed infrastructure",
          "Automatic scaling",
          "GDPR compliance",
          "24/7 support",
          "Regular backups",
        ],
        icon: "🌍",
      },
      {
        title: "Self-Hosting",
        features: [
          "Full data control",
          "Custom integrations",
          "No usage limits",
          "Complete customization",
          "Data sovereignty",
        ],
        icon: "🖥️",
      },
    ];

    return { hostingOptions };
  },
});
</script>

<template>
  <div>
    <h2 class="text-3xl md:text-4xl font-bold text-center mt-40">
      Choose Your Ideal
      <span class="text-purple-600">Hosting Environment</span>
    </h2>

    <div class="flex flex-wrap justify-center gap-8">
      <div
        v-for="option in hostingOptions"
        :key="option.title"
        class="p-8 w-full lg:w-[300px] text-left"
      >
        <div class="flex items-center gap-4 mb-6">
          <div class="text-4xl">{{ option.icon }}</div>
          <h3 class="text-2xl font-semibold">{{ option.title }}</h3>
        </div>
        <ul class="space-y-4 flex flex-col">
          <li
            v-for="feature in option.features"
            :key="feature"
            class="flex items-center gap-2 text-muted-foreground w-full"
          >
            <span class="text-primary">✓</span>
            {{ feature }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

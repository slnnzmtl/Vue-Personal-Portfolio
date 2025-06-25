<template>
  <main class="max-w-[1800px] w-full mx-auto pt-36">
    <header class="mb-12 mx-4">
      <h1 class="text-2xl sm:text-4xl font-bold mb-6">🔧 Services I Provide</h1>
      <p class="description text-lg xl:text-xl">
        As a product-oriented developer with expertise in web technologies and AI, I help
        businesses grow, automate, and optimize operations through tailor-made software
        solutions:
      </p>
    </header>

    <ScrollableContainer>
      <GlassMaterial class="w-max mx-4">
        <table class="w-full">
          <thead>
            <tr>
              <th class="text-left py-4 px-6 text-cyan">Service</th>
              <th class="text-left py-4 px-6 text-cyan">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(service, index) in services" :key="index">
              <td class="py-4 px-6 font-semibold text-md text-cyan align-top">
                ✅ {{ service.title }}
                <span v-if="service.isNew" class="text-sm ml-1 text-yellow-400"
                  >(NEW)</span
                >
              </td>
              <td class="py-4 px-6 text-white-600 leading-relaxed text-left text-sm">
                {{ service.description }}
              </td>
            </tr>
          </tbody>
        </table>
      </GlassMaterial>
    </ScrollableContainer>

    <div class="mt-16 grid md:grid-cols-3 gap-8 mb-16 mx-4">
      <div class="md:col-span-2">
        <section>
          <h3 class="text-2xl font-bold mb-6 text-cyan">🎯 Why Choose Me</h3>
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <span class="text-cyan text-xl">✔</span>
              <span>Focus on measurable business value</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan text-xl">✔</span>
              <span>Custom-tailored solutions — no cookie-cutter templates</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan text-xl">✔</span>
              <span>End-to-end ownership: From idea to deployment and support</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan text-xl">✔</span>
              <span>Expertise in modern AI technologies & web frameworks</span>
            </li>
            <li class="flex items-start gap-3">
              <span class="text-cyan text-xl">✔</span>
              <span>Scalable, secure, and future-proof development</span>
            </li>
          </ul>
        </section>
      </div>
    </div>

    <GlassMaterial class="flex flex-col md:w-max p-8 mx-4">
      <h3 class="text-2xl font-bold mb-4 text-cyan">📢 Let's Talk About Your Project</h3>
      <p class="text-lg mb-6 text-white-600">
        Whether you need to build from scratch, upgrade, or integrate AI — I can help.
      </p>
      <SButton variant="primary" @click="onContactClick" class="text-lg px-8 py-3">
        Book a free consultation today
      </SButton>
    </GlassMaterial>
  </main>
</template>

<script setup lang="ts">
import { ScrollableContainer } from "@/components";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import SButton from "@/components/ui/buttons/SButton.vue";
import { useModalService } from "@/composables/useModal";
import { ModalKey } from "@/modals/types";
import { ref } from "vue";

interface Service {
  title: string;
  description: string;
  isNew?: boolean;
}

const services = ref<Service[]>([
  {
    title: "Full-Stack Web Development",
    description:
      "Complete web apps (Frontend + Backend) using React, Vue.js, Node.js, PHP, etc.",
  },
  {
    title: "E-Commerce Development",
    description:
      "Custom online stores, payment integration, SEO-optimized product platforms",
  },
  {
    title: "CRM Systems Development",
    description: "Custom CRM platforms, automations, AI integration for sales & support",
  },
  {
    title: "AI-Powered Sales & Marketing Systems",
    description:
      "AI chatbots, automated lead generation, marketing funnels, smart responders",
  },
  {
    title: "Generative AI Integration",
    description:
      "AI-driven content generation, chatbots, code assistants, data analysis tools",
    isNew: true,
  },
  {
    title: "SEO & High-Performance Landing Pages",
    description:
      "Fast, mobile-optimized landing pages with SEO best practices for lead capture",
  },
  {
    title: "Business Process Automation",
    description:
      "Workflow automation, integrations, task automation, AI-based optimizations",
  },
  {
    title: "Low-Code/No-Code Development",
    description:
      "Rapid prototypes & internal tools with platforms like Bubble, Airtable, Make",
    isNew: true,
  },
  {
    title: "Cloud-First & Serverless Applications",
    description:
      "Scalable apps built for AWS, Google Cloud, Azure using serverless architecture",
    isNew: true,
  },
  {
    title: "Progressive Web Apps (PWA)",
    description: "Cross-platform web apps with offline access, mobile-native experience",
    isNew: true,
  },
  {
    title: "UX/UI Design & Omnichannel Experience",
    description:
      "Modern, conversion-focused interfaces, seamless multi-device experiences",
    isNew: true,
  },
  {
    title: "Data Scraping & Analytics Systems",
    description:
      "Custom parsers, monitoring dashboards, competitive analytics for social media",
  },
  {
    title: "AI Business Integrations",
    description:
      "Implement AI for automation, content creation, decision making, GPT integration",
  },
  {
    title: "WordPress Development",
    description: "Business sites, WooCommerce, custom plugins, SEO optimization",
  },
]);

const { openModal } = useModalService();

const onContactClick = async () => {
  await openModal(ModalKey.ConsultationForm);
};
</script>

<style lang="scss" scoped>
.description {
  color: var(--white-600);
}
</style>

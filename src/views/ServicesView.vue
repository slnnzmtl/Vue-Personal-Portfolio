<template>
  <main class="max-w-[1200px] w-full mx-auto pt-36 px-4">
    <header class="mb-12">
      <h1 class="text-2xl sm:text-4xl font-bold mb-6">What I'm doing</h1>
      <p class="intro text-lg xl:text-xl">
        My studio businesses grow, streamline operations, and boost revenue with
        tailor-made software and AI solutions — designed for scalability, automation, and
        measurable results.
      </p>
    </header>

    <div class="grid sm:grid-cols-2 gap-6">
      <div id="web-development" class="category">
        <h2 class="text-2xl font-bold mb-6 text-cyan">🌐 Web Development</h2>

        <ServiceCard
          title="Full-stack Development"
          description="Complete web apps (frontend & backend) with modern tech like React, Vue, Node.js."
          link-to="/projects"
        />

        <ServiceCard
          title="E-commerce Development"
          description="Custom online stores, payment integration, SEO-optimized product platforms."
        />

        <ServiceCard
          title="WordPress Development"
          description="Business sites, WooCommerce, custom plugins, SEO optimization."
        />

        <ServiceCard
          title="High-Performance Landing Pages"
          description="SEO-optimized, fast-loading landing pages with best practices for lead capture."
        />

        <ServiceCard
          title="Cloud-First & Serverless Applications"
          description="Scalable apps on AWS, Google Cloud, Azure with modern serverless architecture."
        />

        <ServiceCard
          title="Progressive Web Apps (PWA)"
          description="Cross-platform apps with offline access and mobile-first experience."
        />

        <ServiceCard
          title="UX/UI Design & Omnichannel Experience"
          description="Modern, conversion-focused interfaces and seamless multi-device experiences."
        />
      </div>

      <div id="ai-automation" class="category">
        <h2 class="text-2xl font-bold mb-6 text-cyan">🤖 Automation & AI Solutions</h2>

        <ServiceCard
          title="AI-Powered Sales & Marketing Systems"
          description="Automated lead generation, marketing funnels, chatbots to boost your conversions."
          link-to="/services/ai-sales-analytics"
        />

        <ServiceCard
          title="Generative AI Integration"
          description="AI content generation, chatbots, code assistants, and AI tools to enhance productivity."
        />

        <ServiceCard
          title="Business Process Automation"
          description="Workflow automation, integrations, task reduction, and AI-based optimizations."
        />

        <ServiceCard
          title="AI Business Integrations"
          description="AI tools for automation, content creation, decision-making, and CRM integrations."
        />

        <ServiceCard
          title="Data Scripting & Analytics Systems"
          description="Custom parsers, monitoring dashboards, and competitive analysis tools for insights."
        />
      </div>
    </div>

    <section class="mb-12 py-12">
      <div class="mt-16 flex flex-col items-center gap-8">
        <h2 class="text-6xl font-bold mb-6 text-cyan">🎯 Why clients choose us</h2>
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
      </div>
    </section>

    <GlassMaterial class="flex flex-col gap-6 mx-auto md:w-max p-8 max-w-2xl text-center">
      <h3 class="text-2xl font-bold text-cyan">📢 Let's Talk About Your Project</h3>
      <p class="text-lg text-white-600">
        Whether you need to build from scratch, upgrade, or integrate AI — I can help.
      </p>
      <SButton variant="primary" @click="onContactClick" class="text-lg px-8 py-3">
        Book a free strategy session
      </SButton>
    </GlassMaterial>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import ServiceCard from "@/components/ui/ServiceCard.vue";
import SButton from "@/components/ui/buttons/SButton.vue";
import { useModalService } from "@/composables/useModal";
import { ModalKey } from "@/modals/types";

const { openModal } = useModalService();

const onContactClick = async () => {
  await openModal(ModalKey.ConsultationForm);
};
</script>

<style lang="scss" scoped>
.intro {
  color: var(--white-600);
}
</style>

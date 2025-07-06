<template>
  <main class="max-w-[1200px] w-full mx-auto pt-36 px-4">
    <header class="mb-12">
      <h1 class="text-2xl sm:text-4xl font-bold mb-6">What we are doing</h1>
      <p class="intro text-lg xl:text-xl">
        We help businesses grow, streamline operations, and boost revenue with tailor-made
        software and AI solutions — designed for scalability, automation, and measurable
        results.
      </p>
    </header>

    <div class="grid sm:grid-cols-2 gap-6">
      <div class="category">
        <h2 class="text-2xl font-bold mb-6 text-cyan">🌐 Web Development</h2>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">Full-stack Development</div>
          <div class="service-description">
            Complete web apps (frontend & backend) with modern tech like React, Vue,
            Node.js.
          </div>
        </GlassMaterial>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">E-commerce Development</div>
          <div class="service-description">
            Custom online stores, payment integration, SEO-optimized product platforms.
          </div>
        </GlassMaterial>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">WordPress Development</div>
          <div class="service-description">
            Business sites, WooCommerce, custom plugins, SEO optimization.
          </div>
        </GlassMaterial>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">High-Performance Landing Pages</div>
          <div class="service-description">
            SEO-optimized, fast-loading landing pages with best practices for lead
            capture.
          </div>
        </GlassMaterial>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">Cloud-First & Serverless Applications</div>
          <div class="service-description">
            Scalable apps on AWS, Google Cloud, Azure with modern serverless architecture.
          </div>
        </GlassMaterial>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">Progressive Web Apps (PWA)</div>
          <div class="service-description">
            Cross-platform apps with offline access and mobile-first experience.
          </div>
        </GlassMaterial>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">UX/UI Design & Omnichannel Experience</div>
          <div class="service-description">
            Modern, conversion-focused interfaces and seamless multi-device experiences.
          </div>
        </GlassMaterial>
      </div>

      <div class="category">
        <h2 class="text-2xl font-bold mb-6 text-cyan">🤖 Automation & AI Solutions</h2>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">AI-Powered Sales & Marketing Systems</div>
          <div class="service-description">
            Automated lead generation, marketing funnels, chatbots to boost your
            conversions.
          </div>
          <router-link to="/ai-sales-analytics" class="learn-more">
            Learn more →
          </router-link>
        </GlassMaterial>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">Generative AI Integration</div>
          <div class="service-description">
            AI content generation, chatbots, code assistants, and AI tools to enhance
            productivity.
          </div>
        </GlassMaterial>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">Business Process Automation</div>
          <div class="service-description">
            Workflow automation, integrations, task reduction, and AI-based optimizations.
          </div>
        </GlassMaterial>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">AI Business Integrations</div>
          <div class="service-description">
            AI tools for automation, content creation, decision-making, and CRM
            integrations.
          </div>
        </GlassMaterial>

        <GlassMaterial class="service-card mb-4 p-6">
          <div class="service-title">Data Scripting & Analytics Systems</div>
          <div class="service-description">
            Custom parsers, monitoring dashboards, and competitive analysis tools for
            insights.
          </div>
        </GlassMaterial>
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

    <GlassMaterial class="flex flex-col mx-auto md:w-max p-8">
      <h3 class="text-2xl font-bold mb-4 text-cyan">📢 Let's Talk About Your Project</h3>
      <p class="text-lg mb-6 text-white-600">
        Whether you need to build from scratch, upgrade, or integrate AI — I can help.
      </p>
      <SButton variant="primary" @click="onContactClick" class="text-lg px-8 py-3">
        Book a free strategy session
      </SButton>
    </GlassMaterial>
  </main>
</template>

<script setup lang="ts">
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
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

.service-card {
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
}

.service-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--cyan);
  margin-bottom: 0.5rem;
}

.service-description {
  color: var(--white-600);
  line-height: 1.6;
}

.learn-more {
  color: var(--cyan);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;

  &:hover {
    color: var(--white);
  }
}
</style>

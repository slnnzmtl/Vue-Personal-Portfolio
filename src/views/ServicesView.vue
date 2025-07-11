<template>
  <main class="max-w-[1200px] w-full mx-auto pt-36 px-4">
    <header class="mb-12">
      <h1 class="text-2xl sm:text-4xl font-bold mb-6">{{ t("serviceView.title") }}</h1>
      <p class="intro text-lg xl:text-xl">
        {{ t("serviceView.intro") }}
      </p>
    </header>

    <div class="grid sm:grid-cols-2 gap-6">
      <div id="web-development" class="category flex flex-col gap-6">
        <h2 class="text-2xl font-bold text-cyan">
          {{ t("serviceView.webDevelopment.title") }}
        </h2>

        <ServiceCard
          :title="t('serviceView.webDevelopment.fullStack.title')"
          :description="t('serviceView.webDevelopment.fullStack.description')"
          link-to="/projects"
        />

        <ServiceCard
          :title="t('serviceView.webDevelopment.ecommerce.title')"
          :description="t('serviceView.webDevelopment.ecommerce.description')"
        />

        <ServiceCard
          :title="t('serviceView.webDevelopment.wordpress.title')"
          :description="t('serviceView.webDevelopment.wordpress.description')"
        />

        <ServiceCard
          :title="t('serviceView.webDevelopment.landingPages.title')"
          :description="t('serviceView.webDevelopment.landingPages.description')"
        />

        <ServiceCard
          :title="t('serviceView.webDevelopment.cloudServerless.title')"
          :description="t('serviceView.webDevelopment.cloudServerless.description')"
        />

        <ServiceCard
          :title="t('serviceView.webDevelopment.pwa.title')"
          :description="t('serviceView.webDevelopment.pwa.description')"
        />

        <ServiceCard
          :title="t('serviceView.webDevelopment.uxui.title')"
          :description="t('serviceView.webDevelopment.uxui.description')"
        />
      </div>

      <div id="ai-automation" class="category flex flex-col gap-6">
        <h2 class="font-bold text-cyan">
          {{ t("serviceView.aiAutomation.title") }}
        </h2>

        <ServiceCard
          :title="t('serviceView.aiAutomation.salesMarketing.title')"
          :description="t('serviceView.aiAutomation.salesMarketing.description')"
          link-to="/services/ai-sales-analytics"
        />

        <ServiceCard
          :title="t('serviceView.aiAutomation.generativeAI.title')"
          :description="t('serviceView.aiAutomation.generativeAI.description')"
        />

        <ServiceCard
          :title="t('serviceView.aiAutomation.processAutomation.title')"
          :description="t('serviceView.aiAutomation.processAutomation.description')"
        />

        <ServiceCard
          :title="t('serviceView.aiAutomation.businessIntegrations.title')"
          :description="t('serviceView.aiAutomation.businessIntegrations.description')"
        />

        <ServiceCard
          :title="t('serviceView.aiAutomation.dataAnalytics.title')"
          :description="t('serviceView.aiAutomation.dataAnalytics.description')"
        />
      </div>
    </div>

    <section class="my-36">
      <div class="flex flex-col items-center gap-8">
        <h2 class="text-6xl font-bold mb-6 text-cyan">
          {{ t("serviceView.whyClients.title") }}
        </h2>
        <ul class="space-y-3">
          <li
            class="flex items-start gap-3"
            v-for="(reason, idx) in reasonsArray"
            :key="idx"
          >
            <span class="text-cyan text-xl">✔</span>
            <span>{{ reason }}</span>
          </li>
        </ul>
      </div>
    </section>

    <GlassMaterial class="flex flex-col gap-6 mx-auto md:w-max p-8 max-w-2xl text-center">
      <h3 class="text-2xl font-bold text-cyan">{{ t("serviceView.cta.title") }}</h3>
      <p class="text-lg text-white-600">
        {{ t("serviceView.cta.description") }}
      </p>
      <SButton variant="primary" @click="onContactClick" class="text-lg px-8 py-3">
        {{ t("serviceView.cta.button") }}
      </SButton>
    </GlassMaterial>
  </main>
</template>

<script setup lang="ts">
import { useTranslation } from "@/composables/useTranslation";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import ServiceCard from "@/components/ui/ServiceCard.vue";
import SButton from "@/components/ui/buttons/SButton.vue";
import { useModalService } from "@/composables/useModal";
import { ModalKey } from "@/modals/types";

const { openModal } = useModalService();
const { t } = useTranslation();

const reasonsArray = [
  t("serviceView.whyClients.reasons.0"),
  t("serviceView.whyClients.reasons.1"),
  t("serviceView.whyClients.reasons.2"),
  t("serviceView.whyClients.reasons.3"),
  t("serviceView.whyClients.reasons.4"),
];

const onContactClick = async () => {
  await openModal(ModalKey.ConsultationForm);
};
</script>

<style lang="scss" scoped>
h2 {
  font-size: 1.6rem;
}

.intro {
  color: var(--white-600);
}
</style>

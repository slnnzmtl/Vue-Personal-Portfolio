<template>
  <div class="services-view max-w-[1800px] w-full mx-auto flex justify-center px-6">
    <div class="lg:flex-nowrap gap-4 text-left w-full pt-36">
      <p class="text-2xl sm:text-4xl font-bold mb-8">My services</p>
      <p class="description text-lg xl:text-xl mb-8">
        I specialize in web development, CRM integration, WordPress development, chat
        bots, AI agents, and automation solutions. My goal is to help you achieve your
        business objectives with tailored solutions that fit your needs.
      </p>

      <div class="flex flex-col lg:flex-row gap-8 items-center">
        <GlassMaterial class="services-table-container p-0 mb-8">
          <div class="overflow-x-auto">
            <table class="services-table w-full">
              <thead>
                <tr>
                  <th class="text-left py-4 px-4 text-cyan">Service</th>
                  <th class="text-left py-4 px-4 text-cyan">Description</th>
                  <th class="text-left py-4 px-8 text-cyan">Price</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(service, index) in services" :key="index" class="service-row">
                  <td class="px-4 font-semibold">{{ service.name }}</td>
                  <td class="px-4">
                    <div class="service-description">
                      {{ service.description }}
                    </div>
                  </td>
                  <td class="py-6 px-8 font-semibold text-cyan text-nowrap">
                    {{ service.price }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </GlassMaterial>

        <div class="mt-8 md:mt-16 h-96 flex flex-col justify-center">
          <ReadyToWorkTogether class="mx-auto text-center" :show-contacts="false">
            <SButton type="primary" @click="onContactClick"> Contact me </SButton>
          </ReadyToWorkTogether>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ScrollableContainer from "@/components/ui/ScrollableContainer.vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import SButton from "@/components/ui/buttons/SButton.vue";
import { useModalService } from "@/composables/useModal";
import { ModalKey } from "@/modals/types";

interface Service {
  name: string;
  description: string;
  price: string;
}

export default defineComponent({
  name: "ServicesView",
  components: {
    ScrollableContainer,
    GlassMaterial,
    SButton,
  },
  setup() {
    const { openModal } = useModalService();

    const services: Service[] = [
      {
        name: "Web Development",
        description:
          "Frontend and fullstack development with technologies including React, React Native, Vue, Node, Python, Chart.js, and Google Maps API",
        price: "$30 / h",
      },
      {
        name: "WordPress Development",
        description: "Website development using a CMS like WordPress",
        price: "$25 / h",
      },
      {
        name: "CRM Integration and Deployment",
        description: "Integration of open-source license-free CRM system (Espocrm)",
        price: "From $600",
      },
      {
        name: "Chat Bot",
        description: "Develop chat bots for Telegram and Instagram",
        price: "From $500",
      },
      {
        name: "AI Agent",
        description:
          "Develop systems based on AI agents, using different models (OpenAI, Gemini, DeepSeek, others by request)",
        price: "From $500",
      },
      {
        name: "Automation",
        description:
          "Automate business flows using the n8n automation service on a private server",
        price: "From $100",
      },
    ];

    const onContactClick = async () => {
      await openModal(ModalKey.HireForm);
    };

    return {
      services,
      onContactClick,
    };
  },
});
</script>

<style lang="scss" scoped>
.description {
  color: var(--white-600);
}

.services-table-container {
  .services-table {
    border-collapse: separate;
    border-spacing: 0;

    th {
      font-weight: 600;
      font-size: 1.1rem;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .service-row {
      transition: background-color 0.3s ease;
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);

      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
      }

      &:last-child {
        border-bottom: none;
      }

      td {
        vertical-align: middle;
      }
    }

    .service-description {
      line-height: 1.6;
    }
  }
}

.contact-section {
  background: rgba(170, 0, 200, 0.1);
  border: 1px solid rgba(170, 0, 200, 0.2);
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .services-view {
    .services-table-container {
      .services-table {
        th,
        td {
          padding: 0.75rem 0.5rem;
          font-size: 0.9rem;
        }
      }
    }
  }
}

@media (max-width: 640px) {
  .services-view {
    .services-table-container {
      .services-table {
        th,
        td {
          padding: 0.5rem 0.25rem;
          font-size: 0.85rem;

          &:first-child {
            padding-left: 1rem;
          }

          &:last-child {
            padding-right: 1rem;
          }
        }

        th:nth-child(2),
        td:nth-child(2) {
          width: 50%;
        }

        th:nth-child(3),
        td:nth-child(3) {
          width: 25%;
          text-align: right;
        }
      }
    }
  }
}
</style>

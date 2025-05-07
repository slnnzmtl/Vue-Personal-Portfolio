<template>
  <ModalWindow name="ModalKey.SkillCard" @close="closeModal">
    <div class="skill-card-modal-glass">
      <div class="skill-card-modal">
        <div class="flex gap-4 items-center mb-4">
          <div class="skill-card-modal-icon">
            <div class="icon-placeholder">
              <SIcon :name="skill?.icon" />
            </div>
          </div>
          <div class="skill-card-modal-title">
            {{ skill?.title }}
          </div>
        </div>
        <div class="skill-card-modal-description">
          {{ skill?.description }}
        </div>
        <div class="skill-card-modal-strategies">
          <div
            class="skill-card-modal-strategy"
            v-for="strategy in skill?.strategies"
            :key="strategy"
          >
            <span class="bullet-icon" aria-hidden="true">•</span>
            <span>{{ strategy }}</span>
          </div>
        </div>
      </div>
    </div>
  </ModalWindow>
</template>

<script lang="ts">
import ModalWindow from "@/components/ui/ModalWindow.vue";
import GlassMaterial from "@/components/ui/GlassMaterial.vue";
import { defineComponent, computed } from "vue";
import productDeliverySteps from "@/assets/product-delivery-steps.json";
import SIcon from "@/components/ui/SIcon.vue";
import { IconName } from "@/types/icons";

interface Skill {
  id: string;
  icon: IconName;
  title: string;
  description: string;
  strategies: string[];
}

export default defineComponent({
  name: "SkillCardModal",
  components: {
    ModalWindow,
    GlassMaterial,
    SIcon,
  },
  emits: ["close"],
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props, { emit }) {
    const closeModal = () => {
      emit("close");
    };

    const skill = computed<Skill | undefined>(() => {
      return productDeliverySteps.find((step) => step.id === props.id) as
        | Skill
        | undefined;
    });

    return {
      closeModal,
      skill,
    };
  },
});
</script>

<style scoped>
.skill-card-modal-glass {
  max-width: 100%;
}

.skill-card-modal {
  padding: 2.5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 80vh;
}

.skill-card-modal-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}

.skill-card-modal-icon svg {
  width: 4rem;
  height: 4rem;
}

.skill-card-modal-title {
  font-size: 2rem;
  font-weight: 700;
  text-align: left;
  width: 100%;
  color: var(--color-text-primary);
}

.skill-card-modal-description {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  color: var(--color-text-secondary);
  max-width: 38rem;
  text-align: left;
}

.skill-card-modal-strategies {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
}

.skill-card-modal-strategy {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  background-color: var(--color-background-secondary, rgba(255, 255, 255, 0.08));
  border-radius: 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-text-primary);
  transition: background 0.2s;
}

.skill-card-modal-strategy:hover {
  background-color: var(--color-background-secondary-hover, rgba(255, 255, 255, 0.15));
}

.bullet-icon {
  font-size: 1.5rem;
  color: var(--color-accent, #00eaff);
  line-height: 1;
  margin-top: 0.1em;
}

.icon-placeholder {
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 600px) {
  .skill-card-modal-glass {
    max-width: 98vw;
    margin: 1.5rem auto;
    border-radius: 1rem;
  }
  .skill-card-modal {
    padding: 1.25rem 0.5rem 1rem 0.5rem;
  }
  .skill-card-modal-title {
    font-size: 1.3rem;
  }
  .skill-card-modal-description {
    font-size: 1rem;
  }
  .skill-card-modal-strategy {
    font-size: 0.95rem;
    padding: 0.5rem 0.5rem;
  }
}
</style>

<template>
  <ModalWindow name="ModalKey.HireForm" @close="closeModal">
    <div
      class="consultation-form-modal flex flex-col gap-4 items-left justify-center max-w-[100vw]"
    >
      <h2 class="form-title text-2xl font-bold" v-if="!showConfirmation">
        {{ title }}
      </h2>
      <p class="form-description" v-if="!showConfirmation">
        {{ description }}
      </p>
      <form v-if="!showConfirmation" class="form-container" @submit="submitForm">
        <div class="grid md:gap-2 md:grid-cols-2">
          <InputField
            ref="nameInputRef"
            id="name"
            name="name"
            label="Name"
            type="text"
            required
            v-model="formData.name"
            :disabled="isLoading"
          />

          <InputField
            id="email"
            label="Email"
            type="email"
            required
            v-model="formData.email"
            :disabled="isLoading"
          />
        </div>

        <TextareaField
          id="message"
          type="textarea"
          label="Your message here..."
          v-model="formData.message"
          :disabled="isLoading"
        />
        <div class="flex items-center gap-2 mt-4">
          <SButton type="submit" variant="primary" class="mt-0" :disabled="isLoading">
            <span v-if="!isLoading">Submit</span>
            <span v-else>Submitting...</span>
          </SButton>
          <LoadingIndicator v-if="isLoading" size="sm" />
        </div>
      </form>
      <div v-else class="confirmation-message text-green-600 text-lg py-8 text-center">
        Thank you! Your consultation request has been submitted.<br />
        I will get back to you as soon as possible.
      </div>
      <p class="form-footer" v-if="!showConfirmation">
        By submitting this form, you agree to our
        <a href="/privacy-policy" class="form-link">Privacy Policy</a>.
      </p>
    </div>
  </ModalWindow>
</template>

<script lang="ts">
import InputField from "@/components/ui/InputField.vue";
import ModalWindow from "@/components/ui/ModalWindow.vue";
import TextareaField from "@/components/ui/TextareaField.vue";
import DateTimeInput from "@/components/ui/DateTimeInput.vue";
import LoadingIndicator from "@/components/ui/LoadingIndicator.vue";
import { defineComponent, reactive, ref, onMounted, nextTick } from "vue";
import SButton from "@/components/ui/buttons/SButton.vue";

export default defineComponent({
  name: "ConsultationFormModal",
  components: {
    ModalWindow,
    InputField,
    TextareaField,
    DateTimeInput,
    LoadingIndicator,
    SButton,
  },
  props: {
    title: {
      type: String,
      default: "Book a free strategy session",
    },
    description: {
      type: String,
      default:
        "Please fill this form to schedule a consultation. I will get back to you as soon as possible.",
    },
    prefill: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: ["close"],
  setup(props, { emit }) {
    const nameInputRef = ref<InstanceType<typeof InputField> | null>(null);
    
    const formData = reactive({
      name: props.prefill?.name || "",
      email: props.prefill?.email || "",
      scheduledTime: props.prefill?.scheduledTime || "",
      message: props.prefill?.message || "",
    });

    const showConfirmation = ref(false);
    const isLoading = ref(false);

    const closeModal = (result: boolean | null) => {
      emit("close", result);
      showConfirmation.value = false;
    };

    const submitForm = async (event: Event) => {
      event.preventDefault();
      isLoading.value = true;
      try {
        const response = await fetch(
          "https://n8n.slnnzmtl.xyz/webhook/consultation-booking-form",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
              service: props.prefill?.service || "",
              source: "main-site",
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to submit form");
        }
        showConfirmation.value = true;
      } catch (error) {
        console.error("Form submission error:", error);
        closeModal(false);
      } finally {
        isLoading.value = false;
      }
    };

    onMounted(async () => {
      await nextTick();
      if (nameInputRef.value && nameInputRef.value.$el) {
        const input = nameInputRef.value.$el.querySelector('input');
        if (input) {
          input.focus();
        }
      }
    });

    return {
      nameInputRef,
      formData,
      closeModal,
      submitForm,
      showConfirmation,
      isLoading,
      title: props.title,
      description: props.description,
    };
  },
});
</script>

<style lang="scss" scoped>
.consultation-form-modal {
  padding: 2rem;
  width: 600px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.form-group {
  margin-bottom: 0.5rem;
}

.confirmation-message {
  margin-top: 1rem;
  color: green;
  font-weight: bold;
}
</style>

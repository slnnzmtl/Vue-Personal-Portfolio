<script lang="ts" setup>
import { Button, InputField, TextareaField, ContactsBar } from '@/components/ui';
import { ref } from 'vue';

const emit = defineEmits(['closeModal']);

const budget = ref('');
const projectDescription = ref('');
const contactName = ref('');
const contactEmail = ref('');
const contactPhone = ref('');

const submitForm = () => {
  console.log({
    budget: budget.value,
    projectDescription: projectDescription.value,
    contactName: contactName.value,
    contactEmail: contactEmail.value,
    contactPhone: contactPhone.value,
  });

  emit('closeModal');
};

const closeModal = () => {
  emit('closeModal');
};
</script>

<template>
  <div class="hire-form-modal flex flex-col gap-4 items-center">
    <h2 class="form-title">Hire Me</h2>
    <p class="">
      Please fill a form or contact me directly at
    </p>
    <ContactsBar class="mb-4" />

    <form class="form-container w-full" @submit.prevent="submitForm">
      <InputField
        label="Name"
        v-model="contactName"
        required
      />
      <InputField
        label="Email"
        v-model="contactEmail"
        type="email"
        required
      />
      <InputField
        label="Phone"
        v-model="contactPhone"
        type="tel"
      />
      <TextareaField
        label="Project Description"
        v-model="projectDescription"
        required
      />

      <div class="form-actions">
        <Button type="button" @click="closeModal" class="cancel-button">Cancel</Button>
        <Button type="submit" class="submit-button">Submit</Button>
      </div>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.hire-form-modal {
  padding: 2rem;
  width: 600px;
}

.form-title {
  font-size: 2rem;
  font-weight: bold;
}

.form-container {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-label {
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-input {
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: var(--cyan);
    box-shadow: 0 0 0 0.2rem rgba(0, 31, 63, 0.25);
  }

  &::placeholder {
    color: #999;
  }
}

textarea.form-input {
  min-height: 150px;
  resize: vertical;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}
</style>
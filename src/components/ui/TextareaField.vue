<script lang="ts" setup>
import { computed, defineProps } from 'vue';

const props = defineProps<{
  label: string;
  modelValue: string;
  placeholder?: string;
  required?: boolean;
}>();

const emit = defineEmits(['update:modelValue']);

const isInputFilled = computed(() => {
  return !!props.modelValue;
});
</script>

<template>
  <div class="form-group">
    <div class="input-container">
      <textarea
        :id="label"
        v-model="props.modelValue"
        class="form-input"
        :placeholder="placeholder"
        :required="required"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <label
        :for="label"
        :class="{ 'floating': isInputFilled || !!props.placeholder }"
        class="form-label"
      >
        {{ label }}
      </label>
    </div>
  </div>
</template>

<style scoped lang="scss">
.form-group {
  position: relative;
  margin-bottom: 1.5rem;
}

.input-container {
  position: relative;
}

.form-label {
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  left: 1rem;
  pointer-events: none;
  transition: 0.2s ease all;
  font-size: 1rem;
  color: #999;
  background-color: transparent;
}

.form-input {
  padding: 1rem;
  padding-top: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  width: 100%;
  box-sizing: border-box;
  resize: vertical;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);

  &:focus {
    outline: none;
    border-color: var(--cyan);
    box-shadow: 0 0 0 0.2rem rgba(0, 31, 63, 0.25);
  }

  &:focus + .form-label {
    top: 1rem;
    font-size: 0.8rem;
    color: var(--cyan);
  }
}

  .floating {
    top: 1rem;
    font-size: 0.8rem;
    color: var(--cyan);
  }
</style> 
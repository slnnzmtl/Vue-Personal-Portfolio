<template>
  <div class="language-switcher">
    <button
      v-for="lang in availableLanguages"
      :key="lang"
      :class="['language-btn', { active: currentLanguage === lang }]"
      @click="switchLanguage(lang)"
    >
      {{ getLanguageLabel(lang) }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useTranslation } from '@/composables/useTranslation';

const { switchLanguage, getCurrentLanguage, getAvailableLanguages, initializeLanguage } = useTranslation();

const availableLanguages = getAvailableLanguages();
const currentLanguage = getCurrentLanguage();

const getLanguageLabel = (lang: string) => {
  const labels: Record<string, string> = {
    en: 'EN',
    uk: 'УКР'
  };
  return labels[lang] || lang.toUpperCase();
};

onMounted(() => {
  initializeLanguage();
});
</script>

<style lang="scss" scoped>
.language-switcher {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.language-btn {
  padding: 0.5rem 1rem;
  border: 1px solid var(--cyan);
  background: transparent;
  color: var(--cyan);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  font-weight: 500;

  &:hover {
    background: var(--cyan);
    color: var(--dark-bg);
  }

  &.active {
    background: var(--cyan);
    color: var(--dark-bg);
  }
}

@media (max-width: 768px) {
  .language-btn {
    padding: 0.375rem 0.75rem;
    font-size: 0.8125rem;
  }
}
</style>

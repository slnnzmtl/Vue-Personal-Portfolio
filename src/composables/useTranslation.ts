import { computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';

export function useTranslation() {
  const { t, locale, availableLocales } = useI18n();

  const switchLanguage = (lang: string) => {
    locale.value = lang;
    localStorage.setItem('preferred-language', lang);
  };

  const initializeLanguage = () => {
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && availableLocales.includes(savedLanguage)) {
      locale.value = savedLanguage;
      return;
    }

    const browserLanguage = navigator.language.split('-')[0];
    if (availableLocales.includes(browserLanguage)) {
      locale.value = browserLanguage;
      localStorage.setItem('preferred-language', browserLanguage);
    }
  };

  const currentLanguage = computed(() => {
    return locale.value
  });

  const getAvailableLanguages = () => availableLocales;

  return {
    t,
    locale,
    switchLanguage,
    initializeLanguage,
    currentLanguage,
    getAvailableLanguages
  };
}

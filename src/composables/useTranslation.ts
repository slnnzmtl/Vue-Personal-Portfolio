import { useI18n } from 'vue-i18n';

export function useTranslation() {
  const { t, locale, availableLocales } = useI18n();

  const switchLanguage = (lang: string) => {
    locale.value = lang;
    // Save to localStorage for persistence
    localStorage.setItem('preferred-language', lang);
  };

  const initializeLanguage = () => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('preferred-language');
    if (savedLanguage && availableLocales.includes(savedLanguage)) {
      locale.value = savedLanguage;
      return;
    }

    // Check browser language
    const browserLanguage = navigator.language.split('-')[0];
    if (availableLocales.includes(browserLanguage)) {
      locale.value = browserLanguage;
      localStorage.setItem('preferred-language', browserLanguage);
    }
  };

  const getCurrentLanguage = () => locale.value;

  const getAvailableLanguages = () => availableLocales;

  return {
    t,
    locale,
    switchLanguage,
    initializeLanguage,
    getCurrentLanguage,
    getAvailableLanguages
  };
}

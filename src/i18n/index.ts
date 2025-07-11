import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import uk from './locales/uk.json';

const messages = {
  en,
  uk
};

const i18n = createI18n({
  locale: 'en', // default locale
  fallbackLocale: 'en',
  messages,
  legacy: false, // use Composition API mode
});

export default i18n;

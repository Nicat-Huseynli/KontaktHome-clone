import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../../uti/i18n/translation/en.json';
import translationAZ from '../../uti/i18n/translation/az.json';
import translationRu from '../../uti/i18n/translation/ru.json'

const resources = {
  en: { translation: translationEN },
  az: { translation: translationAZ },
  ru: { translation: translationRu }
};

i18n
  .use(LanguageDetector) // Detects user's language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    fallbackLng: 'az', // Default language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;

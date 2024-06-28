import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import your translations
import translationEN from '../locales/en/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationHI from '../locales/hi/translation.json'

// Set up i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationEN },
      fr: { translation: translationFR },
      hi: { translation: translationHI }
      // Add more languages as needed
    },
    lng: 'en', // Default language
    fallbackLng: 'en', // Fallback language if translation is missing
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;

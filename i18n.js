import i18next from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our application",
      // Add more key-value pairs for English translations
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a nuestra aplicación",
      // Add more key-value pairs for Spanish translations
    },
  },
};

i18next
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18next;

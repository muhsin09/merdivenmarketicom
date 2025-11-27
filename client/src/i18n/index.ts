import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import trTranslations from "./locales/tr.json";
import enTranslations from "./locales/en.json";

// Dil tercihini localStorage'dan al veya varsayılan olarak Türkçe kullan
const getInitialLanguage = (): string => {
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage === "en" || savedLanguage === "tr") {
    return savedLanguage;
  }
  return "tr"; // Varsayılan dil Türkçe
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        translation: trTranslations,
      },
      en: {
        translation: enTranslations,
      },
    },
    lng: getInitialLanguage(),
    fallbackLng: "tr",
    interpolation: {
      escapeValue: false, // React zaten XSS koruması sağlıyor
    },
  });

export default i18n;


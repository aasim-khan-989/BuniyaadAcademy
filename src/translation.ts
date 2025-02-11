import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import XHR from "i18next-xhr-backend";

// Import your translation files
import translationEn from "./locales/en/translation.json";
import translationUr from "./locales/ur/translation.json";
import translationHi from "./locales/hi/translation.json";

i18n
  .use(XHR)
  .use(LanguageDetector)
  .init({
    debug: false,
    lng: "en", // Default language
    fallbackLng: "en",

    keySeparator: false,
    interpolation: {
      escapeValue: false,
    },

    resources: {
      en: {
        translations: translationEn,
      },
      ur: {
        translations: translationUr,
      },
      hi: {
        translations: translationHi,
      },
    },
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;

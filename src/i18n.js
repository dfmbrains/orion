import i18n from "i18next";
import {initReactI18next} from "react-i18next";

import translationRU from './assets/locales/ru/translation';
import translationEN from './assets/locales/en/translation';

// the translations
const resources = {
    ru: {
        translation: translationRU
    },
    en: {
        translation: translationEN
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: "ru",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
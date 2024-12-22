import { i18DetectionConfigs } from 'helpers/configs';
import { defaultAppLanguage } from 'helpers/constants';
import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import translationEn from './translationEn.json';
import translationRu from './translationRu.json';
import translationZh from './translationZh.json';

const resources = {
  ru: {
    translation: translationRu,
  },
  en: {
    translation: translationEn,
  },
  zh: {
    translation: translationZh,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ru', 'en', 'zh'],
    fallbackLng: defaultAppLanguage,
    detection: i18DetectionConfigs,
    resources,
  });

export default i18n;

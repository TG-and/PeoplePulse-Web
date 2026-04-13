import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import all translation files
import en from './locales/en.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import ms from './locales/ms.json';
import id from './locales/id.json';
import th from './locales/th.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';
import de from './locales/de.json';
import ru from './locales/ru.json';
import hi from './locales/hi.json';
import es from './locales/es.json';
import pt from './locales/pt.json';

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  ja: { translation: ja },
  ms: { translation: ms },
  id: { translation: id },
  th: { translation: th },
  ar: { translation: ar },
  fr: { translation: fr },
  de: { translation: de },
  ru: { translation: ru },
  hi: { translation: hi },
  es: { translation: es },
  pt: { translation: pt },
};

// Get saved language from localStorage before init
const getSavedLanguage = () => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('i18nextLng') || 'en';
  }
  return 'en';
};

const savedLang = getSavedLanguage();

// Set document direction based on language
if (typeof document !== 'undefined') {
  const rtlLanguages = ['ar'];
  document.documentElement.dir = rtlLanguages.includes(savedLang) ? 'rtl' : 'ltr';
  document.documentElement.lang = savedLang;
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang, // Use saved language or default to English
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

// Listen for language changes and update document direction
i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    const rtlLanguages = ['ar'];
    document.documentElement.dir = rtlLanguages.includes(lng) ? 'rtl' : 'ltr';
    document.documentElement.lang = lng;
  }
});

export default i18n;

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'zh', name: '中文', flag: '🇨🇳', dir: 'ltr' },
  { code: 'ja', name: '日本語', flag: '🇯🇵', dir: 'ltr' },
  { code: 'ms', name: 'Bahasa Melayu', flag: '🇲🇾', dir: 'ltr' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩', dir: 'ltr' },
  { code: 'th', name: 'ไทย', flag: '🇹🇭', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr' },
  { code: 'hi', name: 'हिन्दी', flag: '🇮🇳', dir: 'ltr' },
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr' },
  { code: 'pt', name: 'Português', flag: '🇵🇹', dir: 'ltr' },
];

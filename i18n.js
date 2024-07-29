import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const customBackendLoader = {
  type: 'backend',
  init: (services, backendOptions, i18nextOptions) => {},
  read: (language, namespace, callback) => {
    const localPath = `/locales/${language}/${namespace}.json`;
    const fallbackPath = `https://zrdevelopers.github.io/minum-kopi/locales/${language}/${namespace}.json`;

    fetch(localPath)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Local path not found');
      })
      .then((data) => callback(null, data))
      .catch(() => {
        fetch(fallbackPath)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            throw new Error('Fallback path not found');
          })
          .then((data) => callback(null, data))
          .catch((error) => callback(error, false));
      });
  },
  create: (languages, namespace, key, fallbackValue) => {},
  write: (language, namespace) => {}
};

const i18nConfig = {
  fallbackLng: 'id',
  interpolation: {
    escapeValue: false
  },
  backend: {
    loadPath: '/locales/{{lng}}/{{ns}}.json'
  }
};

const isServer = typeof window === 'undefined';

i18n
  .use(customBackendLoader)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(i18nConfig)
  .then(() => {
    if (!isServer) {
      const language = localStorage.getItem('i18nextLng') || 'id';
      i18n.changeLanguage(language);
      i18n.on('languageChanged', (lng) => {
        localStorage.setItem('i18nextLng', lng);
      });
    }
  });

export default i18n;

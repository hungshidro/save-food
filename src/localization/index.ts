import i18next, {Callback} from 'i18next';
import {initReactI18next} from 'react-i18next';
import * as RNLocalize from 'react-native-localize';

import {ECountryCode} from 'enums';
import {EN_RESOURCE} from './locales/en';
// import {EN_RESOURCE} from './locales/en';
const arrLangs: string[] = [];
type languageDetectorType = {
  type:
    | 'backend'
    | 'logger'
    | 'languageDetector'
    | 'postProcessor'
    | 'i18nFormat'
    | 'formatter'
    | '3rdParty';
  async: boolean;
  detect: (cb: (value: string) => void) => void;
  init: () => void;
  cacheUserLanguage: () => void;
};

const getLocalize = async (callback: any) => {
  const localize = await RNLocalize.getLocales();
  const str = localize?.[0]?.languageCode || ECountryCode.EN;
  if (arrLangs.includes(str)) {
    callback(str);
  } else {
    callback(ECountryCode.EN);
  }
};

const languageDetector: languageDetectorType = {
  type: 'languageDetector',
  async: true,
  detect: async (callback: any) => {
    getLocalize(callback);
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

const initI18n = () => {
  i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      compatibilityJSON: 'v3',
      fallbackLng: ECountryCode.EN,
      lng: ECountryCode.EN,
      debug: true,
      resources: {
        en: {translation: EN_RESOURCE},
        ja: {translation: EN_RESOURCE},
      },
    });
};

export const changeLaguage = (languageKey: string, callback?: Callback) => {
  i18next.changeLanguage(languageKey, callback); // -> returns a Promise
};
export {initI18n};

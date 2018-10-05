import { CHANGE_LOCALE } from './constants';

export function changeLocale(languageLocale) {
  return {
    locale: languageLocale,
    type: CHANGE_LOCALE,
  };
}

import "server-only";
import type { Locale } from "./i18n-config";

const dictionaries = {
  en: () => import("./public/locales/en/common.json").then((module) => module.default),
  hy: () => import("./public/locales/hy/common.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    throw new Error(`No dictionary found for locale: ${locale}`);
  }
  return dictionaries[locale]();
};
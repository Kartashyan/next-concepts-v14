import "server-only";
import type { Locale } from "./i18n-config";


const dictionaries = {
  en: () => import("./public/locales/en/common.json").then((module) => module.default),
  hy: () => import("./public/locales/hy/common.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]()
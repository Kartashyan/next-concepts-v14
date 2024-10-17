import "server-only";
import type { Locale } from "./i18n-config";
import { permanentRedirect } from "next/navigation";

const dictionaries = {
  en: () => import("./public/locales/en/common.json").then((module) => module.default),
  hy: () => import("./public/locales/hy/common.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale) => {
  if (!dictionaries[locale]) {
    permanentRedirect("/en"); // Redirect to the default locale when the requested locale is not available
  }
  return dictionaries[locale]();
};
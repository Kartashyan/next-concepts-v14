import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { i18n } from '../../i18n-config';

type Translations = { [key: string]: string | Translations };

export const useTranslation = () => {
  const { lang } = useParams();
  const defaultLocale = i18n.defaultLocale;
  const [translations, setTranslations] = useState<Translations>({});

  useEffect(() => {
    const loadTranslations = async () => {
      const res = await fetch(`/locales/${lang || defaultLocale}/common.json`);
      const data = await res.json();
      setTranslations(data);
    };
    loadTranslations();
  }, [lang, defaultLocale]);

  const t = (key: string): string => {
    const keys = key.split('.');
    let result: Translations | string = translations;

    for (const k of keys) {
      if (typeof result === 'object' && result !== null && k in result) {
        result = result[k];
      } else {
        return key;
      }
      if (result === undefined) {
        return key;
      }
    }

    return typeof result === 'string' ? result : key;
  };

  return { t, locale: lang || defaultLocale };
};
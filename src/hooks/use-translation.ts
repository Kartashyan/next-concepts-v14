import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { i18n } from '../../i18n-config';

type Translations = { [key: string]: string };

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

  const t = (key: string) => translations[key] || key;

  return { t, locale: lang || defaultLocale };
};
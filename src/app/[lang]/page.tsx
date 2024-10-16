import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.scss";

interface HomePageProps {
  params: { lang: Locale };
}

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const dictionary = await getDictionary(params.lang);

  return {
    title: dictionary.homePage.title,
    description: dictionary.homePage.description,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{dictionary.homePage.title}</h1>
      <p className={styles.welcomeMessage}>{dictionary.homePage.welcomeMessage}</p>

      <nav className={styles.languageSwitcher}>
        {lang === "en" ? (
          <Link href={`/${"hy"}`} locale={false}>
            {dictionary.homePage.switchLang}
          </Link>
        ) : (
          <Link href={`/${"en"}`} locale={false}>
            {dictionary.homePage.switchLang}
          </Link>
        )}
      </nav>
    </main>
  );
}
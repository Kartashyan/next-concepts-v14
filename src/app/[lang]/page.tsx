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
    title: dictionary.home.title,
    description: dictionary.home.description,
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>{dictionary.home.title}</h1>
        <p className={styles.welcomeMessage}>{dictionary.home.welcomeMessage}</p>
        <nav className={styles.navbar}>
          {Object.entries<Record<string, string>>(dictionary).map(([key, value]) => (
            <Link key={key} href={`/${lang}/${key === "home" ? "" : key}`}>
              {value.title}
            </Link>
          ))}
        </nav>
      </div>
    </main>
  );
}
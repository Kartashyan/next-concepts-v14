import Navbar from "@/components/navbar";
import { getDictionary } from "../../../get-dictionary";
import { Locale } from "../../../i18n-config";
import styles from "./page.module.scss";

export default async function Home({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>{dictionary.title}</h1>
        <Navbar />
      </header>
      <main className={styles.main}>
        <div className={styles.container}>
          <h1>{dictionary.welcome}</h1>
          <p>{dictionary.description}</p>
        </div>
      </main>
      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
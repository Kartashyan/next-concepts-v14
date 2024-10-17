"use client";

import Link from "next/link";
import styles from "./page.module.scss";
import { usePathname } from "next/navigation";

export function Navbar({lang, switchLang}: {lang: string; switchLang: string}) {
  const fullPathname = usePathname()
  const pathName = fullPathname.replace(/^\/(en|hy)/, '');
  return (
    <nav className={styles.languageSwitcher}>
      {lang === "en" ? (
        <Link href={`/${"hy"}/${pathName}`} locale={false}>
          {switchLang}
        </Link>
      ) : (
        <Link href={`/${"en"}`} locale={false}>
          {switchLang}
        </Link>
      )}
    </nav>
  );
}

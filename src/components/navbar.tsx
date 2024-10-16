"use client";

import { useTranslation } from "@/hooks/use-translation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { i18n, Locale } from "../../i18n-config";
import styles from "./navbar.module.scss";

export default function Navbar() {
  const { t } = useTranslation();

  const pathname = usePathname();

  const redirectedPathname = (locale: Locale) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale;
    return segments.join("/");
  };

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">{t("home")}</Link>
        </li>
        <li>
          <Link href="/post/1">{t("dynamicPage")}</Link>
        </li>
        <li>
          <Link href="/users">{t("ssrPage")}</Link>
        </li>
        <li>
          <Link href="/isr">ISR Page</Link>
        </li>
      </ul>
      <div className={styles.actions}>
        {i18n.locales.map((locale) => {
          return (
            <Link
              href={redirectedPathname(locale)}
              key={locale}
              className={styles.langButton}
            >
              {locale}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

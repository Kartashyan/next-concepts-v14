import type { Metadata } from "next";
import localFont from "next/font/local";
import { i18n, type Locale } from "../../../i18n-config";
import "./globals.css";
import { getDictionary } from "../../../get-dictionary";
import styles from "./layout.module.scss";
import { Navbar } from "./navbar";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Multilingual App",
  description: "A minimalistic multilingual Next.js application",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);
  return (
    <html lang={params.lang}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <div className={styles.layout}>
          <header className={styles.header}>
          <Navbar lang={lang} switchLang={dictionary.home.switchLang} />
          </header>
          <main className={styles.main}>{children}</main>
          <footer className={styles.footer}>
            <p>© 2024 Next Concepts</p>
          </footer>
        </div>
      </body>
    </html>
  );
}

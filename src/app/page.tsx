import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Page</h1>
      </header>
      <main className={styles.main}></main>
      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  );
}

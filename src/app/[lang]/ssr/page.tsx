import Link from "next/link";
import styles from "./page.module.scss";

const fetchPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default async function Page({params}: {params: {lang: string}}) {
  const posts = await fetchPosts();
  return (
    <div className={styles.gridContainer}>
      {posts.map((post: { id: string; title: string; body: string }) => (
        <Link
          key={post.id}
          href={`/${params.lang}/ssr/${post.id}`}
          className={styles.postCard}
        >
          <p className={styles.postTitle}>{post.title}</p>
          <p className={styles.postBody}>{post.body}</p>
        </Link>
      ))}
    </div>
  );
}

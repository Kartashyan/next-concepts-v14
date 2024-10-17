import styles from "./page.module.scss";

const fetchPosts = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/`); // Next.js will cache this request (but this behavior will change in v15)
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default async function Page() {
  const posts = await fetchPosts();
  return (
    <div className={styles.gridContainer}>
      {posts.map((post: { id: string; title: string; body: string }) => (
        <div key={post.id} className={styles.postCard}>
          <p className={styles.postTitle}>{post.title}</p>
          <p className={styles.postBody}>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

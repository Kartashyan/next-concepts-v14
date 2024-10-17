import Link from "next/link";

export default async function Page({ params }: { params: { lang: string } }) {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"});
  const posts = await data.json();
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1rem",
        padding: "1rem",
        justifyContent: "center",
      }}
    >
      {posts.map((post: { id: string; title: string; body: string }) => (
        <Link key={post.id} href={`/${params.lang}/posts/${post.id}`}>
          <div>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

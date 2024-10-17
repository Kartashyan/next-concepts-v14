import React, { Suspense } from "react";
import { ClientSideTranslation } from "./client-side-translation";
import styles from "./page.module.scss";

const fetchPost = async (postId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    { next: { revalidate: 60 } }
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate slow network
  return response.json();
};

const PostDetails = async ({ postId }: { postId: string; lang: string }) => {
  const data = await fetchPost(postId);

  return (
    <div className={styles.postContainer}>
      <ClientSideTranslation />
      <h3 className={styles.postTitle}>{data.title}</h3>
      <p className={styles.postBody}>{data.body}</p>
    </div>
  );
};

const PostDetailsPage = ({
  params,
}: {
  params: { postId: string; lang: string };
}) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PostDetails postId={params.postId} lang={params.lang} />
    </Suspense>
  );
};

export default PostDetailsPage;

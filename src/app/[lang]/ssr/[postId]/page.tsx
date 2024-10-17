import React from "react";
import styles from "./page.module.scss";

const fetchPost = async (postId: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate slow network
  return response.json();
};

const PostDetailsPage = async ({
  params,
}: {
  params: { postId: string; lang: string };
}) => {
  const data = await fetchPost(params.postId);

  return (
    <div className={styles.postContainer}>
      <h3 className={styles.postTitle}>{data.title}</h3>
      <p className={styles.postBody}>{data.body}</p>
    </div>
  );
};

export default PostDetailsPage;

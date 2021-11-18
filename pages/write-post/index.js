import { useState } from "react";
import { useRouter } from "next/router";
import styles from "./WritePost.module.css";

const WritePost = () => {
  const router = useRouter();
  const initialValues = {
    title: "",
    body: "",
  };

  const [postData, setPostData] = useState(initialValues);

  const onChange = (event) => {
    setPostData({ ...postData, [event.target.id]: event.target.value });
  };

  const createPost = async (newPost) => {
    await fetch("https://isdi-blog-posts-api.herokuapp.com/posts", {
      method: "POST",
      body: JSON.stringify(newPost),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    createPost(postData);
    router.push("/");
  };

  return (
    <>
      <h1 className={styles.title}>Write a post</h1>
      <form className={styles.form} onSubmit={onSubmit}>
        <input
          className={styles.textinput}
          type="text"
          placeholder="Title"
          id="title"
          value={postData.title}
          onChange={onChange}
        />
        <textarea
          className={styles.textarea}
          placeholder="Your story"
          id="body"
          value={postData.body}
          onChange={onChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default WritePost;

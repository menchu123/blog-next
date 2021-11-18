import Head from "next/head";
import Link from "next/link";
import PostCard from "../components/PostCard/PostCard";
import styles from "./index.module.css";

const Home = ({ posts }) => (
  <div className={styles.container}>
    <Head>
      <title>Blog Next</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1>Posts</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <Link
            href={`/${post.id}`}
            key={post.id}
            passHref
            className={styles.postLinks}
          >
            <a>
              <PostCard post={post} />
            </a>
          </Link>
        ))}
      </ul>
    </main>
  </div>
);

export async function getServerSideProps() {
  const res = await fetch("https://isdi-blog-posts-api.herokuapp.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Home;

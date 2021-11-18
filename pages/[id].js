const PostPage = ({ post }) =>
  post ? (
    <>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </>
  ) : (
    ""
  );

export const getStaticPaths = async () => {
  const response = await fetch(
    "https://isdi-blog-posts-api.herokuapp.com/posts"
  );
  const posts = await response.json();
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async ({ params: { id } }) => {
  const response = await fetch(
    `https://isdi-blog-posts-api.herokuapp.com/posts/${id}`
  );
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
};

export default PostPage;

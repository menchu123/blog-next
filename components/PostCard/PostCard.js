import styles from "./PostCard.module.css";

const PostCard = ({ post }) => (
  <li key={post.id} className={styles.listItem}>
    <h3>{post.title}</h3>
    <div>{post.body}</div>
  </li>
);

export default PostCard;

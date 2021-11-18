/* eslint-disable @next/next/no-img-element */
import styles from "./PostCard.module.css";

const PostCard = ({ post }) => (
  <li key={post.id} className={styles.listItem}>
    <div className={styles.postdata}>
      <h3>{post.title}</h3>
      <div>{post.body}</div>
    </div>
    <div className={styles.postauthor}>
      <img
        src={
          post.userAvatar
            ? post.userAvatar
            : "https://www.clickz.com/wp-content/uploads/2016/03/anontumblr-300x271.png"
        }
        alt=""
        height="100"
        className={styles.postimage}
      />
      <span>{post.userName}</span>
    </div>
  </li>
);

export default PostCard;

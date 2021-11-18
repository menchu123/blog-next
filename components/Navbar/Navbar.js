import Link from "next/link";
import styles from "./Navbar.module.css";

const Navbar = () => (
  <ul className={styles.nav}>
    <Link href="/" passHref>
      <li className={styles.li}>See all posts</li>
    </Link>
    <Link href="/write-post" passHref>
      <li className={styles.li}>Write post</li>
    </Link>
  </ul>
);

export default Navbar;

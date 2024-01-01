// components/Navbar.js
import Link from "next/link";
import styles from "../styles/navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li className={styles.navItem}>
          <Link href="/">
            <div>Home</div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <div>About</div>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contacts">
            <div>Contacts</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



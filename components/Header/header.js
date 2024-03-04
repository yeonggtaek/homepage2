import React from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <img
        className={`${styles.logoContainer} ${styles.logo} logo`}
        src="bcit_logo.png"
        alt="BCIT Logo"
      />
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          <li className={router.pathname === "/" ? styles.active : ""}>
            <Link href="/">Home</Link>
          </li>
          <li className={router.pathname === "/about" ? styles.active : ""}>
            <Link href="/about">About</Link>
          </li>
          <li className={router.pathname === "/contact" ? styles.active : ""}>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <img
        className={`${styles.barContainer} ${styles.bar}`}
        src="bars.png"
        alt="Bar"
      />
    </header>
  );
}

import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import { useRouter } from "next/router";

export default function Header() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const router = useRouter();
  const showMenu = () => {
    setIsShowMenu(true);
  };
  const hideMenu = () => {
    setIsShowMenu(false);
  };
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
          <li className={router.pathname === "/About" ? styles.active : ""}>
            <Link href="/About">About</Link>
          </li>
          <li className={router.pathname === "/Contact" ? styles.active : ""}>
            <Link href="/Contact">Contact Us</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.menuWrap}>
        <img
          className={`${styles.barContainer} ${styles.bar}`}
          src="bars.png"
          alt="Bar"
        />
        <div className={styles.menu} onClick={showMenu}></div>
      </div>
      {isShowMenu && (
        <div className={styles.menuScreen}>
          <ul>
            <li className={router.pathname === "/" ? styles.active : ""}>
              <Link href="/">Home</Link>
            </li>
            <li className={router.pathname === "/About" ? styles.active : ""}>
              <Link href="/About">About</Link>
            </li>
            <li className={router.pathname === "/Contact" ? styles.active : ""}>
              <Link href="/Contact">Contact Us</Link>
            </li>
          </ul>
          <button onClick={hideMenu}>X</button>
        </div>
      )}
    </header>
  );
}
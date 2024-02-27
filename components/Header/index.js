import React from 'react';
import styles from './header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="bcit_logo.png" alt="BCIT Logo" className={`${styles.logo} logo`} />
      </div>
      <nav className={styles.nav}>
        <ul className={`${styles.navList}`}>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Contact Us</a></li>
        </ul>
      </nav>
      <div className={styles.barContainer}>
        <img src="bars.png" alt="Bar" className={styles.bar} />
      </div>
    </header>
  );
}

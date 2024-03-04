import React from "react";
import styles from "./Footer.module.css";

export default function footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <ul className={`${styles.navList}`}>
          <li>
            <a>Visit</a>
          </li>
          <li>
            <a>Apply now</a>
          </li>
          <li className={styles.logoWrap}>
            <img
              src="bcit_logo.png"
              alt="BCIT Logo"
              className={`${styles.logo} logo`}
            />
          </li>
          <li>
            <a>Events</a>
          </li>
          <li>
            <a>Careers</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

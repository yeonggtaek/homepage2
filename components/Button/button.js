import React from "react";
import styles from "./button.module.css";

export default function Button({ onClick, children, active }) {
  return (
    <button
      type="button"
      className={`${styles.button} ${active ? styles.active : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

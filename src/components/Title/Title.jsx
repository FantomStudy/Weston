import React from "react";
import styles from "./Title.module.css";

export default function Title({ title, desc }) {
  return (
    <div className={styles.title_container}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.desc}>{desc}</p>
    </div>
  );
}

import React from "react";
import styles from "./BlogCard.module.css";

export default function BlogCard({ title, desc, photo, link }) {
  return (
    <div className={styles.card}>
      <img src={photo} alt="photo" className={styles.photo} />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.desc}>{desc}</p>
      <a href={link} className={`a_btn outline`}>
        Read More
      </a>
    </div>
  );
}

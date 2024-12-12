import React from "react";
import styles from "./PopularCard.module.css";

export default function PopularCard({ bgPath, name }) {
  return (
    <div className={styles.card} style={{ backgroundImage: `url(${bgPath})` }}>
      <div className={styles.mask}>
        <p className={styles.card_name}>{name}</p>
      </div>
    </div>
  );
}

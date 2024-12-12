import React from "react";
import Title from "../../../components/Title/Title";
import styles from "./Area.module.css";
import { Areas } from "../data";

export default function Area() {
  return (
    <section>
      <Title
        title="AREAS OF EXPERTISE"
        desc="Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse."
      />
      <div className={styles.grid}>
        {Areas.map((area, index) => {
          return (
            <div
              key={index}
              className={styles.area}
              style={{ backgroundImage: `url('${area.path}')` }}
            >
              <p className={styles.name}>{area.name}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

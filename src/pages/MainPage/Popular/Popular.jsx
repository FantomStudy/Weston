import React from "react";
import styles from "./Popular.module.css";
import Title from "../../../components/Title/Title";
import PopularCard from "./PopularCard/PopularCard";

export default function Popular() {
  return (
    <section>
      <div className="container">
        <Title
          title="What You Area Looking For?"
          desc="Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse."
        />
        <div className={styles.wrapper}>
          <PopularCard bgPath="/Rectangle\ 10.png" name="Living House" />
          <PopularCard bgPath="/Rectangle\ 11.png" name="House Apprtment" />
          <PopularCard bgPath="/Rectangle\ 12.png" name="House Villa" />
          <PopularCard bgPath="/Rectangle\ 13.png" name="Office Floor" />
        </div>
      </div>
    </section>
  );
}

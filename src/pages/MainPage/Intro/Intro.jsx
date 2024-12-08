import React from "react";
import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={styles.block}>
        <h1 className={styles.title}>Trusted Real Estate Property for you</h1>
        <p className={styles.desc}>
          Looking for your dream house or property. Search here and select your
          best one from more than 1 million listing
        </p>
        <div className={styles.button_container}>
          <a href="#" className={`a_btn filled`}>
            Discover Properties
          </a>
          <a href="#" className={`a_btn no_line`}>
            Learn More
          </a>
        </div>
        <div className={styles.info_container}>
          <div className={styles.info_block}>
            <p className={styles.counter}>35+</p>
            <p className={styles.counter_desc}>YEARS IN BUSINESS</p>
          </div>
          <div className={styles.info_block}>
            <p className={styles.counter}>200+M</p>
            <p className={styles.counter_desc}>DEAL VOLUME IN PAST 12 MONTHS</p>
          </div>
          <div className={styles.info_block}>
            <p className={styles.counter}>$1B+</p>
            <p className={styles.counter_desc}>IN TOTAL SALES</p>
          </div>
        </div>
      </div>

      <img src="/Frame 1.png" alt="" className={styles.intro_image} />
    </section>
  );
}

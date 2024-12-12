import React, { useState } from "react";
import { Reviews } from "../../data";
import styles from "./ClientSlider.module.css";

export default function ClientSlider() {
  const [slideNumber, setSlideNumber] = useState(0);

  return (
    <div className={styles.slider_container}>
      <div
        className={styles.slider_wrapper}
        style={{ transform: `translateX(calc(-${slideNumber}*100%))` }}
      >
        {Reviews.map((review, index) => {
          return (
            <div className={styles.review} key={index}>
              <img src={review.photo} alt="photo" className={styles.photo} />
              <div className={styles.block}>
                <p className={styles.quote}>{review.quote}</p>
                <div>
                  <p className={styles.name}>{review.name}</p>
                  <p className={styles.city}>{review.city}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button
        className={`${styles.slide_button} ${styles.left}`}
        onClick={() => {
          setSlideNumber(slideNumber - 1);
        }}
        disabled={slideNumber == 0 ? true : false}
        style={{ backgroundImage: "url('/Component 11.svg')" }}
      ></button>
      <button
        className={`${styles.slide_button} ${styles.right}`}
        onClick={() => {
          setSlideNumber(slideNumber + 1);
        }}
        disabled={slideNumber == Reviews.length - 1 ? true : false}
        style={{ backgroundImage: "url('/Component 10.svg')" }}
      ></button>
    </div>
  );
}

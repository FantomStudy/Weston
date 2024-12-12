import React, { useState } from "react";
import styles from "./ListingSlider.module.css";
import { Slides } from "../../data";

export default function ListingSlider() {
  const [slideNumber, setSlideNumber] = useState(0);

  return (
    <>
      <div className={styles.slider_container}>
        <div
          className={styles.slider_wrapper}
          style={{ transform: `translateX(calc(-${slideNumber}*100%))` }}
        >
          {Slides.map((slide, index) => {
            return (
              <img
                src={slide}
                alt="slide"
                key={index}
                className={styles.slide}
              />
            );
          })}
        </div>
        <div className={styles.buttons}>
          <button
            onClick={() => {
              setSlideNumber(slideNumber - 1);
            }}
            disabled={slideNumber == 0 ? true : false}
            style={{ backgroundImage: "url('/Component 9.svg')" }}
          ></button>
          <button
            onClick={() => {
              setSlideNumber(slideNumber + 1);
            }}
            disabled={slideNumber == Slides.length - 1 ? true : false}
            style={{ backgroundImage: "url('/Component 8.svg')" }}
          ></button>
        </div>
      </div>
    </>
  );
}

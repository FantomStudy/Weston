import React from "react";
import Title from "../../../components/Title/Title";
import styles from "./About.module.css";

export default function About() {
  return (
    <section>
      <div className="container">
        <Title
          title="Who We Are?"
          desc="Mauris primis turpis Laoreet magna felis mi amet quam enim curae. Sodales semper tempor dictum faucibus habitasse."
        />
        <div className={styles.about_wrapper}>
          <div className={styles.about_block}>
            <h3 className={styles.title}>
              MEET THE WESTON <br /> REAL ESTATE
            </h3>
            <p className={styles.desc}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Facilisis
              sem convallis magna nunc vitae eu commodo quisque. Facilisi mi eu
              est nisl. Tincidunt molestie elit quisque nulla. Mi sed est
              imperdiet ipsum quam pellentesque cras blandit urna. Consequat
              odio non vel habitant pellentesque egestas. Nam libero, accumsan
              amet quam ut orci tristique risus, parturient.
              <br />
              <br />
              Imperdiet mauris duis ut morbi non, a quam vehicula. Condimentum
              risus donec varius consectetur accumsan, metus. Sit at nec
              facilisis blandit sed adipiscing mauris tortor tincidunt. Viverra
              commodo id a dapibus enim. Felis, volutpat, diam duis posuere
              scelerisque mauris, venenatis nunc. Odio diam et, et a condimentum
              sed morbi. Vitae diam, sed suspendisse ullamcorper risus sit. Ac
              viverra urna gravida sed. Cursus auctor donec blandit neque, et.
              Id purus in suscipit orci. <br /> Eget pharetra nisl vel arcu.
              Aliquam lorem praesent lectus eget sapien.
            </p>
            <a href="#" className="a_btn outline">
              LEARN MORE
            </a>
          </div>
          <img src="/Rectangle 15.png" alt="" />
        </div>
      </div>
    </section>
  );
}

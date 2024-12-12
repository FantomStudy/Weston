import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_wrapper}>
          <div className={styles.logo_block}>
            <a href="#" className={styles.logo}>
              <img src="/WESTON.svg" alt="Logo" className={styles.logo_image} />
            </a>
            <p>
              Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit.
              Praesent
            </p>
          </div>
          <div className={styles.form_block}>
            <p>
              For exclusive news and market updates sign up for our newsletter.
            </p>
            <form action="#" className={styles.form}>
              <input
                type="email"
                placeholder="Enter Your Email Adress"
                className={styles.form_input}
              />
              <button type="submit" className={styles.footer_btn}>
                submit
              </button>
            </form>
          </div>
          <div className={styles.contact}>
            <h4 className={styles.footer_title}>Contact us</h4>
            <a href="tel:+75 81 2345 1234" className={styles.footer_link}>
              (+75) 81 2345 1234
            </a>
            <a href="mailto:Contact@domain.com" className={styles.footer_link}>
              Contact@domain.com
            </a>
            <p>
              Ubud No.88, New York <br /> USA, Renon, New York
            </p>
          </div>
          <div className={styles.follow}>
            <h4 className={styles.footer_title}>Follow us</h4>
            <div className={styles.follow_wrapper}>
              <a href="#" className={styles.social}>
                <img
                  src="/akar-icons_facebook-fill.svg"
                  alt="facebook"
                  className={styles.social_logo}
                />
              </a>
              <a href="#" className={styles.social}>
                <img
                  src="/akar-icons_instagram-fill.svg"
                  alt="instagram"
                  className={styles.social_logo}
                />
              </a>
              <a href="#" className={styles.social}>
                <img
                  src="/akar-icons_linkedin-box-fill.svg"
                  alt="linkedin"
                  className={styles.social_logo}
                />
              </a>
              <a href="#" className={styles.social}>
                <img
                  src="/akar-icons_twitter-fill.svg"
                  alt="twitter"
                  className={styles.social_logo}
                />
              </a>
            </div>
          </div>
        </div>
        <p className={styles.copyright}>
          Copyright 2022 @weston all Right Riserved.
        </p>
      </div>
    </footer>
  );
}

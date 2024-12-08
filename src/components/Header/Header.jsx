import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.wrapper}>
          <a href="#" className={styles.logo}>
            <img src="/WESTON.svg" alt="Logo" className={styles.logo_image} />
          </a>
          <nav className={styles.nav}>
            <a href="#" className={styles.nav_item}>
              Home
            </a>
            <a href="#" className={styles.nav_item}>
              About
            </a>
            <a href="#" className={styles.nav_item}>
              Properties
            </a>
            <a href="#" className={styles.nav_item}>
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

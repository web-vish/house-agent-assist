import React from "react";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logoContainer}>
      <a href="/">
        <img src="https://houseful.co.uk/wp-content/themes/houseful/img/logo-houseful-new.svg" />
      </a>
    </div>
  );
}

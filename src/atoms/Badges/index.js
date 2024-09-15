import React from "react";
import styles from "./Badges.module.scss";

export default function Badges({ type, children, props }) {
  return (
    <div
      className={`${styles.badges} ${styles[type] || ""}`}
      {...props}
    >
      {children}
    </div>
  );
}

import React from "react";
import styles from "./Button.module.scss";

export default function Button({ type, children, className, ...props }) {
  const btnClsObj = {
    primary: "primary",
    secondary: "secondary",
    text: "text",
  };
  const btnClass = btnClsObj[type] || "primary";
  return (
    <button
      className={`${styles.btn} ${styles[btnClass] || ""} ${
        className || ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
}

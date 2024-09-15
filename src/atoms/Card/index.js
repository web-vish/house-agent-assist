import React from "react";
import styles from './Cards.module.scss';

export default function Card({ children, ...props }) {
  return (
    <section className={styles.cardContainer} tabIndex={0} {...props}>
      {children}
    </section>
  );
}

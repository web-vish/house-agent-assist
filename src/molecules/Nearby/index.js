import React from "react";
import styles from "./Nearby.module.scss";
import { FaSchool, FaTrain } from "react-icons/fa6";

export default function NearBy({ data }) {
  return (
    <ul className={styles.nearby}>
      {data.map((items, index) => (
        <li key={"nearby" + index}>
          {items.type === "school" ? (
            <FaSchool title="school" />
          ) : (
            <FaTrain title="tube" />
          )}{" "}
          {items.distance} {items.locationName}
        </li>
      ))}
    </ul>
  );
}

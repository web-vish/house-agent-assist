import React from "react";
import Badges from "../../atoms/Badges";

export default function LeaseDetails({ data }) {
  return (
    <ul>
      {data.map((item, index) => (
        <li key={"lease" + index}>
          <Badges type="badgeTag">{item}</Badges>
        </li>
      ))}
    </ul>
  );
}

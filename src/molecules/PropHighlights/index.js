import React from "react";
import { FaBath, FaBed, FaChair } from "react-icons/fa6";

export default function PropsHighlights({data:{
    bed="N/A",
    living="N/A",
    bath="N/A"
}}) {

  return (
    <ul>
      <li>
        <FaBed /> {bed}
      </li>
      <li>
        <FaChair /> {living}
      </li>
      <li>
        <FaBath /> {bath}
      </li>
    </ul>
  );
}

"use client";

import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

export default function ProductRate({ rate, count }) {
  return (
    <div className="flex">
      <Rating style={{ width: 100 }} value={rate} readonly />

      <span className="ml-2">{count} reviews</span>
    </div>
  );
}

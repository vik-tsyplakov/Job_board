import React from "react";
import Rating from "./Rating";
import PublicationDate from "./PublicationDate";
import Bookmark from "./Bookmark";

export default function RatingDayBookmark() {
  return (
    <div className="flex">
      <Rating />
      <div className="block">
        <div className="flex justify-end">
          <Bookmark />
        </div>

        <PublicationDate />
      </div>
    </div>
  );
}

import React from "react";
import Rating from "./Rating";
import PublicationDate from "./PublicationDate";
import Bookmark from "./Bookmark";

export default function RatingDayBookmark() {
  return (
    <div className="flex h-[116px]">
      <Rating />
      <div className="block content-start">
        <div className="flex justify-end">
          <Bookmark />
        </div>
        <PublicationDate />
      </div>
    </div>
  );
}

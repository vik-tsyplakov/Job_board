import React from "react";
import Rating from "./Rating";
import PublicationDate from "./PublicationDate";
import Bookmark from "./Bookmark";

export default function RatingDayBookmark() {
  return (
    <div className="flex h-[116px]">
      <div className="min-w-[96px] lg:h-[18px] h-[16px] ml-[5px] lg:mr-[32px] mr-[10px] self-center	">
        <Rating />
      </div>
      <div className="block content-start">
        <div className="flex justify-end">
          <Bookmark />
        </div>
        <div className="items-end mt-[55px]">
          <PublicationDate />
        </div>
      </div>
    </div>
  );
}

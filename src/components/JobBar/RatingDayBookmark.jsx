import React from "react";
import Rating from "./Rating";
import PublicationDate from "./PublicationDate";
import Bookmark from "./Bookmark";

export default function RatingDayBookmark() {
  return (
    <div className="flex h-[20px] smmd:h-[116px] justify-between smmd:mb-0 mb-[7px]">
      <div className="min-w-[76px] smmd:min-w-[96px] lg:h-[18px] h-[27px] smmd:ml-[5px]  lg:mr-[32px] mr-[10px] self-center">
        <Rating />
      </div>
      <div className="block content-end">
        <div className="justify-end smmd:flex hidden">
          <Bookmark />
        </div>
        <div className="flex items-end mt-[2px] smmd:mt-[55px] ">
          <PublicationDate />
        </div>
      </div>
    </div>
  );
}

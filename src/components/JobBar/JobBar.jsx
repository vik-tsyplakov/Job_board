import React from "react";
import Content from "./Content";
import RatingDayBookmark from "./RatingDayBookmark";

export default function JobBar() {
  return (
    <div className="flex max-w-[1400px] sm:h-[164px] h-[206px] sm:bg-[#FFFFFF] bg-[#EFF0F5] rounded-lg px-[16px] py-[24px] mb-[8px] items-center sm:shadow-barlarge shadow-barsmall justify-between">
      <Content />
      <RatingDayBookmark />
    </div>
  );
}

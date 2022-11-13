import React from "react";
import Logo from "./Logo";
import MainContent from "./MainContent";
import RatingDayBookmark from "./RatingDayBookmark";

export default function Content({ title }) {
  return (
    <>
      <div className="flex my-auto">
        <div className="mr-[19px] lg:mr-[26px] mt-[32px] smmd:mt-0">
          <Logo />
        </div>
        <div className="block">
          <div className="smmd:hidden flex justify-between">
            <RatingDayBookmark />
          </div>
          <div className="">
            <MainContent title={title} />
          </div>
        </div>
      </div>
    </>
  );
}

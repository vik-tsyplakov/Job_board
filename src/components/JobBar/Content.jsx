import React from "react";
import Logo from "./Logo";
import MainContent from "./MainContent";
import RatingDayBookmark from "./RatingDayBookmark";

export default function Content(props) {
  return (
    <>
      <div className="flex my-auto">
        <div className="mr-[19px] lg:mr-[26px] mt-[32px] smmd:mt-0">
          <Logo img={props.img} />
        </div>
        <div className="block">
          <div className="smmd:hidden flex justify-between">
            <RatingDayBookmark createdAt={props.createdAt} />
          </div>
          <div className="">
            <MainContent
              title={props.title}
              name={props.name}
              address={props.address}
            />
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Content from "./Content";
import RatingDayBookmark from "./RatingDayBookmark";

function JobBar(props) {
  return (
    <div className="block smmd:flex max-w-[1400px] sm:h-[164px] h-[206px] sm:bg-[#FFFFFF] bg-[#EFF0F5] rounded-lg px-[16px] py-[24px] mb-[8px] items-center sm:shadow-barlarge shadow-barsmall justify-between">
      <div className="">
        <Content
          name={props.name}
          title={props.title}
          img={props.img}
          createdAt={props.createdAt}
          address={props.address}
        />
      </div>
      <div className="smmd:block hidden">
        <RatingDayBookmark createdAt={props.createdAt} />
      </div>
    </div>
  );
}

export default JobBar;

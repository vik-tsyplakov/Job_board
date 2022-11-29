import React from "react";
import Bookmark from "../src/../JobBar/Bookmark";
import shareIcon from "../../img/shareIcon.svg";

export default function Header() {
  return (
    <div className="header block">
      <div className="smmd:flex block justify-between items-center">
        <h2 className="text-[#3A4562] font-bold font-proxima text-[28px] tracking-[0.413333px] leading-[34px] pl-[6px] smmd:pl-[0px]">
          Job Details
        </h2>
        <div className="line max-w-[683px] h-[1px] mt-[8px] mb-[12px] bg-[#3A4562] mix-blend-normal opacity-[.13]"></div>
        <div className="save-and-share text-center flex pt-[2px] smmd:mb-[0px] mb-[32px]">
          <div className="save text-center ">
            <label className="bookmark flex cursor-pointer	">
              <Bookmark />
              <p className="font-roboto sm:text-[18px] text-[16px] text-[#3A4562] tracking-[-0.5625px] leading-[24px] pt-[2px] whitespace-nowrap">
                Save to my list
              </p>
            </label>
          </div>
          <div className="share flex ml-[30px] ">
            <button className="flex">
              <img
                width={18}
                height={20}
                className="pt-[5px]"
                src={shareIcon}
                alt="share"
              />
              <p className="ml-[7px] font-roboto sm:text-[18px] text-[16px] text-[#3A4562] tracking-[-0.5625px] leading-[24px] pt-[2px] active:underline active:underline-offset-2 ">
                Share
              </p>
            </button>
          </div>
        </div>
      </div>
      <div className="line hidden smmd:block min-w-[630px] h-[1px] mt-[8px] mb-[12px] bg-[#3A4562] mix-blend-normal opacity-[.13]"></div>
    </div>
  );
}

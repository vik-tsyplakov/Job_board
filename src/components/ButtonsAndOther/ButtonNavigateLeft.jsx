import React from "react";
import arrowLeftNavigate from "../../img/arrowLeftNavigate.svg";

export default function ButtonNavigateLeft(props) {
  return (
    <button className="py-[16px] pl-[23px] pr-[26px] bg-[#38456414] rounded-lg mix-blend-normal whitespace-nowrap font-proxima text-[#3A4562] text-center text-[12px] leading-[16px] font-semibold">
      <a href="" className="flex items-center">
        <img src={arrowLeftNavigate} className="mr-[19px] " alt="navigate" />
        {props.text}
      </a>
    </button>
  );
}

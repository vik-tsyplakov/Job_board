import React from "react";

export default function ButtonFunctional(props) {
  return (
    <button className="bg-[#384564] rounded-lg whitespace-nowrap py-[18px] px-[30px] font-proxima text-[12px] uppercase text-[#FFFFFF] leading-[16px] text-center font-semibold">
      <a href="">{props.text}</a>
    </button>
  );
}

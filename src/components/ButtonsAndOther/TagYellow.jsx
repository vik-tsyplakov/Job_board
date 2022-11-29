import React from "react";

export default function TagYellow(props) {
  return (
    <div className="tag flex justify-center items-center bg-[#ffd0002b] border border-[#FFCF00] rounded-lg w-[222px] h-[50px] font-bold font-proxima text-[#988B49] text-[16px] leading-[16px] tracking-[-0.457143px]">
      {props.text}
    </div>
  );
}

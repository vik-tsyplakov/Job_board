import React from "react";

export default function TagYellow(props) {
  let benefits = props.benefits;
  return (
    <>
      <ul className="flex">
        {benefits.map((benefit) => (
          <li
            key={benefit}
            className="flex justify-center items-center bg-[#ffd00039] border border-[#FFCF00] rounded-lg smmd:w-[222px] sm:w-[175px] w-[120px] h-[50px] lg:ml-[0px] lg:mr-[15px] ml-[7px] mr-[7px] font-bold font-proxima text-[#988B49] text-[16px] leading-[16px] tracking-[-0.457143px]"
          >
            <p>{benefit}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

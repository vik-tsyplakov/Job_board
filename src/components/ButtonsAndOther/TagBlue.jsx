import React from "react";

export default function TagBlue(props) {
  let employments = props.employments;
  return (
    <>
      <ul className="flex">
        {employments.map((employment) => (
          <li
            key={employment}
            className="flex justify-center items-center bg-[#a1b1db58] border border-[#55699e5e] rounded-lg smmd:w-[222px] sm:w-[175px] w-[120px] h-[50px] lg:ml-[0px] lg:mr-[15px] ml-[7px] mr-[7px] font-bold font-proxima text-[#55699E] text-[16px] leading-[16px] tracking-[-0.457143px]"
          >
            <p>{employment}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

import React from "react";

export default function TagBlue(props) {
  let benefits = props.benefits;

  console.log(benefits);

  return (
    <>
      <ul className="flex">
        {benefits.map((benefit) => (
          <li
            key={benefits.id}
            className=" flex justify-center items-center bg-[#a1b1db58] border border-[#55699e5e] rounded-lg w-[222px] h-[50px] font-bold font-proxima text-[#55699E] text-[16px] leading-[16px] tracking-[-0.457143px]"
          >
            <p>{benefit}</p>
          </li>
        ))}
      </ul>
    </>
  );

  /*
    <div className="tag flex justify-center items-center bg-[#a1b1db58] border border-[#55699e5e] rounded-lg w-[222px] h-[50px] font-bold font-proxima text-[#55699E] text-[16px] leading-[16px] tracking-[-0.457143px]">
      {props.benefits}
    </div> */
}

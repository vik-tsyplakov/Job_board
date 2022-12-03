import React from "react";
import TagBlue from "./../src/../ButtonsAndOther/TagBlue";

export default function Block4(props) {
  return (
    <div>
      <div className="block">
        <h2 className="text-[#3A4562] font-bold font-proxima text-[28px] tracking-[0.413333px] leading-[34px] pl-[6px] smmd:pl-[0px]">
          Additional info
        </h2>
        <div className="h-[1px] max-w-[701px] bg-[#3A4562] mix-blend-normal hidden sm:block opacity-[.13] mt-[9px] mb-[15px]"></div>
        <p className="font-roboto text-[18px] leading-[24px] tracking-[-0.5625px] text-[#3A4562] ">
          Employment type
        </p>
        <div className="tags flex justify-between ">
          <TagBlue benefits={props.benefits} id={props.id} />
        </div>
      </div>
    </div>
  );
}

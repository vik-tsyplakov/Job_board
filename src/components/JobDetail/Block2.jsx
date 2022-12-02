import React from "react";

export default function Block2(props) {
  return (
    <div>
      <h3 className="my-[10px] text-[#3A4562] font-roboto text-[18px] leading-[24px] trucking-[-0.5625px]">
        {props.description}
      </h3>
      <p className="my-[20px] font-proxima font-bold text-[20px] leading-[25px] trucking-[-0.625px] text-[#3A4562] ">
        Responsibilities
      </p>
      <h3 className="my-[10px] text-[#3A4562] font-roboto text-[18px] leading-[24px] trucking-[-0.5625px]">
        {props.description}
      </h3>
    </div>
  );
}

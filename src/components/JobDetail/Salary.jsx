import React from "react";

export default function Salary(props) {
  return (
    <div className="salary flex sm:flex-col flex-col-reverse">
      <p className="sm:mt-[0px] mt-[4px] font-proxima text-[#3A4562] tracking-[-0.625px] leading-[25px] font-bold text-[20px]">
        € {props.salary}
      </p>
      <p className="brutto text-[#3A4562] tracking-[-0.5625px] leading-[24px] text-[18px] font-roboto">
        Brutto, per year
      </p>
    </div>
  );
}

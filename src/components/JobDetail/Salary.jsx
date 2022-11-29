import React from "react";

export default function Salary(props) {
  return (
    <div className="salary flex sm:flex-col flex-col-reverse">
      <p className="sm:mt-[0px] mt-[4px] font-proxima text-[#3A4562] tracking-[-0.625px] leading-[25px] font-bold text-[20px]">
        € {props.salary}
      </p>
      <p className="brutto">Brutto, per year</p>
    </div>
  );
}

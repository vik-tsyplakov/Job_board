import React from "react";
import ButtonFunctional from "./../src/../ButtonsAndOther/ButtonFunctional";
import PublicationDate from "./../src/../JobBar/PublicationDate";
import Salary from "./Salary";

export default function Block1(props) {
  return (
    <>
      <div className="mt-[39px] mb-[32px] lg:block hidden">
        <ButtonFunctional text="Apply now" />
      </div>
      <div className="flex justify-between">
        <div className="block">
          <div className="title max-w-[500px] tracking-[-0.75px] text-[#3A4562] leading-[30px] text-[24px] font-bold font-proxima">
            <h1>{props.title}</h1>
          </div>
          <div className="flex justify-between items-center mt-[15px] mb-[4px]">
            <div className="posted sm:mt-[7px] mt-[0px] ml-[2px]">
              <PublicationDate />
            </div>
            <div className="salary block smmd:hidden">
              <Salary salary={props.salary} />
            </div>
          </div>
        </div>
        <div className="">
          <div className="salary smmd:block hidden">
            <Salary salary={props.salary} />
          </div>
        </div>
      </div>
    </>
  );
}

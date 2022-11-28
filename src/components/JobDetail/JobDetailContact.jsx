import React from "react";
import imgLocation from "../../img/location.svg";

export default function JobDetailContact(props) {
  let email = `mailto:${props.email}`;
  let phone = `tel:${props.phone}`;
  return (
    <div className=" flex justify-center max-w-[372px] mx-auto lg:mr-0">
      <div className="h-[436px] bg-[#2A3047] rounded-lg mt-[21px] lg:mt-[0px] ">
        <p className="pt-[31px] sm:px-[62px] px-[50px] mb-[14.5px] sm:w-[372px] w-[300px] font-proxima text-[#E7EAF0] sm:text-[20px] text-[18px] font-bold sm:leading-[25px] leading-[19px] sm:tracking-[-0.625px] tracking-[0.23619px] ">
          Department name. <br /> {props.name}.
        </p>
        <div className="flex sm:px-[62px] px-[50px] mb-[7px] ">
          <img
            className="inline-block mr-[8px] "
            src={imgLocation}
            alt="location"
          />
          <p className="text-[#E8EBF3] sm:text-[18px] text-[16px] tracking-[-0.5625px] leading-[24px] font-roboto">
            {props.address}
          </p>
        </div>
        <p className=" sm:px-[62px] px-[50px] mb-[7px] text-[#E8EBF3] sm:text-[18px] text-[16px] tracking-[-0.5625px] leading-[24px] font-roboto">
          <a href={phone}>{props.phone}</a>
        </p>
        <p className=" sm:px-[62px] px-[50px] text-[#E8EBF3] sm:text-[18px] text-[16px] tracking-[-0.5625px] leading-[24px] font-roboto">
          <a href={email}>{props.email}</a>
        </p>
        <div className="h-[218px] sm:mt-[38px] mt-[49px] rounded-b-lg bg-[#ffa]"></div>
      </div>
    </div>
  );
}

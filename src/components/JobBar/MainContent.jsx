import React from "react";
import { Link } from "react-router-dom";
import imgLocation from "../../img/location.svg";

//const setActive = ({ isActive }) => (isActive ? "active-link" : "");
let location = "Vienna, Austria";

export default function MainContent(props) {
  return (
    <div className="opacity-[1] text-left max-w-[737px] sm:opacity-[.8]">
      <h2 className="text-[#3A4562] font-proxima lg:text-[20px] sm:text-[16px] text-[18px] sm:font-bold font-normal not-italic sm:leading-[25px] leading-[24px] sm:tracking-[-0.625px] tracking-[-0.5625px] hover:underline overflow-hidden h-[52px] mb-[3px]">
        <Link to="detail">{props.title}</Link>
      </h2>
      <p className="font-proxima lg:text-[16px] sm:text-[14px] text-[16px] font-normal tracking-[.23619px] lg:leading-[25px] sm:leading-[15px] leading-[15px] not-italic text-[#878D9D]">
        Department name • {props.name}
      </p>
      <div>
        <img
          className="mr-[8px] inline-block"
          src={imgLocation}
          alt="location"
        />
        <p className="inline-block font-proxima lg:text-[16px] text-[14px] font-normal tracking-[.23619px] lg:leading-[25px] sm:leading-[15px] leading-[25px] not-italic text-[#878D9D]">
          {location}
        </p>
      </div>
    </div>
  );
}

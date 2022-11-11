import React from "react";
import imgLocation from "../../img/location.svg";
let title =
  "Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)";
let department = "Allgemeines Krankenhaus der Stadt Wien - AKH";
let location = "Vienna, Austria";

export default function MainContent() {
  return (
    <div className="opacity-[.8] text-left max-w-[737px]">
      <h2 className="text-[#3A4562] font-proxima lg:text-[20px] text-[16px] font-bold	not-italic leading-[25px] tracking-[-0.625px] hover:underline">
        <a href="/">{title}</a>
      </h2>
      <p className="font-proxima lg:text-[16px] text-[14px] font-normal tracking-[.23619px] lg:leading-[25px] leading-[15px] not-italic text-[#878D9D]">
        Department name • {department}
      </p>
      <div flex>
        <img
          className="mr-[8px] inline-block"
          src={imgLocation}
          alt="location"
        />
        <p className="inline-block font-proxima lg:text-[16px] text-[14px] font-normal tracking-[.23619px] lg:leading-[25px] leading-[15px] not-italic text-[#878D9D]">
          {location}
        </p>
      </div>
    </div>
  );
}

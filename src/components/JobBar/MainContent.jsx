import React from "react";
import imgLocation from "../../img/location.svg";
let title =
  "Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur Fachärztin für Arbeitsmedizin (m/w/d)";
let department = "Allgemeines Krankenhaus der Stadt Wien - AKH";
let location = "Vienna, Austria";

export default function MainContent() {
  return (
    <div className="opacity-[.8]">
      <h2 className="text-[#3A4562] font-proxima text-[20px] font-bold	not-italic leading-[25px] tracking-[-0.625px]">
        {title}
      </h2>
      <p>Department name • {department}</p>
      <div flex>
        <img
          className="mr-[8px] inline-block"
          src={imgLocation}
          alt="location"
        />
        <p className="inline-block">{location}</p>
      </div>
    </div>
  );
}

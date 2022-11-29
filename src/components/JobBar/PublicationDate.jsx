import React from "react";
let days = "2";

export default function PublicationDate(props) {
  return (
    <p className="font-proxima lg:text-[16px] text-[14px] font-normal tracking-[.23619px] lg:leading-[25px] leading-[15px] not-italic text-[#878D9D]">
      Posted {days} ago
    </p>
  );
}

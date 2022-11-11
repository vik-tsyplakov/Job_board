import React from "react";
import Logo from "./Logo";
import MainContent from "./MainContent";

export default function Content() {
  return (
    <>
      <div className="flex my-auto ">
        <div className="mr-[19px] lg:mr-[26px] mt-0">
          <Logo />
        </div>
        <MainContent />
      </div>
    </>
  );
}

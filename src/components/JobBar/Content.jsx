import React from "react";
import Logo from "./Logo";
import MainContent from "./MainContent";

export default function Content() {
  return (
    <>
      <div className="flex my-auto ">
        <Logo />
        <MainContent />
      </div>
    </>
  );
}

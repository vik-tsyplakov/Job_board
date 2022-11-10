import React from "react";
import imgBookmark from "../../img/bookmark.svg";

export default function Bookmark() {
  return (
    <div className=" w-[32px]">
      {/*<button className="bookmark" onClick={myFunc}>
        <img className="" src={imgBookmark} alt="Bookmark" />
  </button>*/}
      <div>
        <input className="bookmark" type="checkbox" />
      </div>
    </div>
  );
}

function myFunc() {
  alert("Make myFunc the pFunc... omg that was horrible i am so sorry");
}

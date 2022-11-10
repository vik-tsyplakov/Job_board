import React from "react";
import imgBookmark from "../../img/bookmark.svg";

export default function Bookmark() {
  return (
    <div className=" w-[32px]">
      <button>
        <img className="" src={imgBookmark} alt="Bookmark" />{" "}
      </button>
    </div>
  );
}

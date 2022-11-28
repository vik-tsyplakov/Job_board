import React from "react";

export default function Logo(props) {
  return (
    <div className="md:h-[85px] md:w-[85px] w-[66px] h-[66px]	">
      <div className="circle-image">
        <a href="/">
          <img src={props.img} alt="hospital" />
        </a>
      </div>
    </div>
  );
}

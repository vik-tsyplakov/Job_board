import React from "react";
import { useState } from "react";

export default function Bookmark() {
  const [isChecked, setIsChecked] = useState(true);

  return (
    <div className="w-[32px]">
      <label className="bookmark">
        <input
          type="checkbox"
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill={!isChecked ? "#70778B" : "none"}
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 8.00016C8 6.5274 9.19391 5.3335 10.6667 5.3335H21.3333C22.8061 5.3335 24 6.5274 24 8.00016V23.9936C24 25.1595 22.609 25.7639 21.7567 24.9682L16.9099 20.4428C16.3976 19.9645 15.6024 19.9645 15.0901 20.4428L10.2433 24.9682C9.39104 25.7639 8 25.1595 8 23.9936V8.00016Z"
            stroke={isChecked ? "#70778B" : "none"}
            strokeWidth="2"
          />
        </svg>
      </label>
    </div>
  );
}

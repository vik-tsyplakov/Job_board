import React from "react";
/*import img from "../Job_board/src/images/image1.png";*/
let img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcV59bu8IT6zTvs-NorDp8J8k1R-RBfJ53Ls4Q-1AWn_N6NsHiezne5kJ5jRhHKF_y3kY&usqp=CAU";

export default function Logo() {
  return (
    <div className="md:h-[85px] md:w-[85px] w-[66px] h-[66px]	">
      <div className="circle-image">
        <a href="/">
          <img src={img} alt="hospital" />
        </a>
      </div>
    </div>
  );
}

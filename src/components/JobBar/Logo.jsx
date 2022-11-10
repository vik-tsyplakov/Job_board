import React from "react";
/*import img from "../Job_board/src/images/image1.png";*/
let img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcV59bu8IT6zTvs-NorDp8J8k1R-RBfJ53Ls4Q-1AWn_N6NsHiezne5kJ5jRhHKF_y3kY&usqp=CAU";

export default function Logo() {
  return (
    <div className="mr-[19px] md:mr-[26px] md:h-[66]  mt-0 w-[85px] h-[85px]	">
      <div className="circle-image">
        <a href="#">
          <img src={img} alt="hospital" />
        </a>
      </div>
    </div>
  );
}

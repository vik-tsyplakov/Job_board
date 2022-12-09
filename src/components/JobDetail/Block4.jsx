import React from "react";
import TagYellow from "../ButtonsAndOther/TagYellow";
import TagBlue from "./../src/../ButtonsAndOther/TagBlue";

export default function Block4(props) {
  return (
    <>
      <div className="flex sm:flex-col flex-col-reverse">
        <div className="additionalInfo">
          <div className="block">
            <div className="justify-center lg:justify-start flex">
              <h2 className="text-[#3A4562] font-bold font-proxima text-[28px] tracking-[0.413333px] leading-[34px] ">
                Additional info
              </h2>
            </div>
            <div className="h-[1px] max-w-[701px] bg-[#3A4562] mix-blend-normal hidden lg:block opacity-[.13] mt-[9px] mb-[15px]"></div>
            <div className="justify-center lg:justify-start flex my-[12px]">
              <p className="font-roboto text-[18px] leading-[24px] tracking-[-0.5625px] text-[#3A4562] ">
                Employment type
              </p>
            </div>
            <div className="tags flex lg:justify-start justify-center mb-[25px]">
              <TagBlue employments={props.employments} />
            </div>
          </div>
          <div className="block">
            <div className="justify-center lg:justify-start flex my-[12px]">
              <p className="font-roboto text-[18px] leading-[24px] tracking-[-0.5625px] text-[#3A4562] ">
                Benefits
              </p>
            </div>
            <div className="tags flex lg:justify-start justify-center">
              <TagYellow benefits={props.benefits} />
            </div>
          </div>
        </div>
        <div className="attachedImages mb-[20px] sm:mb-[0px]">
          <div className="block">
            <div className="justify-center lg:justify-start flex mt-[50px]">
              <h2 className="text-[#3A4562] font-bold font-proxima text-[28px] tracking-[0.413333px] leading-[34px] ">
                Attached images
              </h2>
            </div>
            <div className="h-[1px] max-w-[701px] bg-[#3A4562] mix-blend-normal hidden lg:block opacity-[.13] mt-[9px] mb-[15px]"></div>
            <div className="flex justify-center lg:justify-start">
              <div className="max-w-[630px] flex justify-between mt-[15px] mb-[10px] overflow-x-scroll smmd:overflow-hidden	">
                <img
                  className="object-cover w-auto mx-[5px] rounded-[16px]"
                  src={props.img[0]}
                  alt="vacancy"
                />
                <img
                  className="object-cover w-auto mx-[5px] rounded-[16px]"
                  src={props.img[1]}
                  alt="vacancy"
                />
                <img
                  className="object-cover w-auto mx-[5px] rounded-[16px]"
                  src={props.img[2]}
                  alt="vacancy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

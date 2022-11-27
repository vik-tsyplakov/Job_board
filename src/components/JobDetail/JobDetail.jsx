import React from "react";
import "../src/../../JobDetail.css";

export default function JobDetail() {
  return (
    <>
      <div className="app-wrapper h-full w-full bg-[#FFFFFF]">
        <div className="container block smmd:flex max-w-[1377px] h-full px-[15px] pt-[24px] pb-[37px] items-center justify-between">
          <div className="job-detail__main max-w-[814px]">
            <p className="text-rose-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Similique asperiores doloremque natus ea sequi nostrum earum,
              soluta, fugit consectetur minima distinctio doloribus ad
              praesentium laborum repudiandae cum delectus maiores iusto
              adipisci labore est fuga laudantium, voluptatem aspernatur!
              Perspiciatis tempore suscipit sint ab, aspernatur maiores
              architecto eligendi ullam! At, beatae iusto.
            </p>
          </div>
          <div className="job-detail__contact max-w-[402px] min-w-[372px]">
            <div className=" h-[100px] bg-[#50d71e]">j</div>
          </div>
        </div>
      </div>
    </>
  );
}

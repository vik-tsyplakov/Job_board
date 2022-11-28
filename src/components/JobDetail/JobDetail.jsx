import React from "react";
import "../src/../../JobDetail.css";

export default function JobDetail() {
  return (
    <>
      <div className="app-wrapper h-full w-full bg-[#FFFFFF]">
        <div className="container block lg:flex max-w-[1377px] h-full px-[15px] pt-[24px] pb-[37px] justify-between  ">
          <div className="job-detail__main lg:max-w-[814px]  max-w-full  ">
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
          <div className="job-detail__contact flex justify-center max-w-[372px] sm:mx-auto">
            <div className="h-[436px] bg-[#2A3047]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
              labore ipsum quos repudiandae nihil repellat pariatur id sit eius
              corporis reiciendis odio vel magnam voluptatibus doloremque,
              temporibus veniam nesciunt voluptates fugiat porro? Aperiam
              reiciendis molestiae enim harum est ratione maxime quis,
              perferendis explicabo aut tenetur error, eius accusamus temporibus
              repudiandae?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import Header from "./Header";
import ButtonFunctional from "./../src/../ButtonsAndOther/ButtonFunctional";
import PublicationDate from "./../src/../JobBar/PublicationDate";
import Salary from "./Salary";

export default function JobDetailMain(props) {
  return (
    <div className="lg:max-w-[820px] max-w-full lg:mr-[5px]">
      <section className="header px-[10px] ">
        <Header />
      </section>
      <section className="block1 px-[10px]">
        <div className="mt-[39px] mb-[32px] lg:block hidden">
          <ButtonFunctional text="Apply now" />
        </div>
        <div className="flex justify-between">
          <div className="block">
            <div className="title max-w-[500px] tracking-[-0.75px] text-[#3A4562] leading-[30px] text-[24px] font-bold">
              <h1>{props.title}</h1>
            </div>
            <div className="flex justify-between items-center mt-[15px] mb-[14px]">
              <div className="posted sm:mt-[7px] mt-[0px] ml-[2px]">
                <PublicationDate />
              </div>
              <div className="salary block smmd:hidden">
                <Salary salary={props.salary} />
              </div>
            </div>
          </div>
          <div className="">
            <div className="salary smmd:block hidden">
              <Salary salary={props.salary} />
            </div>
          </div>
        </div>
      </section>

      <p className="text-rose-400">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
        asperiores doloremque natus ea sequi nostrum earum, soluta, fugit
        consectetur minima distinctio doloribus ad praesentium laborum
        repudiandae cum delectus maiores iusto adipisci labore est fuga
        laudantium, voluptatem aspernatur! Perspiciatis tempore suscipit sint
        ab, aspernatur maiores architecto eligendi ullam! At, beatae iusto.
      </p>
    </div>
  );
}

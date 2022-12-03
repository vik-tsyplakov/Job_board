import React from "react";
import Header from "./Header";
import Block1 from "./Block1";
import Block2 from "./Block2";
import Block3 from "./Block3";
import Block4 from "./Block4";

export default function JobDetailMain(props) {
  return (
    <div className="lg:max-w-[870px] max-w-full lg:mr-[5px]">
      <section className="header px-[10px] ">
        <Header />
      </section>
      <section className="block1And2 px-[10px]">
        <Block1 salary={props.salary} title={props.title} />
        <Block2 description={props.description} />
      </section>
      <section className="block3 sm:px-[10px] px-[10px]">
        <Block3 />
      </section>
      <section className="block4 px-[10px] mt-[84px] ">
        <Block4 benefits={props.benefits} id={props.id} />
      </section>
    </div>
  );
}

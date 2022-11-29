import React from "react";
import Header from "./Header";
import Block1 from "./Block1";

export default function JobDetailMain(props) {
  return (
    <div className="lg:max-w-[870px] max-w-full lg:mr-[5px]">
      <section className="header px-[10px] ">
        <Header />
      </section>
      <section className="block1 px-[10px]">
        <Block1 salary={props.salary} title={props.title} />
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

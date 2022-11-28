import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../src/../../JobDetail.css";
import JobDetailMain from "./JobDetailMain";

export default function JobDetail(props) {
  // Connection to API
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <div className="app-wrapper h-full w-full bg-[#FFFFFF]">
          <ul>
            {items.map((item) => (
              <li key={item.id} name={item.name} img={item.pictures[0]}>
                <div className="container block lg:flex max-w-[1377px] h-full px-[15px] pt-[24px] pb-[37px] justify-between  ">
                  <JobDetailMain />
                  <div className="jobDetail__contact flex justify-center max-w-[372px] sm:mx-auto">
                    <div className="h-[436px] bg-[#2A3047] rounded-lg mt-[21px] lg:mt-[0px] ">
                      <p>
                        Department name. University Hospital Giessen.{" "}
                        {item.name}
                      </p>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Error labore ipsum quos repudiandae nihil repellat
                      pariatur id sit eius corporis reiciendis odio vel magnam
                      voluptatibus doloremque, temporibus veniam nesciunt
                      voluptates fugiat porro? Aperiam reiciendis molestiae enim
                      harum est ratione maxime quis, perferendis explicabo aut
                      tenetur error, eius accusamus temporibus repudiandae?
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "../src/../../JobDetail.css";
import JobDetailContact from "./JobDetailContact";
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
                  <JobDetailContact
                    name={item.name}
                    address={item.address}
                    email={item.email}
                    phone={item.phone}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

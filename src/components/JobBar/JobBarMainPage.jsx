import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import JobBar from "./JobBar";

import ReactPaginate from "https://cdn.skypack.dev/react-paginate@7.1.3";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

const items = [...Array(20).keys()];

export default function JobBarMainPage() {
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

  function Items({ currentItems }) {
    return (
      <div className="items">
        {currentItems &&
          currentItems.map((item) => (
            <div>
              <h3>Item #{item}</h3>
            </div>
          ))}
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="App app-wrapper pt-[29px] h-full w-full">
        <div
          id="cont"
          className="container mx-auto max-w-[1436px] px-[9px] sm:px-[18px]"
        >
          <ul>
            {items.map((item) => (
              <li key={item.id} name={item.name} img={item.pictures[0]}>
                <JobBar
                  name={item.name}
                  title={item.title}
                  img={item.pictures[0]}
                  createdAt={item.createdAt}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

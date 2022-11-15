import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import JobBar from "./components/JobBar/JobBar";

//import PaginatedItems from "./components/Pagination/PaginatedItems";

function App() {
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
      <div className="App pt-[29px] h-full w-full">
        <div className="container mx-auto max-w-[1436px] px-[9px] sm:px-[18px]">
          <ul>
            {items.map((item) => (
              <li key={item.id} name={item.name}>
                <JobBar name={item.name} title={item.title} />
              </li>
            ))}
          </ul>
          {/*<div className="container mx-auto" id="container">
            
            <PaginatedItems />
            </div>*/}
        </div>
      </div>
    );
  }
}

export default App;

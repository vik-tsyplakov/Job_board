import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import JobBarMainPage from "./components/JobBar/JobBarMainPage";
import JobDetail from "./components/JobDetail/JobDetail";

function App(props) {
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
        <Routes>
          <Route path="/" element={<JobBarMainPage />} />
          <Route
            path="detail"
            /*{`detail/ + ${item.name}`}*/
            /*"detail"*/
            /*{`detail/${props.name}`}*/ element={<JobDetail />}
          />
        </Routes>
      </>
    );
  }
}
export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import JobBarMainPage from "./components/JobBar/JobBarMainPage";
import JobDetail from "./components/JobDetail/JobDetail";

//import PaginatedItems from "./components/Pagination/PaginatedItems";

function App() {
  return (
    <>
      {/*<div className="container mx-auto" id="container">
            <PaginatedItems />
            </div>*/}

      <Routes>
        <Route path="/" element={<JobBarMainPage />} />
        <Route path="detail" element={<JobDetail />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import JobBarMainPage from "./components/JobBar/JobBarMainPage";
import JobDetail from "./components/JobDetail/JobDetail";

//import PaginatedItems from "./components/Pagination/PaginatedItems";

function App() {
  return (
    <>
      <div className="App app-wrapper pt-[29px] h-full w-full">
        <div className="container mx-auto max-w-[1436px] px-[9px] sm:px-[18px]">
          {/*<div className="container mx-auto" id="container">
            <PaginatedItems />
            </div>*/}

          <Routes>
            <Route path="/" element={<JobBarMainPage />} />
            <Route path="detail" element={<JobDetail />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;

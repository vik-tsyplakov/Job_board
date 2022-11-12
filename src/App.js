import "./App.css";
import JobBar from "./components/JobBar/JobBar";
//import PaginatedItems from "./components/Pagination/PaginatedItems";

function App() {
  return (
    <div className="App pt-[29px] h-full w-full">
      <div className="container mx-auto max-w-[1436px] px-[9px] sm:px-[18px]">
        <JobBar />
        <JobBar />
        <JobBar />
        <JobBar />
        <JobBar />
        <JobBar />
        <JobBar />
        <JobBar />
        <JobBar />
        <JobBar />
        <JobBar />
        <JobBar />
        <div className="container mx-auto" id="container">
          {/*<PaginatedItems />*/}
        </div>
      </div>
    </div>
  );
}

export default App;

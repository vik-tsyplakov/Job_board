import "./App.css";
import JobBar from "./components/JobBar/JobBar";
import Pagination from "./components/Pagination/Pagination";

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
        <div className="container mx-auto">
          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;

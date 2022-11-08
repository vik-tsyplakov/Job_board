import "./App.css";
import JobBar from "./components/JobBar/JobBar";

function App() {
  return (
    <div className="App pt-[29px] h-full w-full">
      <div className="container mx-auto max-w-[1436px] px-[9px] sm:px-[18px]">
        <p className="font-roboto">Edit src and save to reload.</p>
        <h1
          className="text-3xl font-proxima font-bold underline text-red-100	
"
        >
          Job Board
        </h1>
        <JobBar />
        <JobBar />
      </div>
    </div>
  );
}

export default App;

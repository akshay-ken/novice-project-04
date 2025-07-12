// import { useRef, useState } from "react";
import { useState } from "react";
import { MainPage } from "./components/MainPage";
import { Alert } from "./components/Alert";

function App() {
  const [showAlert, setShowAlert] = useState(false);
  function handleShowAlert() {
    setShowAlert((prev) => !prev);
  }
  return (
    <>
      {/* add alert component here for testing */}
      {/* <div className=" flex flex-col justify-center items-center h-screen">
        <button
          onClick={handleShowAlert}
          className="bg-Green-300 p-2 w-fit rounded-2xl"
        >
          {showAlert ? "Hide" : "Show"} Alert
        </button>
        {showAlert && <Alert />}
      </div> */}
      <MainPage />
    </>
  );
}

export default App;

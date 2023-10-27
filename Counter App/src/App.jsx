import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const upShift = () => {
    setCount(count + 1);
  };

  const downShift = () => {
    if (count <= 0) {
      alert("Can't count negative!");
      return
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 className="border border-2 py-2" >{count}</h1>
      <br />
      <div className="container text-center">
        <div className="row-6">
          <div className="col mb-2 ">
            <button
              type="button"
              className="btn btn-outline-success"
              onClick={upShift}
            >
              Up Shift
            </button>
          </div>
          <div className="col mb-2">
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={downShift}
            >
              Down Shift
            </button>
          </div>
          <button 
            type="button" 
            className="btn btn-outline-dark" 
            onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

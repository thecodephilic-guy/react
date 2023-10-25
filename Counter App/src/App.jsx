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
      alert("Can't be negative! Press Reset");
      return
    }
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1 class="border border-2 py-2" >{count}</h1>
      <br />
      <div class="container text-center">
        <div class="row-6">
          <div class="col mb-2 ">
            <button
              type="button"
              class="btn btn-outline-success"
              onClick={upShift}
            >
              Up Shift
            </button>
          </div>
          <div class="col mb-2">
            <button
              type="button"
              class="btn btn-outline-danger"
              onClick={downShift}
            >
              Down Shift
            </button>
          </div>
          <button 
            type="button" 
            class="btn btn-outline-dark" 
            onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

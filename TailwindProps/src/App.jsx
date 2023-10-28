import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="tracking-wide bg-orange-500 p-4 rounded-xl">
        Tailwind Test
      </h1>
      <div className="grid-cols-2">
        <Card username="Sohail" />
        <Card />
      </div>
    </>
  );
}

export default App;

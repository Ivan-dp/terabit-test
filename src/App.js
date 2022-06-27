import React from "react";
import "./App.css";
import { Counter } from "./components";
import { interval } from "./consts";
import { Input } from "./components";

function App() {
  return (
    <div className="App">
      <Input />
      <Counter interval={interval} />
    </div>
  );
}

export default App;

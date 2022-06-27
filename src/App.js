import React, { useState } from "react";
import "./App.css";
import { Counter, Input } from "./components";

function App() {
  const [value, setValue] = useState(1);
  const [timer, setTimer] = useState(value);

  return (
    <div className="App">
      <Input
        inputFunc={(event) => {
          setValue(event.target.value);
          event.preventDefault();
        }}
        buttonFunc={(event) => {
          event.preventDefault();
          setTimer(value);
          console.log("Interval: " + value + " sec");
        }}
        value={value}
      />
      <Counter interval={timer * 1000} />
    </div>
  );
}

export default App;

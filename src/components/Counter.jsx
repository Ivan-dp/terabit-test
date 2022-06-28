import { React, useState } from "react";
import { PropTypes } from "prop-types";

const Counter = (props) => {
  Counter.propType = {
    interval: PropTypes.number.isRequired,
  };
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const interval = props.interval;

  let idСount = setTimeout(() => {
    if (toggle) {
      setCount(count + 1);
    }
  }, interval);

  function fn2() {
    setToggle(!toggle);
    clearTimeout(idСount);
  }

  return (
    <div className="counter">
      <h2>#{count}: текущий_счётчик</h2>
      <button onClick={fn2}>{toggle ? "Остановить" : "Запустить"}</button>
    </div>
  );
};

export { Counter };

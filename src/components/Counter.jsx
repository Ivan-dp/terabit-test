import { React, useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const Counter = (props) => {
  Counter.propType = {
    interval: PropTypes.number.isRequired,
  };
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const interval = props.interval;

  useEffect(() => {
    setTimeout(() => {
      toggle ? setCount(count + 1) : clearTimeout();
    }, interval);
  }, [count, toggle, interval]);

  return (
    <div className="counter">
      <h2>#{count}: текущий_счётчик</h2>
      <button onClick={() => setToggle(!toggle)}>
        {toggle ? "Остановить" : "Запустить"}
      </button>
    </div>
  );
};

export { Counter };

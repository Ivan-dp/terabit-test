import { React, useState } from "react";
import { PropTypes } from "prop-types";

const Counter = (props) => {
  Counter.propType = {
    interval: PropTypes.number.isRequired,
  };
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const interval = props.interval;

  let countId = setTimeout(() => {
    if (toggle) {
      setCount(count + 1);
    }
  }, interval);

  if (!toggle) {
    clearTimeout(countId);
  }

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

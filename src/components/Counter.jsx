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
    setTimeout(() => setCount(count + 1), interval);
  }, [count]);

  //   const action = function () {
  //     if (toggle) {
  //       const counter = setInterval(() => {
  //         setCount(count + 1);
  //       }, interval);
  //       console.log(count);
  //     } else {
  //       setCount(0);
  //       console.log(toggle);
  //       console.log(count);
  //     }
  //     return count;
  //   };
  console.log(count);

  return (
    <div>
      <div className="count">{count}</div>
      <button onClick={() => setToggle(!toggle)}>Остановить/Запустить</button>
    </div>
  );
};

export { Counter };

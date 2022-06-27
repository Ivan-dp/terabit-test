import { React, useState, useEffect } from "react";
import { PropTypes } from "prop-types";

const Counter = (props) => {
  Counter.propType = {
    interval: PropTypes.number.isRequired,
  };
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);
  const [btnName, setBtnName] = useState("Остановить");
  const interval = props.interval;

  useEffect(() => {
    setTimeout(() => {
      if (toggle) {
        setCount(count + 1);
      } else {
        setCount(0);
        console.log(count);
      }
    }, interval);

    if (toggle) {
      setBtnName("Остановить");
    } else {
      setBtnName("Запустить");
    }
  }, [count, toggle]);

  console.log(count);

  return (
    <div>
      <div className="count">{count}</div>
      <button onClick={() => setToggle(!toggle)}>{btnName}</button>
    </div>
  );
};

export { Counter };

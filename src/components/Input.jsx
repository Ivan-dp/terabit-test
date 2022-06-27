import React from "react";
import { PropTypes } from "prop-types";

const Input = (props) => {
  Input.propType = {
    inputFunc: PropTypes.func.isRequired,
    buttonFunc: PropTypes.func.isRequired,
    value: PropTypes.number.isRequired,
  };
  return (
    <>
      <h3>Введите интервал в секундах:</h3>
      <h4>Interval: {props.value} sec</h4>
      <form>
        <input
          type="text"
          placeholder="Введите интервал"
          onChange={props.inputFunc}
        />
        <button onClick={props.buttonFunc}>Enter</button>
      </form>
    </>
  );
};

export { Input };

import React from "react";
import { PropTypes } from "prop-types";

const Input = (props) => {
  Input.propType = {
    inputFunc: PropTypes.func.isRequired,
    buttonFunc: PropTypes.func.isRequired,
  };
  return (
    <>
      <h3>Введите интервал в секундах:</h3>
      <form>
        <input
          type="text"
          placeholder="Введите интервал"
          onChange={props.inputFunc}
        />
        <input type="button" value="Enter" onClick={props.buttonFunc} />
      </form>
    </>
  );
};

export { Input };

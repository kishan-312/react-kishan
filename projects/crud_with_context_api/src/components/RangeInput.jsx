import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const RangeInput = ({ label, name, type, min, max }) => {
  const { inputs, handleChange } = useContext(FormContext);

  return (
    <>
      <div className="d-flex flex-column ">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type={type}
          value={inputs[name]}
          className="form-range"
          id={name}
          name={name}
          onChange={handleChange}
          min={min}
          max={max}
        />
      </div>
    </>
  );
};

export default RangeInput;

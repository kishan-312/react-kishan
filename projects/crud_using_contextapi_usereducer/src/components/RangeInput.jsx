import { useContext } from "react";
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
          className="form-range"
          id={name}
          name={name}
          min={min}
          max={max}
          onChange={handleChange}
          value={inputs[name]}
        />
      </div>
    </>
  );
};

export default RangeInput;

import React, { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const CheckBox = ({ label, type, name, options = [] }) => {
  const { inputs, handleChange, errors } = useContext(FormContext);

  return (
    <>
      <div className=" form-check d-flex flex-column gap-1 p-0">
        <label htmlFor="" className="form-check-label">
          {label}
        </label>
        <div className=" d-flex gap-3">
          {options.map((ele) => (
            <div className=" form-check" key={ele}>
              <input
                type={type}
                name={name}
                id={ele}
                className="form-check-input"
                value={ele}
                onChange={handleChange}
                checked={
                  type === "radio"
                    ? inputs[name] === ele
                    : inputs[name]?.includes(ele)
                }
              />
              <label htmlFor={ele} className="form-check-label">
                {ele.charAt(0).toUpperCase() + ele.slice(1)}
              </label>
            </div>
          ))}
        </div>
        {errors[name] && <small className="text-danger">{errors[name]}</small>}
      </div>
    </>
  );
};

export default CheckBox;

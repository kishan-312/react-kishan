import React from "react";

const InputCheckbox = ({
  label,
  value,
  handleChange,
  options,
  type,
  name,
  errors,
}) => {
  return (
    <>
      <div className="d-flex flex-column gap-2 p-0 align-items-start">
        <label className=""> {label} </label>
        <div className=" d-flex gap-3 align-items-center">
          {options.map((option) => (
            <div
              className="form-check d-flex gap-2 align-items-center"
              key={option}
            >
              <input
                type={type}
                id={option}
                name={name}
                value={option}
                onChange={handleChange}
                className="form-check-input"
                checked={
                  type === "radio" ? value === option : value?.includes(option)
                }
              />
              <label htmlFor={option} className="form-check-label ">
                {option}
              </label>
            </div>
          ))}
        </div>
        <small style={{ color: "red" }}> {errors} </small>
      </div>
    </>
  );
};

export default InputCheckbox;

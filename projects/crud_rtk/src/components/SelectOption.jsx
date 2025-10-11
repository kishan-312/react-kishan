import React from "react";

const SelectOption = ({
  name,
  label,
  value,
  handleChange,
  options,
  optionsHiddenText,
  errors,
}) => {
  return (
    <>
      <div className="d-flex flex-column align-items-start">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <select
          name={name}
          id={name}
          className="form-select"
          value={value}
          onChange={handleChange}
        >
          <option hidden value="">
            {optionsHiddenText}
          </option>
          {options.map((option) => (
            <option value={option} key={option}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </option>
          ))}
        </select>
        <small style={{ color: "red" }}>{errors}</small>
      </div>
    </>
  );
};

export default SelectOption;

import React from "react";

const SelectDate = ({ label, value, handleChange, name, errors }) => {
  return (
    <>
      <div className="d-flex flex-column gap-2 align-items-start">
        <label className="form-label" htmlFor={name}>
          {label}
        </label>
        <input
          type="date"
          id={name}
          name={name}
          className="form-control"
          value={value}
          onChange={handleChange}
        />
        <small style={{ color: "red" }}>{errors}</small>
      </div>
    </>
  );
};

export default SelectDate;

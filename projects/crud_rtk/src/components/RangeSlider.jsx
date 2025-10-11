import React from "react";

const RangeSlider = ({ label, value, handleChange, name }) => {
  return (
    <>
      <div className="d-flex flex-column gap-2 align-items-start">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          name={name}
          id={name}
          type="range"
          className="form-range"
          min={0}
          max={100}
          value={value}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default RangeSlider;

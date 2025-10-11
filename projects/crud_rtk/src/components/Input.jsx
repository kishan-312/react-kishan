import React from "react";

const Input = ({
  name,
  label,
  placeholder,
  value,
  handleChange,
  type,
  errors,
}) => {
  return (
    <>
      <div className="d-flex flex-column gap-2 align-items-start">
        <label htmlFor={name} className=" form-label">
          {" "}
          {label}{" "}
        </label>
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          className="w-100 rounded p-2 form-control"
        />
        <small style={{ color: "red" }}> {errors} </small>
      </div>
    </>
  );
};

export default Input;

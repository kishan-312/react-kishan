import React from "react";

const Button = ({ label, type, classname, handleClick }) => {
  return (
    <>
      <button type={type} className={classname} onClick={handleClick}>
        {label}
      </button>
    </>
  );
};

export default Button;

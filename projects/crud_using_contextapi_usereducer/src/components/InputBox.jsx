import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const InputBox = ({ name, placeholder, label, type }) => {
  const { inputs, handleChange } = useContext(FormContext);

  return (
    <>
      <div className="d-flex flex-column ">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type={type}
          placeholder={`Enter Your ${placeholder} `}
          className="form-control"
          id={name}
          name={name}
          value={inputs[name]}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default InputBox;

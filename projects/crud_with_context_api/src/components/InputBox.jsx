import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const InputBox = ({ name, placeholder, label, type }) => {
  const { inputs, handleChange, errors } = useContext(FormContext);

  return (
    <>
      <div className="d-flex flex-column ">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type={type}
          placeholder={`Enter Your ${placeholder} `}
          value={inputs[name]}
          className="form-control"
          id={name}
          name={name}
          onChange={handleChange}
        />
        {errors[name] && <small className="text-danger">{errors[name]}</small>}
      </div>
    </>
  );
};

export default InputBox;

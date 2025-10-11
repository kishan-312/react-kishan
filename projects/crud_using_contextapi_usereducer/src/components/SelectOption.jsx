import { useContext } from "react";
import { FormContext } from "../contexts/FormContext";

const SelectOption = ({ label, name, optionHiddenText, options = [] }) => {
  const { inputs, handleChange } = useContext(FormContext);

  return (
    <>
      <div className="d-flex flex-column gap-1">
        <label htmlFor={name}>{label} </label>
        <select
          name={name}
          id={name}
          value={inputs[name]}
          onChange={handleChange}
          className="form-select"
        >
          <option value="" hidden>
            {optionHiddenText}
          </option>
          {options.map((ele) => (
            <option value={ele} key={ele}>
              {ele.charAt(0).toUpperCase() + ele.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectOption;

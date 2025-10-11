import { useSelector } from "react-redux";

const SelectOption = ({
  label,
  name,
  optionHiddenText,
  options = [],
  onchange,
}) => {
  const { inputs, errors } = useSelector((state) => state.crud);

  return (
    <>
      <div className="d-flex flex-column gap-1">
        <label htmlFor={name}>{label} </label>
        <select
          name={name}
          id={name}
          className="form-select"
          onChange={onchange}
          value={inputs[name]}
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
        {errors[name] && (
          <small className=" text-danger"> {errors[name]} </small>
        )}
      </div>
    </>
  );
};

export default SelectOption;

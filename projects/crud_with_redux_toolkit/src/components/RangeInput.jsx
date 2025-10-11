import { useSelector } from "react-redux";

const RangeInput = ({ label, name, type, min, max, onchange }) => {
  const { inputs } = useSelector((state) => state.crud);

  return (
    <>
      <div className="d-flex flex-column ">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <input
          type={type}
          className="form-range"
          id={name}
          name={name}
          min={min}
          max={max}
          onChange={onchange}
          value={inputs[name]}
        />
      </div>
    </>
  );
};

export default RangeInput;

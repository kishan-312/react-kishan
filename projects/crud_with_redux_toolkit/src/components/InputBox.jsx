import { useSelector } from "react-redux";

const InputBox = ({ name, placeholder, label, type, onchange }) => {
  const { inputs, errors } = useSelector((state) => state.crud);

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
          onChange={onchange}
          value={inputs[name]}
        />
        {errors[name] && (
          <small className=" text-danger"> {errors[name]} </small>
        )}
      </div>
    </>
  );
};

export default InputBox;

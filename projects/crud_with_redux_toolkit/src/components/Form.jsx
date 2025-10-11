import InputBox from "./InputBox";
import CheckBox from "./CheckBox";
import SelectOption from "./SelectOption";
import RangeInput from "./RangeInput";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { addData, setError, setInput } from "../features/crud/crudSlice";
import { useEffect } from "react";

const Form = () => {
  const { inputs, datas } = useSelector((state) => state.crud);
  console.log(inputs);
  console.log(datas);

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    let newInputs = { ...inputs };

    if (type === "checkbox" && name === "hobbies") {
      let updateHobbies = [...inputs.hobbies];

      if (checked) {
        updateHobbies.push(value);
      } else {
        updateHobbies = updateHobbies.filter((hobby) => hobby !== value);
      }

      newInputs = { ...newInputs, hobbies: updateHobbies };
    } else if (type === "range" && name === "experience") {
      newInputs = { ...newInputs, [name]: Number(value) };
    } else {
      newInputs = { ...newInputs, [name]: value };
    }

    dispatch(setInput(newInputs));
    dispatch(setError(validateForm(newInputs)));
  }

  function validateForm(userObj = inputs) {
    const {
      name,
      email,
      password,
      gender,
      hobbies,
      country,
      date,
      experience,
    } = userObj;

    const errors = {};

    if (name.trim() === "") {
      errors.name = "name is required";
    }

    if (email.trim() === "") {
      errors.email = "email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errors.email = "email is invalid";
    }

    if (password.trim() === "") {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "password must be at least 6 characters";
    }

    if (!gender) {
      errors.gender = "gender is required";
    }

    if (hobbies.length === 0) {
      errors.hobbies = "select atleast one hobby";
    }

    if (country === "") {
      errors.country = "country is required";
    }

    if (!date) {
      errors.date = "date is required";
    }

    console.log(experience);

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validateErrors = validateForm();

    if (Object.keys(validateErrors).length > 0) {
      dispatch(setError(validateErrors));
      return;
    }

    dispatch(addData());
  }

  useEffect(() => {
    localStorage.setItem("datas3", JSON.stringify(datas));
  }, [datas]);

  return (
    <>
      <form
        className=" w-50 mx-auto p-4 border border-1 rounded-2"
        onSubmit={handleSubmit}
      >
        <div className=" d-flex flex-column gap-3">
          <InputBox
            name={"name"}
            placeholder={"Name"}
            label={"Name :"}
            type={"text"}
            onchange={handleChange}
          />
          <InputBox
            name={"email"}
            placeholder={"Email"}
            label={"Email :"}
            type={"email"}
            onchange={handleChange}
          />
          <InputBox
            name={"password"}
            placeholder={"Password"}
            label={"Password :"}
            type={"password"}
            onchange={handleChange}
          />
          <CheckBox
            label={"Gender :"}
            name={"gender"}
            type={"radio"}
            options={["male", "female", "other"]}
            onchange={handleChange}
          />
          <CheckBox
            label={"Hobbies :"}
            name={"hobbies"}
            type={"checkbox"}
            options={["music", "sports", "travel"]}
            onchange={handleChange}
          />
          <SelectOption
            label={"Select Country :"}
            optionHiddenText={"--- Select Country ---"}
            options={["india", "russia", "usa", "england", "china", "canada"]}
            name={"country"}
            onchange={handleChange}
          />
          <InputBox
            label={"Select Date :"}
            name={"date"}
            type={"date"}
            onchange={handleChange}
          />
          <RangeInput
            label={"Experience :"}
            min={0}
            max={100}
            name={"experience"}
            type={"range"}
            onchange={handleChange}
          />
          <Button btnText={"Submit"} btnColor={"btn-primary"} type={"submit"} />
        </div>
      </form>
    </>
  );
};

export default Form;

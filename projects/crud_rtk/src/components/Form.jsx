import Input from "./Input";
import InputCheckbox from "./InputCheckbox";
import SelectOption from "./SelectOption";
import SelectDate from "./SelectDate";
import RangeSlider from "./RangeSlider";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  addDatas,
  editDatas,
  resetInputs,
  setErrors,
  setInputs,
} from "../features/crud/crudSlice";
import { useEffect } from "react";

const fields = [
  {
    type: "text",
    name: "name",
  },
  {
    type: "email",
    name: "email",
  },
  {
    type: "password",
    name: "password",
  },
];

const fieldsCheckInput = [
  {
    type: "radio",
    name: "gender",
    options: ["male", "female", "other"],
  },
  {
    type: "checkbox",
    name: "hobbies",
    options: ["music", "sports", "travel"],
  },
];

const country = ["india", "usa", "russia", "england", "china", "canada"];

const Form = ({ formTitle }) => {
  const { inputs, errors, datas, editId } = useSelector((state) => state.crud);
  console.log(datas);

  const dispatch = useDispatch();

  function handleChange(e) {
    //

    const { value, name, checked, type } = e.target;

    let newInputs = { ...inputs };

    if (type === "checkbox" && name === "hobbies") {
      let updateHobbies = [...inputs.hobbies];

      if (checked) {
        updateHobbies.push(value);
      } else {
        updateHobbies = updateHobbies.filter((hobby) => hobby !== value);
      }

      newInputs = { ...inputs, hobbies: updateHobbies };
    } else if (type === "range" && name === "experience") {
      newInputs = { ...inputs, [name]: Number(value) };
    } else {
      newInputs = { ...inputs, [name]: value };
    }

    dispatch(setInputs(newInputs));
    dispatch(setErrors(validateForm(newInputs)));
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

    let errors = {};

    if (name.trim() === "") {
      errors.name = "name is  required";
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
      errors.password = "password must at least 6 characters";
    }
    //

    if (!gender) {
      errors.gender = "gender is required";
    }

    if (hobbies.length === 0) {
      errors.hobbies = "select at least one hobby";
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

  function resetForm() {
    dispatch(resetInputs());
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validateErrors = validateForm();

    if (Object.keys(validateErrors).length > 0) {
      dispatch(setErrors(validateErrors));
      return;
    }

    if (editId) {
      dispatch(editDatas());
    } else {
      dispatch(addDatas());
    }
    resetForm();
  }

  useEffect(() => {
    localStorage.setItem("records", JSON.stringify(datas));
  }, [datas]);

  return (
    <>
      <form
        action=""
        className="text-center py-4 px-5 border border-1 rounded w-50 mx-auto shadow"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4">{formTitle}</h1>
        <div className=" d-grid gap-3">
          {fields.map((field) => (
            <Input
              label={field.name.charAt(0).toUpperCase() + field.name.slice(1)}
              placeholder={`Enter Your ${field.name}`}
              key={field.name}
              name={field.name}
              type={field.type}
              handleChange={handleChange}
              value={inputs[field.name]}
              errors={errors[field.name]}
            />
          ))}
          {fieldsCheckInput.map((field) => (
            <InputCheckbox
              label={field.name.charAt(0).toUpperCase() + field.name.slice(1)}
              options={field.options}
              type={field.type}
              key={field.name}
              handleChange={handleChange}
              name={field.name}
              value={inputs[field.name]}
              errors={errors[field.name]}
            />
          ))}
          <SelectOption
            label={"Select Country"}
            name={"country"}
            optionsHiddenText={"---Select Country---"}
            options={country}
            handleChange={handleChange}
            value={inputs.country}
            errors={errors.country}
          />
          <SelectDate
            label={"Select Date"}
            name={"date"}
            handleChange={handleChange}
            value={inputs.date}
            errors={errors.date}
          />
          <RangeSlider
            label={"Experience"}
            name={"experience"}
            handleChange={handleChange}
            value={inputs.experience}
          />
          <Button
            classname={"btn btn-primary"}
            label={"Submit"}
            type={"submit"}
          />
        </div>
      </form>
    </>
  );
};

export default Form;

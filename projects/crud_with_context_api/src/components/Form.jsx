import React, { useContext } from "react";
import InputBox from "./InputBox";
import CheckBox from "./CheckBox";
import SelectOption from "./SelectOption";
import RangeInput from "./RangeInput";
import Button from "./Button";
import { FormContext } from "../contexts/FormContext";

const Form = () => {
  const { handleSubmit } = useContext(FormContext);

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
          />
          <InputBox
            name={"email"}
            placeholder={"Email"}
            label={"Email :"}
            type={"email"}
          />
          <InputBox
            name={"password"}
            placeholder={"Password"}
            label={"Password :"}
            type={"password"}
          />
          <CheckBox
            label={"Gender :"}
            name={"gender"}
            type={"radio"}
            options={["male", "female", "other"]}
          />
          <CheckBox
            label={"Hobbies :"}
            name={"hobbies"}
            type={"checkbox"}
            options={["music", "sports", "travel"]}
          />
          <SelectOption
            label={"Select Country :"}
            optionHiddenText={"--- Select Country ---"}
            options={["india", "russia", "usa", "england", "china", "canada"]}
            name={"country"}
          />
          <InputBox label={"Select Date :"} name={"date"} type={"date"} />
          <RangeInput
            label={"Experience :"}
            max={100}
            min={0}
            name={"experience"}
            type={"range"}
            value={0}
          />
          <Button btnText={"Submit"} btnColor={"btn-primary"} type={"submit"} />
        </div>
      </form>
    </>
  );
};

export default Form;

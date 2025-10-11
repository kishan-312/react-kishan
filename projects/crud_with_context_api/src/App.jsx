import { useContext } from "react";
import Button from "./components/Button";
import Form from "./components/Form";
import Table from "./components/Table";
import { FormContext } from "./contexts/FormContext";
import CheckBoxFilter from "./components/CheckboxFilter";

const App = () => {
  const { handleClear, handleClearEdit, filterHandler, handleChangeFilter } =
    useContext(FormContext);

  return (
    <>
      <div className=" container m-4 ">
        <h1 className="text-center m-3">Registration Form</h1>
        <Form />
        <div className="d-flex gap-4 w-75 my-4 mx-auto">
          <Button
            btnColor={"btn-danger"}
            btnText={"Clear Data"}
            type={"button"}
            onClick={handleClear}
          />
          <input
            type={"text"}
            placeholder={`Search....`}
            className="form-control"
            name="search"
            value={filterHandler.search}
            onChange={handleChangeFilter}
          />
          <Button
            btnColor={"btn-danger"}
            btnText={"Cancel Edit"}
            type={"button"}
            onClick={handleClearEdit}
          />
        </div>
        <div className="d-flex gap-4 w-75 my-4 mx-auto">
          <select
            name={"countryFilter"}
            value={filterHandler.countryFilter}
            onChange={handleChangeFilter}
            className="form-select"
          >
            <option value="" hidden>
              --- select Country ---
            </option>
            <option value="india">India</option>
            <option value="russia">Russia</option>
            <option value="usa">Usa</option>
            <option value="england">England</option>
            <option value="china">China</option>
            <option value="canada">Canada</option>
          </select>

          <input
            type={"range"}
            value={filterHandler.experience2}
            className="form-range"
            name={"experience2"}
            onChange={handleChangeFilter}
            min={0}
            max={100}
          />

          <CheckBoxFilter
            checkHobbies={filterHandler.hobbies2}
            handleCheckboxChange={handleChangeFilter}
          />
        </div>

        <h1 className="text-center mt-5 mb-3 "> Registered Users </h1>
        <Table
          options={[
            "no",
            "name",
            "email",
            "gender",
            "hobbies",
            "country",
            "experience",
            "actions",
          ]}
        />
      </div>
    </>
  );
};

export default App;

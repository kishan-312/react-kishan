import Button from "./components/Button";
import Form from "./components/Form";
import Table from "./components/Table";

const App = () => {
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
          />
          <input
            type={"text"}
            placeholder={`Search....`}
            className="form-control"
            name="search"
            
          />
          <Button
            btnColor={"btn-danger"}
            btnText={"Cancel Edit"}
            type={"button"}
          />
        </div>
        <div className="d-flex gap-4 w-75 my-4 mx-auto">
          <select name={"countryFilter"} className="form-select">
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
            className="form-range"
            name={"experience2"}
            min={0}
            max={100}
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

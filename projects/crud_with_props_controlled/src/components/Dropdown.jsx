const Dropdown = ({ handleGenderChange, selectGender }) => {
  return (
    <>
      <select
        name="country"
        className="form-select"
        id="country"
        onChange={handleGenderChange}
        value={selectGender}
      >
        {["all", "male", "female", "other"].map((gender) => (
          <option value={gender} key={gender}>
            {" "}
            {gender.charAt(0).toUpperCase() + gender.slice(1)}{" "}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;

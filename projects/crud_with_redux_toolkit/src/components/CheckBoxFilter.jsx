const CheckBoxFilter = () => {
  return (
    <>
      <div className=" d-flex align-items-center gap-2">
        {["music", "sports", "travel"].map((hobby) => (
          <div className="input-box d-flex gap-1 form-check" key={hobby}>
            <input
              type="checkbox"
              className=" form-check-input"
              name="hobbies2"
              id={`${hobby}2`}
              value={hobby}
            />
            <label className="form-check-label" htmlFor={`${hobby}2`}>
              {hobby.charAt(0).toUpperCase() + hobby.slice(1)}
            </label>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckBoxFilter;

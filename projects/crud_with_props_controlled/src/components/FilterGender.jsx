import React from "react";

const FilterGender = ({ setFilterGender }) => {
  return (
    <>
      <div className=" d-flex justify-content-center gap-4 w-50 mx-auto my-4">
        <button
          className="btn btn-secondary"
          onClick={() => setFilterGender("all")}
        >
          All
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setFilterGender("male")}
        >
          Male
        </button>
        <button
          className="btn btn-secondary"
          onClick={() => setFilterGender("female")}
        >
          Female
        </button>

        <button
          className="btn btn-secondary"
          onClick={() => setFilterGender("other")}
        >
          Other
        </button>
      </div>
    </>
  );
};

export default FilterGender;

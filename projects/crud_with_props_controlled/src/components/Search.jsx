import React from "react";

const Search = ({ handleSearch }) => {
  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </>
  );
};

export default Search;

import React from "react";

const Dropdown_pagination = ({ handleSelectRows, rowsPerPage }) => {
  return (
    <>
      <div className=" d-flex gap-2">
        <label htmlFor="rowsPerPage" className="form-label">
          Rows Per Page
        </label>
        <select
          name="rowsPerPage"
          className="form-select"
          onChange={handleSelectRows}
          id="rowsPerPage"
          value={rowsPerPage}
        >
          <option value="" hidden>
            -- Select Rows --
          </option>
          {[5, 10, 15, 20].map((row) => (
            <option value={row} key={row}>
              {row}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Dropdown_pagination;

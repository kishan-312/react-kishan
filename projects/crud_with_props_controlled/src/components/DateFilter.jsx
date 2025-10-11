import React from "react";

const DateFilter = ({ handleDateChange, dateFilter }) => {
  return (
    <>
      <div className="input-box d-flex">
        <label htmlFor="date2" className="form-label">
          Select Date :
        </label>
        <input
          type="date"
          name="date2"
          className="form-control"
          id="date2"
          onChange={handleDateChange}
          value={dateFilter}
        />
      </div>
    </>
  );
};

export default DateFilter;

import React from "react";

const CancelEdit = ({ handleCancleEdit }) => {
  return (
    <>
      <button
        style={{ whiteSpace: "nowrap" }}
        onClick={handleCancleEdit}
        className=" btn btn-warning"
      >
        {"Cancel Edit"}
      </button>
    </>
  );
};

export default CancelEdit;

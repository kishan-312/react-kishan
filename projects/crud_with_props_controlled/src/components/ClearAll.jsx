const ClearAll = ({ handleClear }) => {
  return (
    <>
      <button
        style={{ whiteSpace: "nowrap" }}
        onClick={handleClear}
        className=" btn btn-warning"
      >
        {"Clear All"}
      </button>
    </>
  );
};

export default ClearAll;

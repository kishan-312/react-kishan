const RangeSliderFilter = ({ handleSliderFilter, sliderFilter }) => {
  return (
    <>
      <div className="input-box d-flex flex-column ">
        <label htmlFor="experience1" className="form-label">
          Experience : {sliderFilter}
        </label>
        <input
          type="range"
          name="experience1"
          className="form-range"
          min={0}
          max={100}
          id="experience1"
          value={sliderFilter}
          onChange={handleSliderFilter}
        />
      </div>
    </>
  );
};

export default RangeSliderFilter;

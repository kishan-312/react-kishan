import React from "react";

const Form = ({ handleChange, handleSubmit, fields, errors }) => {
  return (
    <>
      <form
        action=""
        className=" w-50 mx-auto border border-1 p-4 d-grid gap-3"
        onSubmit={handleSubmit}
      >
        {/* name */}
        <div className="input-box d-flex flex-column">
          <label htmlFor="name" className="form-label">
            Name :
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={fields.name}
            placeholder="Enter Your Name"
            onChange={handleChange}
            className="form-control"
          />
          {errors.name && (
            <small className=" text-danger"> {errors.name} </small>
          )}
        </div>
        {/* email */}
        <div className="input-box d-flex flex-column ">
          <label htmlFor="email" className="form-label">
            Email :
          </label>
          <input
            type="email"
            name="email"
            value={fields.email}
            onChange={handleChange}
            placeholder="Enter Your Email"
            className="form-control"
            id="email"
          />
          {errors.email && (
            <small className=" text-danger"> {errors.email} </small>
          )}
        </div>

        {/* password */}
        <div className="input-box d-flex flex-column ">
          <label htmlFor="password" className="form-label">
            Password :
          </label>
          <input
            type="password"
            name="password"
            value={fields.password}
            onChange={handleChange}
            placeholder="Enter Your Password"
            className="form-control"
            id="password"
          />
          {errors.password && (
            <small className=" text-danger"> {errors.password} </small>
          )}
        </div>

        {/* gender = radio */}
        <div className="input-box d-flex flex-column gap-2 form-check p-0">
          <label htmlFor="gender" className="form-check-label">
            Gender :
          </label>
          <div className=" d-flex align-items-center gap-3">
            {["male", "female", "other"].map((g) => (
              <div className="input-box form-check" key={g}>
                <input
                  type="radio"
                  id={g}
                  name={"gender"}
                  className="form-check-input"
                  value={g}
                  onChange={handleChange}
                  checked={fields.gender === g}
                />
                <label htmlFor={g} className="form-check-label">
                  {g.charAt(0).toUpperCase() + g.slice(1)}
                </label>
              </div>
            ))}
          </div>
          {errors.gender && (
            <small className=" text-danger"> {errors.gender} </small>
          )}
        </div>

        {/* hobbies = checkbox  */}
        <div className="input-box d-flex flex-column gap-2 form-check p-0 ">
          <label htmlFor="hobbies" className=" form-check-label">
            {" "}
            Hobbies :{" "}
          </label>
          <div className=" d-flex align-items-center gap-2">
            {["music", "sports", "travel"].map((hobby) => (
              <div className="input-box d-flex gap-1 form-check" key={hobby}>
                <input
                  type="checkbox"
                  className=" form-check-input"
                  name="hobbies"
                  id={hobby}
                  value={hobby}
                  checked={fields.hobbies.includes(hobby)}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor={hobby}>
                  {hobby.charAt(0).toUpperCase() + hobby.slice(1)}
                </label>
              </div>
            ))}
          </div>
          {errors.hobbies && (
            <small className=" text-danger"> {errors.hobbies} </small>
          )}
        </div>

        {/* country */}
        <div className="input-box d-flex flex-column ">
          <label htmlFor="country" className="form-label">
            Select Country :
          </label>
          <select
            name="country"
            className="form-select"
            value={fields.country}
            id="country"
            onChange={handleChange}
          >
            <option value="" hidden>
              -- Select Country --
            </option>
            {["india", "usa", "england", "japan", "china"].map((country) => (
              <option value={country} key={country}>
                {" "}
                {country.charAt(0).toUpperCase() + country.slice(1)}{" "}
              </option>
            ))}
          </select>
          {errors.country && (
            <small className=" text-danger"> {errors.country} </small>
          )}
        </div>

        {/* date */}
        <div className="input-box d-flex flex-column ">
          <label htmlFor="date" className="form-label">
            Select Date :
          </label>
          <input
            type="date"
            name="date"
            value={fields.date}
            onChange={handleChange}
            className="form-control"
            id="date"
          />
          {errors.date && (
            <small className=" text-danger"> {errors.date} </small>
          )}
        </div>

        {/* experience */}
        <div className="input-box d-flex flex-column ">
          <label htmlFor="experience" className="form-label">
            Experience :
          </label>
          <input
            type="range"
            name="experience"
            value={fields.experience}
            onChange={handleChange}
            className="form-range"
            min={0}
            max={100}
            id="experience"
          />
        </div>

        {/* submit */}
        <button className="btn btn-danger mt-4" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;

import { useEffect, useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import "../index.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const Crud2 = () => {
  const [user, setUser] = useState({
    id: Date.now(),
    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    country: "",
    date: "",
    experience: 0,
  });

  const [datas, setDatas] = useState(() => {
    const stored = localStorage.getItem("datas1");
    return JSON.parse(stored) || [];
  });

  const [errors, setErrors] = useState({});
  console.log(errors, setErrors);

  const [editId, setEditId] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [filterGender, setFilterGender] = useState("all");
  const [sortKey, setSorKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    localStorage.setItem("datas1", JSON.stringify(datas));
  }, [datas]);

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    console.log(name, value, checked, type);

    let newUsers = { ...user };

    if (type === "checkbox" && name === "hobbies") {
      let updateHobbies = [...user.hobbies];

      if (checked) {
        updateHobbies.push(value);
      } else {
        updateHobbies = updateHobbies.filter((hobby) => hobby !== value);
      }

      newUsers = { ...newUsers, hobbies: updateHobbies };
    } else if (type === "checkbox") {
      newUsers = { ...newUsers, [name]: checked };
    } else if (type === "range") {
      newUsers = { ...newUsers, [name]: Number(value) };
    } else {
      newUsers = { ...newUsers, [name]: value };
    }

    setUser(newUsers);

    const validateErrors = validateData(newUsers);
    setErrors(validateErrors);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validateErrors = validateData();

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    if (editId) {
      setDatas((prev) =>
        prev.map((data) =>
          data.id === editId ? { ...user, id: editId } : data
        )
      );
      setEditId(null);
    } else {
      setDatas((prev) => [...prev, user]);
    }

    setUser({
      id: Date.now(),
      name: "",
      email: "",
      password: "",
      gender: "",
      hobbies: [],
      country: "",
      date: "",
      experience: 0,
    });

    setErrors({});
  }

  function handleDelete(id) {
    let confirmDelete = confirm("Are you sure you want to delete ?");
    if (confirmDelete) {
      setDatas((prev) => prev.filter((data) => data.id !== id));
    }
  }
  function handleEdit(id, data) {
    setEditId(id);
    setUser(data);
  }

  function handleClear() {
    setDatas([]);
    setUser({
      id: Date.now(),
      name: "",
      email: "",
      password: "",
      gender: "",
      hobbies: [],
      country: "",
      date: "",
      experience: 0,
    });
  }

  console.log(datas);

  function validateData(userObj = user) {
    const {
      name,
      email,
      password,
      gender,
      hobbies,
      country,
      date,
      experience,
    } = userObj;
    console.log(
      name,
      email,
      password,
      gender,
      hobbies,
      country,
      date,
      experience
    );

    let errors = {};

    if (!name) {
      errors.name = "name is required";
    }

    if (!email) {
      errors.email = "email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9._]+\.[a-zA-Z]{2,}$/.test(
        email.toLowerCase()
      )
    ) {
      errors.email = "email is invalid";
    }

    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "password must be atleast 6 characters";
    }

    if (!gender) {
      errors.gender = "gender is required";
    }

    if (hobbies.length === 0) {
      errors.hobbies = "At least one hobby is required";
    }

    if (country === "") {
      errors.country = "please select country";
    }

    if (!date) {
      errors.date = "date is required";
    }

    return errors;
  }

  console.log(validateData());

  function handleCancelEdit() {
    setUser({
      id: Date.now(),
      name: "",
      email: "",
      password: "",
      gender: "",
      hobbies: [],
      country: "",
      date: "",
      experience: 0,
    });
    setEditId(null);
  }

  function handleSearch(e) {
    //
    setSearchItem(e.target.value);
  }

  const searchDatas = datas.filter((data) => {
    const name = data.name.toLowerCase().includes(searchItem.toLowerCase());
    const email = data.email.toLowerCase().includes(searchItem.toLowerCase());
    const gender = data.gender.toLowerCase().includes(searchItem.toLowerCase());
    return name || email || gender;
  });

  console.log(searchItem);

  const filterDatas = searchDatas.filter((data) => {
    if (filterGender === "all") return true;
    const filterGender233 = data.gender === filterGender;
    return filterGender233;
  });
  console.log(filterDatas);

  const sortDatas = filterDatas.toSorted((a, b) => {
    if (!sortKey) return 0;

    let valueA = a[sortKey];
    let valueB = b[sortKey];

    if (typeof valueA === "string" && typeof valueB === "string") {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    if (valueA > valueB) return sortOrder === "asc" ? 1 : -1;
    if (valueA < valueB) return sortOrder === "asc" ? -1 : 1;
    return 0;
  });

  console.log(sortDatas);
  const [currentPage, setCurrentPage] = useState(1);
  let rowsPerPage = 5;
  const indexOfLastRow = rowsPerPage * currentPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = sortDatas.slice(indexOfFirstRow, indexOfLastRow);
  console.log(currentRows);
  let totalPages = Math.ceil(sortDatas.length / rowsPerPage);
  console.log(totalPages);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchItem, filterGender, sortKey, sortOrder]);

  return (
    <>
      <div className="">
        <h2 className="text-center">Registration Form</h2>
        <form
          action=""
          className="border border-1 w-50 mx-auto p-4 d-flex flex-column gap-2"
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              className="form-control"
              value={user.name}
              placeholder="Enter Your Name"
            />
            <div style={{ minHeight: "20px" }}>
              {errors.name && <p className="text-danger m-0">{errors.name}</p>}
            </div>
          </div>
          <div>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              value={user.email}
              placeholder="Enter Your email"
            />
            <div style={{ minHeight: "20px" }}>
              {errors.email && (
                <p className="text-danger m-0">{errors.email}</p>
              )}
            </div>
          </div>
          <div>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              className="form-control"
              value={user.password}
              placeholder="Enter Your password"
            />
            <div style={{ minHeight: "20px" }}>
              {errors.password && (
                <p className="text-danger m-0">{errors.password}</p>
              )}
            </div>
          </div>
          <div className=" d-flex gap-3 align-items-center">
            <div className="d-flex gap-2 align-items-center">
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
              <input
                className="form-check-input"
                onChange={handleChange}
                checked={user.gender === "male"}
                type="radio"
                id="male"
                name="gender"
                value={"male"}
              />
            </div>
            <div className="d-flex gap-2 align-items-center">
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
              <input
                className="form-check-input"
                onChange={handleChange}
                checked={user.gender === "female"}
                type="radio"
                id="female"
                name="gender"
                value={"female"}
              />
            </div>
            <div className="d-flex gap-2 align-items-center">
              <label className="form-check-label" htmlFor="other">
                Other
              </label>
              <input
                className="form-check-input"
                onChange={handleChange}
                checked={user.gender === "other"}
                type="radio"
                id="other"
                name="gender"
                value={"other"}
              />
            </div>
            <div style={{ minHeight: "20px", display: "block" }}>
              {errors.gender && (
                <p className="text-danger m-0">{errors.gender}</p>
              )}
            </div>
          </div>

          <div className=" d-flex gap-4">
            <div className="d-flex gap-4">
              <label htmlFor="sports">sports</label>
              <input
                type="checkbox"
                id="sports"
                onChange={handleChange}
                className="form-check-input"
                name="hobbies"
                value={"sports"}
                checked={user.hobbies.includes("sports")}
              />
            </div>
            <div className="d-flex gap-4">
              <label htmlFor="music">music</label>
              <input
                type="checkbox"
                id="music"
                onChange={handleChange}
                className="form-check-input"
                name="hobbies"
                value={"music"}
                checked={user.hobbies.includes("music")}
              />
            </div>
            <div className="d-flex gap-4">
              <label htmlFor="travel">travel</label>
              <input
                type="checkbox"
                id="travel"
                onChange={handleChange}
                className="form-check-input"
                name="hobbies"
                value={"travel"}
                checked={user.hobbies.includes("travel")}
              />
            </div>
            <div style={{ minHeight: "20px" }}>
              {errors.hobbies && (
                <p className="text-danger">{errors.hobbies}</p>
              )}
            </div>
          </div>

          <div className=" d-flex flex-column">
            <select
              name="country"
              value={user.country}
              onChange={handleChange}
              className="form-select"
              id=""
            >
              <option value="">---Select Country---</option>
              <option value="india">India</option>
              <option value="usa">USA</option>
              <option value="england">England</option>
              <option value="austeralia">Australia</option>
            </select>
            <div style={{ minHeight: "20px" }}>
              {errors.country && (
                <p className="text-danger">{errors.country}</p>
              )}
            </div>
          </div>

          <div className=" d-flex flex-column gap-1">
            <input
              type="date"
              onChange={handleChange}
              name="date"
              value={user.date}
              className="form-control"
            />
            <div style={{ minHeight: "20px" }}>
              {errors.date && <p className="text-danger">{errors.date}</p>}
            </div>
          </div>

          <div className=" d-flex gap-4">
            <input
              className="form-range"
              name="experience"
              onChange={handleChange}
              value={user.experience}
              type="range"
              min={0}
              max={100}
            />
          </div>
          <div className="">
            <button className="btn btn-danger w-100">Submit</button>
          </div>
        </form>

        <div className=" d-flex gap-2 m-5">
          <button
            onClick={handleClear}
            style={{ margin: "auto", width: "auto", display: "block" }}
          >
            {" "}
            Clear All{" "}
          </button>
          <input
            type="text"
            placeholder="Search...."
            className=" p-2"
            onChange={handleSearch}
          />
          <button
            onClick={handleCancelEdit}
            style={{ margin: "auto", width: "auto", display: "block" }}
          >
            Cancel Edit
          </button>
        </div>
        <div className=" d-flex gap-2 justify-content-center">
          <button onClick={() => setFilterGender("all")}>All</button>
          <button onClick={() => setFilterGender("male")}>Male</button>
          <button onClick={() => setFilterGender("female")}>Female</button>
          <button onClick={() => setFilterGender("other")}>Other</button>
        </div>

        <table className=" mx-auto w-75 table table-bordered mt-4 text-center">
          <thead>
            <tr>
              <th>
                <div className=" d-flex gap-1">
                  Name{" "}
                  <div className=" d-flex flex-column">
                    <FaSortUp
                      className="focus-scale"
                      onClick={() => {
                        setSorKey("name");
                        setSortOrder("asc");
                      }}
                    />
                    <FaSortDown
                      className="focus-scale"
                      onClick={() => {
                        setSorKey("name");
                        setSortOrder("desc");
                      }}
                    />
                  </div>
                </div>{" "}
              </th>
              <th>Email</th>
              <th>Password</th>
              <th>Gender</th>
              <th>hobbies</th>
              <th>country</th>
              <th>date</th>
              <th>experience</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((data) => (
              <tr key={data.id}>
                <td> {data.name} </td>
                <td> {data.email} </td>
                <td> {data.password} </td>
                <td> {data.gender} </td>
                <td> {data.hobbies.join(" , ")} </td>
                <td> {data.country} </td>
                <td> {data.date} </td>
                <td>{data.experience}</td>
                <td>
                  <div className="d-flex gap-3 justify-content-center">
                    <button
                      className=" btn btn-danger"
                      onClick={() => handleDelete(data.id)}
                    >
                      Delete
                    </button>
                    <button
                      className="btn btn-success"
                      onClick={() => handleEdit(data.id, data)}
                    >
                      Edit
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* pagination */}

        <div className=" d-flex justify-content-center m-5 gap-4">
          <button
            className="btn btn-success"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <GrPrevious />
          </button>

          {[...Array(totalPages)].map((_, i) => (
            <button
              className={` btn  ${
                currentPage === i + 1
                  ? "btn-danger"
                  : "btn-white border border-1"
              } `}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}

          <button
            className="btn btn-success"
            disabled={currentPage === totalPages}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <GrNext />
          </button>
        </div>

        {/*  */}
      </div>
    </>
  );
};

export default Crud2;

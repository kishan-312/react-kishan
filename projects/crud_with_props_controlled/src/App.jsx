import { useEffect, useState } from "react";
import "./index.css";
import Form from "./components/Form";
import Table from "./components/Table";
import ClearAll from "./components/ClearAll";
import CancelEdit from "./components/CancelEdit";
import Search from "./components/Search";
import FilterGender from "./components/FilterGender";
import Dropdown from "./components/Dropdown";
import CheckBoxFilter from "./components/CheckBoxFilter";
import RangeSliderFilter from "./components/RangeSliderFilter";
import DateFilter from "./components/DateFilter";
import Pagination from "./components/Pagination";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dropdown_pagination from "./components/Dropdown_pagination";
import { MdOutlineDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const App = () => {
  //
  const getInitialFields = () => ({
    id: crypto.randomUUID(),
    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    country: "",
    date: "",
    experience: 0,
  });
  const [fields, setFields] = useState(getInitialFields);

  const [datas, setDatas] = useState(() => {
    const stored = localStorage.getItem("datas");
    return JSON.parse(stored) || [];
  });
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [filterGender, setFilterGender] = useState("all");
  const [selectGender, setSelectGender] = useState("all");
  const [checkHobbies, setCheckHobbies] = useState([]);
  const [sliderFilter, setSliderFilter] = useState(0);
  const [dateFilter, setDateFilter] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const [theme, setTheme] = useState("light");

  console.log(setFilterGender);

  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(datas));
  }, [datas]);

  function handleChange(e) {
    //
    const { name, value, type, checked } = e.target;
    console.log(name, value, type, checked);

    let newFields = { ...fields };

    if (type === "checkbox" && name === "hobbies") {
      let updateFields = [...fields.hobbies];

      if (checked) {
        updateFields.push(value);
      } else {
        updateFields = updateFields.filter((data) => data !== value);
      }

      newFields = { ...newFields, hobbies: updateFields };
    } else if (type === "range") {
      newFields = { ...newFields, [name]: Number(value) };
    } else {
      newFields = { ...newFields, [name]: value };
    }

    setFields(newFields);

    const validateErrors = validateData(newFields);
    setErrors(validateErrors);
  }

  function resetForm() {
    setFields(getInitialFields());
    setEditId(null);
  }

  function validateData(userObj = fields) {
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

    console.log(experience);

    const errors = {};

    if (name.trim() === "") {
      errors["name"] = "name is required";
    }

    if (email.trim() === "") {
      errors["email"] = "email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errors["email"] = "email is invalid";
    }

    if (password.trim() === "") {
      errors["password"] = "password is required";
    } else if (password.length < 6) {
      errors["password"] = "Password must be at least 6 characters long";
    }

    if (!gender) {
      errors["gender"] = "gender is required";
    }

    if (hobbies.length === 0) {
      errors["hobbies"] = "At least one hobbies select";
    }

    if (country === "") {
      errors["country"] = "select At least one country";
    }

    if (!date) {
      errors["date"] = "date is reqquired";
    }

    return errors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validateErrors = validateData();

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      toast.error("Please fix some errors");
      return;
    }

    if (editId) {
      setDatas((prev) =>
        prev.map((data) =>
          data.id === editId ? { ...fields, id: editId } : data
        )
      );
      toast.success("Record updated successfully");
      setEditId(null);
    } else {
      setDatas([...datas, fields]);
      toast.success("Record added successfully");
    }

    resetForm();
    setErrors({});
  }

  function handleDelete(id) {
    console.log(id);

    const confirmDelete = confirm("Are you sure you want to delete ?");
    if (confirmDelete) {
      setDatas((prev) => prev.filter((data) => data.id !== id));
      toast.info("Record deleted");
    }
    setEditId(null);
    resetForm();
  }

  function handleEdit(id, data) {
    setEditId(id);
    setFields(data);
    toast("Editing mode enabled");
  }

  function handleClear() {
    const confirmClear = confirm("Are you sure you want to clear ?");
    if (confirmClear) {
      setDatas([]);
      toast.warn("All records cleared");
    }
  }

  function handleCancleEdit() {
    resetForm();
    toast.info("Edit cancelled");
  }

  function handleSearch(e) {
    setSearchData(e.target.value);
  }

  console.log(datas);
  console.log(errors);
  console.log(filterGender);

  function handleGenderChange(e) {
    setSelectGender(e.target.value);
  }

  function handleCheckboxChange(e) {
    const { checked, value } = e.target;
    let hobbies = [...checkHobbies];

    if (checked) {
      hobbies.push(value);
    } else {
      hobbies = hobbies.filter((hobby) => hobby !== value);
    }

    setCheckHobbies(hobbies);
  }

  function handleSliderFilter(e) {
    setSliderFilter(Number(e.target.value));
  }

  function handleDateChange(e) {
    setDateFilter(e.target.value);
  }

  function handleSelectRows(e) {
    setRowsPerPage(Number(e.target.value));
  }

  const filteredDatas = datas.filter((data) => {
    const searchDatas =
      data.name.toLowerCase().includes(searchData.toLowerCase()) ||
      data.email.toLowerCase().includes(searchData.toLowerCase());

    const filterGenders =
      filterGender === "all" || data.gender === filterGender;

    const selectedGenders =
      selectGender === "all" || data.gender === selectGender;

    const checkHobbies2 =
      checkHobbies.length === 0 ||
      checkHobbies.every((hobby) => data.hobbies.includes(hobby));

    const sliderFilter2 = data.experience >= sliderFilter;

    const dateFilter2 = !dateFilter || data.date === dateFilter;

    return (
      searchDatas &&
      filterGenders &&
      selectedGenders &&
      checkHobbies2 &&
      sliderFilter2 &&
      dateFilter2
    );
  });

  const sortDatas = filteredDatas.toSorted((a, b) => {
    console.log(a, b);

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

  useEffect(() => {
    setCurrentPage(1);
  }, [
    searchData,
    filterGender,
    selectGender,
    checkHobbies,
    sliderFilter,
    dateFilter,
    sortKey,
    sortOrder,
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  console.log(setRowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  console.log(sortDatas);
  let currentRows = sortDatas.slice(indexOfFirstRow, indexOfLastRow);
  console.log(currentRows);
  let totalPages = Math.ceil(sortDatas.length / rowsPerPage);
  console.log(totalPages);

  // useEffect(() => {
  //   document.documentElement.classList = theme;
  // }, [theme]);

  return (
    <>
      <div className={`container m-4 ${theme} p-4 `}>
        {theme === "light" ? (
          <MdOutlineDarkMode
            onClick={() => setTheme("dark")}
            className="theme-icon"
          />
        ) : (
          <CiLight onClick={() => setTheme("light")} className="theme-icon" />
        )}
        <h1 className=" text-center m-4">Registration Form</h1>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          fields={fields}
          errors={errors}
        />
        <div className=" d-flex gap-4 my-4 mx-auto w-75 ">
          <ClearAll handleClear={handleClear} />
          <Search handleSearch={handleSearch} />
          <CancelEdit handleCancleEdit={handleCancleEdit} />
        </div>
        <div className=" d-flex gap-5 my-5 mx-auto w-75 ">
          {/* <FilterGender setFilterGender={setFilterGender} /> */}
          <Dropdown
            handleGenderChange={handleGenderChange}
            selectGender={selectGender}
          />
          <CheckBoxFilter
            handleCheckboxChange={handleCheckboxChange}
            checkHobbies={checkHobbies}
          />
        </div>
        <div className=" d-flex gap-5 my-5 mx-auto w-75 ">
          <RangeSliderFilter
            handleSliderFilter={handleSliderFilter}
            sliderFilter={sliderFilter}
          />
          <DateFilter
            dateFilter={dateFilter}
            handleDateChange={handleDateChange}
          />
          <Dropdown_pagination
            handleSelectRows={handleSelectRows}
            rowsPerPage={rowsPerPage}
          />
        </div>
        <Table
          datas={currentRows}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          setSortKey={setSortKey}
          setSortOrder={setSortOrder}
        />
        <Pagination
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      </div>

      <ToastContainer autoClose={2000} position="top-right" />
    </>
  );
};

export default App;

import { useEffect, useState } from "react";
import { FormContext } from "../contexts/FormContext";

function FormContextProvider(props) {
  const initialState = {
    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    country: "",
    date: "",
    experience: 0,
  };

  const [inputs, setInputs] = useState(initialState);
  const [filterHandler, setFilterHandler] = useState({
    search: "",
    countryFilter: "all",
    experience2: 0,
    hobbies2: [],
  });

  const [datas, setDatas] = useState(() => {
    const stored = localStorage.getItem("datas");
    return JSON.parse(stored) || [];
  });

  useEffect(() => {
    localStorage.setItem("datas", JSON.stringify(datas));
  }, [datas]);

  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);

  function resetForm() {
    setInputs(initialState);
    setErrors({});
    setEditId(null);
  }

  function handleChange(e) {
    const { name, value, checked, type } = e.target;
    console.log(name, value, checked, type);
    let newInputs = { ...inputs };

    if (type === "checkbox" && name === "hobbies") {
      let updateHobbies = [...inputs.hobbies];

      if (checked) {
        updateHobbies.push(value);
      } else {
        updateHobbies = updateHobbies.filter((hobby) => hobby !== value);
      }

      newInputs = { ...newInputs, hobbies: updateHobbies };
      console.log(newInputs);
    } else if (type === "range") {
      newInputs = { ...newInputs, [name]: Number(value) };
    } else {
      newInputs = { ...newInputs, [name]: value };
    }

    setInputs(newInputs);

    setErrors(validateForm(newInputs));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validateErrors = validateForm();

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    if (editId) {
      setDatas((prev) =>
        prev.map((data) =>
          data.id === editId ? { ...inputs, id: editId } : data
        )
      );
      setEditId(null);
    } else {
      const newData = { id: crypto.randomUUID(), ...inputs };
      setDatas((prev) => [...prev, newData]);
    }

    resetForm();
  }

  function handleDelete(id) {
    console.log(id);
    const confirmDelete = confirm("Are you sure you want to delete ?");
    if (confirmDelete) {
      setDatas((prev) => prev.filter((data) => data.id !== id));
      setEditId(null);
    }
  }

  function handleEdit(id, data) {
    console.log(id);
    setEditId(id);
    setInputs(data);
    setErrors({});
  }

  function validateForm(userObj = inputs) {
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

    const errors = {};
    console.log(experience);

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
      errors["password"] = "password must be at least 6 characters";
    }

    if (!gender) {
      errors["gender"] = "gender is required";
    }

    if (hobbies.length === 0) {
      errors["hobbies"] = "At least one hobby select";
    }

    if (country === "") {
      errors["country"] = "Select At least one country";
    }

    if (!date) {
      errors["date"] = "date is required";
    }

    return errors;
  }

  function handleClear() {
    setDatas([]);
    resetForm();
  }

  function handleClearEdit() {
    resetForm();
  }

  function handleChangeFilter(e) {
    const { value, name, checked, type } = e.target;
    console.log(value, name, checked, type);

    if (type === "range" && name === "experience2") {
      setFilterHandler((prev) => ({ ...prev, [name]: Number(value) }));
    } else if (type === "checkbox" && name === "hobbies2") {
      let updateHobbies = [...filterHandler.hobbies2];
      if (checked) {
        updateHobbies.push(value);
      } else {
        updateHobbies = updateHobbies.filter((data) => data !== value);
      }

      setFilterHandler({ ...filterHandler, hobbies2: updateHobbies });
    } else {
      setFilterHandler((prev) => ({ ...prev, [name]: value }));
    }
  }

  console.log(datas);

  const filterDatas = datas?.filter((data) => {
    const searchFilter = data.name
      .toLowerCase()
      .includes(filterHandler.search.toLowerCase());

    const countryFilter =
      filterHandler.countryFilter === "all" ||
      data.country === filterHandler.countryFilter;

    const rangeFilter =
      filterHandler.experience2 === 0 ||
      data.experience >= filterHandler.experience2;

    const checkboxFilter =
      filterHandler.hobbies2.length === 0 ||
      filterHandler.hobbies2.every((hobby) => data.hobbies.includes(hobby));

    return searchFilter && countryFilter && rangeFilter && checkboxFilter;
  });

  return (
    <FormContext.Provider
      value={{
        inputs,
        handleChange,
        setInputs,
        datas,
        setDatas,
        handleSubmit,
        errors,
        handleDelete,
        handleEdit,
        handleClear,
        handleClearEdit,
        filterHandler,
        setFilterHandler,
        handleChangeFilter,
        filterDatas,
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;

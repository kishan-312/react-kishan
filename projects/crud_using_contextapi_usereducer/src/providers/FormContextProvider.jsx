import { useEffect, useReducer } from "react";
import { FormContext } from "../contexts/FormContext";

const initialInputs = {
  name: "",
  email: "",
  password: "",
  gender: "",
  hobbies: [],
  country: "",
  date: "",
  experience: 0,
};

const initialState = {
  inputs: initialInputs,
  datas: JSON.parse(localStorage.getItem("datas2")) || [],
  errors: {},
  editId: null,
};

function reducer(state, action) {
  if (action.type === "SET_INPUTS") {
    return { ...state, inputs: action.payload };
  } else if (action.type === "SET_ERRORS") {
    return { ...state, errors: action.payload };
  } else if (action.type === "ADD_DATA") {
    return {
      ...state,
      datas: [...state.datas, { id: crypto.randomUUID(), ...state.inputs }],
    };
  } else if (action.type === "SET_EDIT") {
    return {
      ...state,
      editId: action.payload.id,
      inputs: action.payload.data,
      errors: {},
    };
  } else if (action.type === "EDIT_DATA") {
    return {
      ...state,
      datas: state.datas.map((data) =>
        data.id === state.editId ? { ...state.inputs, id: state.editId } : data
      ),
      editId: null,
    };
  } else if (action.type === "RESET_FORM") {
    return { ...state, editId: null, errors: {}, inputs: initialInputs };
  } else if (action.type === "DELETE_DATA") {
    return {
      ...state,
      datas: state.datas.filter((data) => data.id !== action.payload),
      editId: null,
      inputs: initialInputs,
    };
  }
}

function FormContextProvider({ children }) {
  //
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    localStorage.setItem("datas2", JSON.stringify(state.datas));
  }, [state.datas]);

  function validateForm(userObj = state.inputs) {
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
      errors.name = "name is required";
    }

    if (email.trim() === "") {
      errors.email = "email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errors.email = "email is invalid";
    }

    if (password.trim() === "") {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "password must be at least 6 characters ";
    }

    if (!gender) {
      errors.gender = "gender is required";
    }

    if (hobbies.length === 0) {
      errors.hobbies = "At least one hobby select";
    }

    if (country === "") {
      errors.country = "Must be select country";
    }

    if (!date) {
      errors.date = "date is required";
    }

    return errors;
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    let newInputs = { ...state.inputs };

    if (type === "checkbox" && name === "hobbies") {
      let updateHobbies = [...state.inputs.hobbies];
      if (checked) {
        updateHobbies.push(value);
      } else {
        updateHobbies = updateHobbies.filter((hobby) => hobby !== value);
      }

      newInputs = { ...newInputs, hobbies: updateHobbies };
    } else if (type === "range" && name === "experience") {
      newInputs = { ...newInputs, [name]: Number(value) };
    } else {
      newInputs = { ...newInputs, [name]: value };
    }

    dispatch({ type: "SET_INPUTS", payload: newInputs });
    dispatch({ type: "SET_ERRORS", payload: validateForm(newInputs) });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validateErrors = validateForm();

    if (Object.keys(validateErrors).length > 0) {
      dispatch({ type: "SET_ERRORS", payload: validateErrors });
      return;
    }

    if (state.editId) {
      dispatch({ type: "EDIT_DATA" });
    } else {
      dispatch({ type: "ADD_DATA" });
    }

    dispatch({ type: "RESET_FORM" });
  }

  function handleDelete(id) {
    const confirmDelete = confirm("Are you sure you want to Delete ?");

    if (confirmDelete) {
      dispatch({ type: "DELETE_DATA", payload: id });
    }
  }

  function handleEdit(id, data) {
    dispatch({ type: "SET_EDIT", payload: { id, data } });
  }

  return (
    <FormContext.Provider
      value={{ ...state, handleChange, handleSubmit, handleDelete, handleEdit }}
    >
      {children}
    </FormContext.Provider>
  );
}

export default FormContextProvider;

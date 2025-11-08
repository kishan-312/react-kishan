import { useEffect, useState } from "react"
import { FormContext } from "../contexts/FormContext"

function FormContextProvider({ children }) {

    const initialState = {

        name: "",
        email: "",
        password: "",
        gender: "",
        hobbies: [],
        country: "",
        date: "",
        experience: 0,

    }

    const [formData, setFormData] = useState(initialState);

    const [errors, setErrors] = useState({})

    const [datas, setDatas] = useState(() => {

        const datas = localStorage.getItem("dataForm");
        return JSON.parse(datas) || []

    })

    useEffect(() => {

        localStorage.setItem("dataForm", JSON.stringify(datas))

    }, [datas])

    const [editId, setEditId] = useState(null)

    const [search, setSearch] = useState("")
    const [selectOpt, setSelectOpt] = useState("all")
    const [checkBoxHobbies, setCheckBoxHobbies] = useState([]);

    function handleSearch(e) {

        setSearch(e.target.value.trim().toLowerCase());

    }



    function handleChange(e) {

        const { name, value, type, checked, } = e.target

        let newFormData = { ...formData }

        if (type === "checkbox" && name === "hobbies") {

            let updateHobbies = [...formData.hobbies]

            if (checked) {

                updateHobbies.push(value)

            }
            else {

                updateHobbies = updateHobbies.filter((ele, i) => ele !== value)

            }

            newFormData = { ...newFormData, hobbies: updateHobbies }

        }

        else if (type === "range") {

            newFormData = { ...newFormData, [name]: Number(value) }

        }

        else {

            newFormData = { ...newFormData, [name]: value }

        }

        setFormData(newFormData)
        setErrors(validateForm(newFormData))

    }

    function resetForm() {

        setFormData(initialState);
        setErrors({});
        setEditId(null)


    }

    function validateForm(formDatas = formData) {

        const { name, email, password, gender, hobbies, country, date, experience } = formDatas;
        const errors = {};

        if (name.trim() === "") {

            errors.name = "name is required"

        }

        if (email.trim() === "") {

            errors.email = "email is required"

        }
        else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {

            errors.email = "email is invalid"

        }

        if (password.trim() === "") {

            errors.password = "password is required"

        }
        else if (password.length < 6) {

            errors.password = "password must be at least 6 characters"

        }

        if (!gender) {

            errors.gender = "gender is required"

        }

        if (hobbies.length === 0) {

            errors.hobbies = "At least one hobby select"

        }

        if (country === "") {

            errors.country = "country is required"

        }

        if (!date) {

            errors.date = "date is required"

        }

        return errors


    }

    function handleSubmit(e) {

        e.preventDefault();

        const validateErrors = validateForm();
        if (Object.keys(validateErrors).length > 0) {

            setErrors(validateErrors);
            return

        }

        if (editId) {

            setDatas((prev) => prev.map((data) => data.id === editId ? { ...formData, id: editId } : data))

        }

        else {


            setDatas((prev) => [...prev, { id: crypto.randomUUID(), ...formData }]);

        }


        resetForm()


    }

    function handleDelete(id) {

        const confirmDelete = confirm("Are you sure u want to delete ? ");

        if (confirmDelete) {

            const remainingData = datas.filter((data) => data.id !== id);
            setDatas(remainingData)
            resetForm()

        }


    }

    function handleEdit(id, data) {

        setEditId(id)
        setFormData(data)


    }

    function handleSelectOption(e) {

        const { name, value } = e.target
        setSelectOpt(value)



    }

    function handleCheckbox(e) {

        const { value, checked, type } = e.target

        if (checked) {

            setCheckBoxHobbies((prev) => [...prev, value])

        }

        else {

            setCheckBoxHobbies((prev) => prev.filter((d) => d !== value))

        }


    }

    const filterDatas = datas.filter((data) => {

        const searchDatas = data.name.toLowerCase().includes(search) || data.email.toLowerCase().includes(search);
        const filterOptions = selectOpt === "all" || data.country === selectOpt
        const filterHobbies = checkBoxHobbies.length === 0 || checkBoxHobbies.every((hobby) => data.hobbies.includes(hobby))

        return searchDatas && filterOptions && filterHobbies

    })



    return <FormContext.Provider value={{
        handleChange, handleDelete, handleEdit, handleSelectOption, selectOpt, setSelectOpt,
        formData, setFormData, resetForm, handleSubmit, errors, datas,
        search, setSearch, handleSearch, filterDatas, handleCheckbox, checkBoxHobbies

    }} >
        {
            children
        }
    </FormContext.Provider>

}

export default FormContextProvider

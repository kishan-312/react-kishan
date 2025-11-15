import React from 'react'
import styles from "../css/crud.module.css"
import InputBox from './InputBox'
import { useDispatch, useSelector } from 'react-redux'
import CheckBoxRadio from './CheckBoxRadio'
import SelectOption from './SelectOption'
import Date from './Date'
import Range from './Range'
import Button from './Button'
import { addData, editDatas, resetForm, setEditId, setErrors, setInitialState } from '../features/crud/crudSlice'
import { useNavigate } from 'react-router-dom'

const inputBoxDatas = [

    {

        name: "name",
        type: "text",

    },

    {

        name: "email",
        type: "email",

    },

    {

        name: "password",
        type: "password",

    },

]

const checkBoxRadioDatas = [

    {

        id: 1,
        name: "gender",
        type: "radio",
        options: ["male", "female", "other"]

    },

    {

        id: 2,
        name: "hobbies",
        type: "checkbox",
        options: ["music", "sports", "travel"]

    },

]

const selectOptionsDatas = [

    {

        name: "country",
        options: ["india", "usa", "russia", "england", "newzeland", "canada", "china"]

    }

]

const dateDatas = [

    {

        name: "date",


    }

]

const rangeDatas = [

    {

        name: "experience",
        min: 0,
        max: 100

    }


]

function Crud() {

    const { fields, errors, formDatas, editId, filterStates } = useSelector((state) => state.crud)
    const dispatch = useDispatch()
    console.log(formDatas);
    const navigate = useNavigate()


    function handleChange(e) {

        const { value, name, checked, type } = e.target;

        let newFields = { ...fields }

        if (type === "checkbox" && name === "hobbies") {

            let updateCheckbox = [...fields.hobbies]

            if (checked) {

                updateCheckbox.push(value)

            }

            else {

                updateCheckbox = updateCheckbox.filter((ele) => ele !== value)

            }

            newFields = { ...fields, hobbies: updateCheckbox }

        }

        else if (type === "range" && name === "experience") {

            newFields = { ...fields, experience: Number(value) }


        }

        else {

            newFields = { ...fields, [name]: value }

        }

        dispatch(setInitialState(newFields))
        dispatch(setErrors(validateData(newFields)))

    }

    function validateData(userObj = fields) {

        const { name, email, password, gender, hobbies, country, date, experience } = userObj

        let errors = {}

        if (name.trim() === "") {

            errors.name = "name is required"

        }

        if (email.trim() === "") {

            errors.email = "email is required"

        }
        else if (!/^[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {

            errors.email = "email is incorrect"

        }

        if (password.trim() === "") {

            errors.password = "password is required"

        }

        else if (password.length < 6) {

            errors.password = "password must be more than 6 charcaters"

        }

        if (!gender) {

            errors.gender = "gender is required"

        }

        if (hobbies.length === 0) {

            errors.hobbies = "hobbies must be selected"

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

        const validateFields = validateData();
        if (Object.keys(validateFields).length > 0) {

            dispatch(setErrors(validateFields))
            return

        }

        if (editId) {

            dispatch(editDatas());
            dispatch(setEditId(null));

        }

        else {


            dispatch(addData(fields))

        }


        dispatch(resetForm())
        navigate("/data")


    }





    return (
        <>
            <div className={styles.crud} >
                <h3 className={styles.h1}  > Contact Form </h3>
                <form action="" onSubmit={handleSubmit} >
                    <div className='d-grid gap-4'>
                        {

                            inputBoxDatas.map((data) => <InputBox errors={errors} value={fields} key={data.id} handleChange={handleChange} name={data.name} type={data.type} />)

                        }
                        {

                            checkBoxRadioDatas.map((data) => <CheckBoxRadio errors={errors} value={fields} key={data.id} handleChange={handleChange} name={data.name} type={data.type} options={data.options} />)

                        }
                        {

                            selectOptionsDatas.map((data) => <SelectOption errors={errors} value={fields} key={data.name} handleChange={handleChange} name={data.name} options={data.options} />)

                        }
                        {
                            dateDatas.map((data) => <Date errors={errors} value={fields} name={data.name} handleChange={handleChange} />)
                        }
                        {

                            rangeDatas.map((data) => <Range value={fields} name={data.name} handleChange={handleChange} min={data.min} max={data.max} />)

                        }
                    </div>
                    <Button btnText={"Submit"} btnType={"submit"} className={`btn btn-primary ${styles.btn} ${styles.input}`} key={"submit"} />
                </form>
            </div>

        </>
    )
}

export default Crud
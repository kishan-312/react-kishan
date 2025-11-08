import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import Checkbox from './Checkbox'
import Date from './Date'
import InputBox from './InputBox'
import Range from './Range'
import SelectOption from './SelectOption'
import { editDatas, resetForms, setEditID, setErrors, setFormDatas, updateFields } from '../features/crud/crudSlice'
import { useEffect } from 'react'


const datas = [

    {

        name: "name",
        type: "text"

    },
    {

        name: "email",
        type: "email"

    },
    {

        name: "password",
        type: "password"

    },

]
const datas2 = [

    {

        name: "gender",
        type: "radio",
        options: ["male", "female", "other"]

    },
    {

        name: "hobbies",
        type: "checkbox",
        options: ["music", "sports", "travel"]

    },


]

const datas3 = [

    {

        name: "country",
        options: ["india", "usa", "russia", "canada", "england", "newzeland"]

    }

]

function Form() {

    const { fields, errors, formDatas, editID } = useSelector((state) => state.crud);
    const dispatch = useDispatch()


    function handleChange(e) {

        const { value, name, checked, type } = e.target;

        let newFields = { ...fields }
        if (type === "checkbox" && name === "hobbies") {

            let newHobbies = [...fields.hobbies]

            if (checked) {

                newHobbies.push(value)

            }

            else {

                newHobbies = newHobbies.filter((hobby) => hobby !== value)

            }

            newFields = { ...newFields, hobbies: newHobbies }

        }

        else if (type === "range" && name === "experience") {

            newFields = { ...newFields, [name]: Number(value) }

        }

        else {

            newFields = { ...newFields, [name]: value }

        }

        dispatch(updateFields(newFields))
        dispatch(setErrors(validateForm(newFields)))

    }

    function resetForm() {

        dispatch(resetForms())

    }

    function handleSubmit(e) {

        e.preventDefault();

        const validateDatas = validateForm();

        if (Object.keys(validateDatas).length > 0) {

            dispatch(setErrors(validateDatas));
            return
        }

        if (editID) {

            dispatch(editDatas());
            dispatch(setEditID(null));
            resetForm()

        }

        else {

            dispatch(setFormDatas({ ...fields, id: crypto.randomUUID() }));
            dispatch(setErrors(null));
            dispatch(resetForm())

        }



    }

    function validateForm(userObj = fields) {

        const { name, email, password, gender, hobbies, country, date, experience } = userObj

        let errors = {}

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

            errors.hobbies = "hobbies At least one select"

        }

        if (country === "") {

            errors.country = "country must be select"

        }

        if (!date) {

            errors.date = "date is required"

        }

        return errors

    }

    console.log(formDatas);

    useEffect(() => {

        localStorage.setItem("formDatas1", JSON.stringify(formDatas))

    }, [formDatas])


    return (
        <>
            <form action="" className=' w-50 mx-auto' onSubmit={handleSubmit}  >
                <h2 className='text-center mb-5' >Registration Form</h2>
                <div className=' d-grid gap-3' >
                    {

                        datas.map((data) => <InputBox errors={errors} key={data.name} value={fields[data.name]} onChange={handleChange} name={data.name} type={data.type} />)

                    }
                    {

                        datas2.map((data) => <Checkbox errors={errors} key={data.name} type={data.type} name={data.name} onChange={handleChange} checked={fields[data.name]} options={data.options} />)

                    }
                    {

                        datas3.map((data) => <SelectOption errors={errors} key={data.name} name={data.name} options={data.options} value={fields[data.name]} onChange={handleChange} />)

                    }
                    <Date name={"date"} key={"date"} errors={errors} value={fields.date} onChange={handleChange} />
                    <Range key={"experience"} errors={errors} name={"experience"} value={fields.experience} onChange={handleChange} />
                    <Button btnText={"Submit"} className={"btn btn-primary"} type={"submit"} key={"submit"} />
                </div>
            </form>
        </>
    )
}

export default Form
import React, { useContext } from 'react'
import InputEle from './InputEle'
import CheckboxRadio from './CheckboxRadio';
import SelectOption from './SelectOption';
import Date from './Date';
import Range from './Range';
import Button from './Button';
import { FormContext } from '../contexts/FormContext';

function Form() {

    const { handleChange, formData, setFormData, handleSubmit } = useContext(FormContext)

    const inputEle = [

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


    ];

    const checkboxRadioEle = [

        {

            name: "gender",
            options: [
                {

                    name: "male",
                    type: "radio",


                },
                {

                    name: "female",
                    type: "radio",



                },
                {

                    name: "other",
                    type: "radio",



                },

            ]

        },
        {

            name: "hobbies",
            options: [
                {

                    name: "music",
                    type: "checkbox",


                },
                {

                    name: "sports",
                    type: "checkbox",



                },
                {

                    name: "travel",
                    type: "checkbox",



                },

            ]

        },


    ];

    const selectOptionsEle = [

        {

            name: "country",
            hiddenText: "--- Select Country ---",
            options: ["india", "china", "usa", "russia", "nepal", "africa", "england", "newzeland", "canada"],

        }

    ]





    return (
        <>
            <form action="" onSubmit={handleSubmit} className='px-4 py-3 border-1 border w-50 mx-auto' >
                <h1 className=' my-2 text-center' >Registration Form</h1>
                <div className=' d-grid gap-2' >
                    {

                        inputEle.map((ele, i) => <InputEle label={ele.name[0].toUpperCase() + ele.name.slice(1) + " :"} value={formData[ele.name]} handleChange={handleChange} name={ele.name} type={ele.type} key={ele.name} />)

                    }
                    {

                        checkboxRadioEle.map((ele, i) => <CheckboxRadio key={ele.name} label={ele.name} data={formData} handleChange={handleChange} options={ele.options} />)

                    }
                    {

                        selectOptionsEle.map((ele, i) => <SelectOption handleChange={handleChange} key={ele.name} value={formData[ele.name]} name={ele.name} hiddenText={ele.hiddenText} options={ele.options} />)

                    }
                    <Date label={"date"} value={formData} handleChange={handleChange} />
                    <Range min={0} max={100} label={"experience"} value={formData} handleChange={handleChange} />


                </div>
                <Button className={"btn btn-primary w-100 mt-3"} label={"submit"} type={"submit"} />
            </form>

        </>
    )
}

export default Form




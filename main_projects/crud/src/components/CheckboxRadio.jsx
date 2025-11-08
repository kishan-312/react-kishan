import React, { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

function CheckboxRadio({ label, options, data, handleChange }) {

    const { errors } = useContext(FormContext)

    return (
        <>
            <div className=' d-grid gap-2' >
                <label htmlFor="">{label[0].toUpperCase() + label.slice(1) + " :"}</label>
                <div className=' d-flex gap-4 align-items-center' >
                    {

                        options.map((ele, i) => <div className='form-check' >
                            <input type={ele.type} className='form-check-input' id={ele.name} name={label} checked={ele.type === "radio" ? data[label] === ele.name : data[label].includes(ele.name)} onChange={handleChange} value={ele.name} />
                            <label htmlFor={ele.name} className='form-check-label' >{ele.name}</label>
                        </div>)

                    }
                </div>
                {

                    errors[label] && <small style={{ color: "red" }} >{errors[label]}</small>

                }
            </div>

        </>
    )
}

export default CheckboxRadio
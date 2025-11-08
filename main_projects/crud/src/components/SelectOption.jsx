import React, { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

function SelectOption({ hiddenText, options, name, value, handleChange }) {

    const { errors } = useContext(FormContext)

    return (
        <>
            <div className=' d-grid gap-2' >
                <label htmlFor={name} className='form-label' >{name[0].toUpperCase() + name.slice(1) + " :"}</label>
                <select name={name} id={name} value={value} onChange={handleChange} className='form-select' >
                    <option value="" hidden >{hiddenText}</option>
                    {

                        options.map((ele, i) => <option value={ele}> {ele[0].toUpperCase() + ele.slice(1)} </option>)

                    }
                </select>

                {

                    errors[name] && <small style={{ color: "red" }} >{errors[name]}</small>

                }
            </div>
        </>
    )
}

export default SelectOption
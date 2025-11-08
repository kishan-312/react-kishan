import React, { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

function InputEle({ label, type, name, value, handleChange }) {

    const { errors } = useContext(FormContext)

    return (
        <>
            <div className=' d-grid gap-1' >
                <label htmlFor={name} className='form-label'  > {label}  </label>
                <input type={type} id={name} className='form-control' name={name} value={value} onChange={handleChange} />
                {

                    errors?.[name] && <small style={{ color: "red" }} > {errors?.[name]} </small>

                }
            </div>

        </>
    )
}

export default InputEle
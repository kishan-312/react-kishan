import React, { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

function Range({ label, min, max, value, handleChange }) {

    const { errors } = useContext(FormContext)

    return (
        <>
            <div className=' d-grid gap-2' >
                <label htmlFor={label} className='form-label' > {label[0].toUpperCase() + label.slice(1) + " :"} </label>
                <input type="range" name={label} id={label} className='form-range' min={min} value={value[label]} onChange={handleChange} max={max} />

                {

                    errors[label] && <small style={{ color: "red" }} >{errors[label]}</small>

                }
            </div>

        </>
    )
}

export default Range
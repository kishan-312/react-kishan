import React, { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

function Date({ label, value, handleChange }) {

    const { errors } = useContext(FormContext)


    return (
        <>
            <div className=' d-grid gap-2' >
                <label className='form-label' htmlFor={label}>{label[0].toUpperCase() + label.slice(1) + " :"} </label>
                <input type="date" className='form-control' value={value[label]} onChange={handleChange} name={label} id={label} />
                {

                    errors[label] && <small style={{ color: "red" }} >{errors[label]}</small>

                }
            </div>

        </>
    )
}

export default Date
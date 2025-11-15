import React from 'react'
import styles from "../css/crud.module.css"

function Date({ name, errors, value, handleChange }) {
    return (
        <>
            <div className='d-grid gap-2' >
                <label htmlFor={name} className='form-label' > {name.charAt(0).toUpperCase() + name.slice(1) + ":"} </label>
                <input type="date" id={name} name={name} value={value[name]} onChange={handleChange} className={`form-control ${styles.input}`} />
                {

                    errors && <small style={{ color: "red" }} > {errors[name]} </small>

                }
            </div>
        </>
    )
}

export default Date
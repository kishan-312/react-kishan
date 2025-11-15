import React from 'react'
import styles from "../css/crud.module.css"

function SelectOption({ name, options, value, handleChange, errors }) {
    return (
        <>
            <div  >
                <label htmlFor={name} className='form-label' >Select Country</label>
                <select name={name} value={value[name]} onChange={handleChange} className={`form-select  ${styles.input}`} id={name}>
                    <option value="" hidden > {`---Select ${name}---`} </option>
                    {

                        options.map((opt) => <option value={opt}>{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>)

                    }
                </select>
                {

                    errors && <small style={{ color: "red" }} > {errors[name]} </small>

                }
            </div>

        </>
    )
}

export default SelectOption
import React from 'react'
import styles from "../css/crud.module.css"

function Range({ name, min, max, value, handleChange }) {
    return (
        <>
            <div className=' d-grid gap-2' >
                <label htmlFor={name}  >{name.charAt(0).toUpperCase() + name.slice(1) + ":"}</label>
                <input type="range" id={name} onChange={handleChange} value={value[name]} name={name} min={min} max={max} className={`${styles.input} form-range`} />
            </div>

        </>
    )
}

export default Range
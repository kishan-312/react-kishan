import React from 'react'

function Range({ name, value, onChange, errors }) {
    return (
        <>
            <label htmlFor={name} className='form-label' >{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            <input type="range" className='form-range' min={0} max={100} value={value} onChange={onChange} name={name} id={name} />
            {

                errors && <small style={{ color: "red" }} > {errors[name]} </small>

            }
        </>
    )
}

export default Range
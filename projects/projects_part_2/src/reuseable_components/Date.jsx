import React from 'react'

function Date({ name, value, onChange, errors }) {
    return (
        <>
            <label htmlFor={name} className='form-label' >{name}</label>
            <input type="date" className='form-control' id={name} name={name} value={value} onChange={onChange} />
            {

                errors && <small style={{ color: "red" }} > {errors[name]} </small>

            }
        </>
    )
}

export default Date
import React from 'react'

function SelectOption({ name, options, value, onChange, errors }) {
    return (
        <>
            <div className=' d-grid gap-3' >
                <label htmlFor={name}>{`Select ${name}`}</label>
                <select name={name} id={name} className='form-select' value={value} onChange={onChange} >
                    <option value="" hidden >{`--- Select ${name} ---`}</option>
                    {

                        options.map((opt) => <option value={opt} >{opt.charAt(0).toUpperCase() + opt.slice(1)}</option>)

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
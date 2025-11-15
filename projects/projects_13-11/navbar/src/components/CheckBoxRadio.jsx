import React from 'react'

function CheckBoxRadio({ name, type, options, value, handleChange, errors }) {
    return (
        <>
            <div className='form-check d-grid gap-2' >
                <label htmlFor="">{name.charAt(0).toUpperCase() + name.slice(1) + ":"} </label>
                <div className='d-flex gap-3 align-items-center' >
                    {
                        options.map((opt) => <div key={opt} className='d-flex gap-2 align-items-center' >

                            <input id={opt} onChange={handleChange} checked={type === "checkbox" ? value[name].includes(opt) : value[name] === opt} value={opt} name={name} type={type} className='form-check-input' />
                            <label htmlFor={opt} className='form-check-label' >
                                {
                                    opt.charAt(0).toUpperCase() + opt.slice(1)
                                }
                            </label>
                        </div>)

                    }
                </div>
                {

                    errors && <small style={{ color: "red" }} > {errors[name]} </small>

                }
            </div>

        </>
    )
}

export default CheckBoxRadio
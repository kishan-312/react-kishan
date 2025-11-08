import React from 'react'

function Checkbox({ type, name, options, onChange, checked, errors }) {
    return (
        <>
            <div className=' d-grid gap-2' >
                <label htmlFor="">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
                <div className='d-flex gap-5 align-items-center' >
                    {

                        options.map((opt) => <div key={opt} className='d-flex gap-3 align-items-center' >
                            <input type={type} id={opt} className='form-check-input' name={name} value={opt} onChange={onChange} checked={

                                type === "checkbox" ? checked.includes(opt) : checked === opt

                            } />
                            <label htmlFor={opt} className='form-check-label' > {opt} </label>
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

export default Checkbox
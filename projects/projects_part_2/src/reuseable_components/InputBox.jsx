import React from 'react'

function InputBox({ type, name, value, onChange, errors }) {
    return (
        <>

            <div>
                <label htmlFor={name} className='form-label' >{name.charAt(0).toUpperCase() + name.slice(1)} </label>
                <input type={type} className='form-control' required placeholder={`Enter Your ${name}`} name={name} id={name} value={value} onChange={onChange} />
                {

                    errors && <small style={{ color: "red" }} > {errors[name]} </small>

                }
            </div>
        </>
    )
}

export default InputBox
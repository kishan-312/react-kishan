import React from 'react'

function Button({ label, type, className, onclick }) {
    return (
        <>
            <button type={type} onClick={onclick} className={className} >{label[0].toUpperCase() + label.slice(1)}</button>
        </>
    )
}

export default Button
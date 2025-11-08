import React from 'react'

function Button({ type, className, onClick, btnText, style, disabled }) {
    return (
        <>
            <button style={style} className={className} type={type} onClick={onClick} disabled={disabled} > {btnText} </button>
        </>
    )
}

export default Button
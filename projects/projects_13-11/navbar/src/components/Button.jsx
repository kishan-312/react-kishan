import React from 'react'

function Button({ className, btnText, btnType, onClick, btnStyle }) {
    return (
        <>
            <button style={btnStyle} className={className} type={btnType} onClick={onClick}  > {btnText} </button>

        </>
    )
}

export default Button
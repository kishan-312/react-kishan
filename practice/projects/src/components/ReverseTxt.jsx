import React, { useState } from 'react'

function ReverseTxt() {

    const [txt, setTxt] = useState("")

    return (
        <>
            <input type="text" placeholder='Enter Data' value={txt} onChange={(e) => setTxt(e.target.value)} />
            <p> Data : {txt.split("").reverse().join("")} </p>
        </>
    )
}

export default ReverseTxt
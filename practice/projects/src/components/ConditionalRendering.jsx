import React, { useState } from 'react'

function ConditionalRendering() {

    const [txt, setTxt] = useState(null)



    return (
        <>
            <p> {txt ? txt : "please log in"} </p>
            <button onClick={() => setTxt("kishan")} > Login </button>
            <button onClick={() => setTxt(null)} > LogOut </button>
        </>
    )
}

export default ConditionalRendering
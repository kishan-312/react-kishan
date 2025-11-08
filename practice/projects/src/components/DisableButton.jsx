import React, { useState } from 'react'

function DisableButton() {

    const [txt, setTxt] = useState("");


    return (
        <>
            <input type="text" value={txt} onChange={(e) => setTxt(e.target.value)} />
            <button disabled={txt.trim() === ""} >Submit</button>

        </>
    )
}

export default DisableButton
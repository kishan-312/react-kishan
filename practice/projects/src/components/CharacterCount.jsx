import React, { useState } from 'react'

function CharacterCount() {

    const [countChar, setCountChar] = useState("")

    return (
        <>

            <textarea name="" value={countChar} onChange={(e) => setCountChar(e.target.value)} id=""></textarea>
            <p>Count : {countChar.length} </p>
        </>
    )
}

export default CharacterCount
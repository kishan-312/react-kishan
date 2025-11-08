import React, { useState } from 'react'

function TwoWayBinding() {

    const [txt, setText] = useState("")

    return (
        <div>
            <input type="text" value={txt} onChange={(e) => setText(e.target.value)} />
            <p> Your Name : {txt} </p>
        </div>
    )
}

export default TwoWayBinding
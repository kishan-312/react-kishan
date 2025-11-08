import React, { useState } from 'react'

function ChildToParent({ data, handleData }) {

    const [data1, setData1] = useState("childData")

    return (
        <>
            <p> {data} </p>
            <button onClick={() => handleData(data1)} > Child </button>

        </>
    )
}

export default ChildToParent
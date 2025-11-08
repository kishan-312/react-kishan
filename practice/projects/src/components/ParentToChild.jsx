import React, { useState } from 'react'
import ChildToParent from './ChildToParent'

function ParentToChild() {

    const [txt, setTxt] = useState("kishan")

    function handleData(data) {

        console.log(data);


    }

    return (
        <>
            <button onClick={() => setTxt("Hello")} > Add </button>
            <ChildToParent data={txt} handleData={handleData} />


        </>
    )
}


export default ParentToChild
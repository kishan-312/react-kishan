import React, { useState } from 'react'

function Que1() {

    const [count, setCount] = useState(0)
    // setCount(count + 1)
    // setCount(count + 1)
    setCount((prev) => prev + 1)
    setCount((prev) => prev + 1)
    console.log(count);


    return (
        <>
            <div>
                <p>{"ghi"}</p>
            </div>

        </>
    )
}

export default Que1
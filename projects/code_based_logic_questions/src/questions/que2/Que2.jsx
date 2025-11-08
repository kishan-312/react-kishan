import React, { useState } from 'react'

function Que2() {

    // const [count, setCount] = useState(0)
    const [count, setCount] = useState(5)

    function handleClick() {

        // 1 setCount(count + 1) = this increment 1
        //1 setCount(count + 1);
        //2 setCount((prev) => prev + 1)  = this increment 2
        //2 setCount((prev) => prev + 1)
        // 3 setCount((prev) => prev + 1) = depends on position increment 1 or 2
        //3 setCount(count + 1)
        //4 setCount(count - 2)
        //4 setCount((prev) => prev - 2)
        console.log("inside handler", count);


    }


    return (
        <>
            <div>
                <p>{count}</p>
                <button onClick={handleClick} >Click</button>
            </div>

        </>
    )
}

export default Que2
import React, { useState } from 'react'

function Que3() {

    const [count, setCount] = useState(5);

    function handleClick() {
        setCount(count + 1);
        console.log("after first setCount:", count);// 5

        setTimeout(() => {
            console.log("inside timeout:", count);// 5
            setCount(count + 1);
        }, 0);

        console.log("end of function:", count);// 5
    }

    return (
        <>
            <div>
                {/* 6 */}
                <p>{count}</p>
                <button onClick={handleClick}>Increase</button>
            </div>

        </>
    )
}

export default Que3
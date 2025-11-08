import React, { useLayoutEffect, useRef } from 'react'

function UseLayoutEffect() {

    const boxRef = useRef();

    useLayoutEffect(() => {
        console.log("Width:", boxRef.current.offsetWidth);
    });

    return (
        <>
            <div ref={boxRef} style={{ width: "200px", height: "100px", background: "red" }}>Box</div>

        </>
    )
}

export default UseLayoutEffect
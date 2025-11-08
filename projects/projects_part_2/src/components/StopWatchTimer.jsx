import React, { useEffect, useState } from 'react'

function StopWatchTimer() {

    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false)

    useEffect(() => {

        let timer
        if (isRunning) {

            timer = setInterval(() => {

                setSeconds((prev) => prev + 1)

            }, 1000)

        }


        return () => clearInterval(timer)
        // 

    }, [seconds, isRunning])

    return (
        <>
            <p> {seconds} </p>
            <button onClick={() => setIsRunning(true)} > Start </button>
            <button onClick={() => setIsRunning(false)} > stop </button>
            <button onClick={() => setSeconds(0)} > Reset </button>

        </>
    )
}

export default StopWatchTimer
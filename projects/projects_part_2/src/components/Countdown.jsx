import React, { useEffect, useState } from 'react'

function Countdown({ start = 3000, duration = 2000 }) {

    const [count, setCount] = useState(start);

    useEffect(() => {

        let startFrom = start;
        let end = 0;
        let takeTime = duration;
        let stepTime = 20;
        let steps = takeTime / stepTime;
        let decrement = start / steps;

        let timer = setInterval(() => {

            startFrom -= decrement;

            if (startFrom <= end) {

                startFrom = end
                clearInterval(timer)

            }

            setCount(Math.floor(startFrom))

        }, stepTime)

        return () => clearInterval(timer)

    }, [start, duration])



    return (
        <>
            <p> {count} </p>

        </>
    )
}

export default Countdown
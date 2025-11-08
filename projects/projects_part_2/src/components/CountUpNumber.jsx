import React, { useEffect, useState } from 'react'

function CountUpNumber({ end = 3000, duration = 2000 }) {

    const [count, setCount] = useState(0)

    useEffect(() => {

        let start = 0;
        let endT = end;
        let takenTime = duration;
        let stepTime = 20;
        let steps = takenTime / stepTime;
        let increment = endT / steps;

        let timer = setInterval(() => {

            start += increment;

            if (start >= endT) {

                start = endT;
                clearInterval(timer)

            }

            setCount(Math.floor(start))


        }, stepTime)

        return () => clearInterval(timer)

    }, [end, duration])

    return (
        <>

            <p> {count} </p>
        </>
    )
}

export default CountUpNumber
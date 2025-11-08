import React, { useEffect, useMemo, useState } from 'react'

function CountDownTimer() {

    const targetTime = new Date().getTime() + 3600 * 1000
    // const targetTime = useMemo(new Date().getTime() + 3600 * 1000)

    const [timeLeft, setTimeLeft] = useState(targetTime - new Date().getTime());

    useEffect(() => {



        let timer = setInterval(() => {

            const now = new Date().getTime();
            const diff = targetTime - now;

            if (diff <= 0) {

                clearInterval(timer)

            }

            else {

                setTimeLeft(diff)

            }


        }, 1000)

        return () => clearInterval(timer)


    }, [])
    // }, [timeLeft])

    function formateTime(ms) {
        let s = Math.floor(ms / 1000)
        let days = Math.floor(s / 86400);
        let hours = Math.floor((s % 86400) / 3600);
        let minutes = Math.floor((s % 3600) / 60);
        let seconds = Math.floor(s % 60)

        return `${days.toString().padStart(2, "0")}:${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`

    }

    return (
        <>
            <p> {timeLeft > 0 ? formateTime(timeLeft) : "complete"} </p>

        </>
    )
}

export default CountDownTimer
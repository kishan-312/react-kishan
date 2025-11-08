import React, { useEffect, useState } from 'react'

function DigitalClock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {

        let timer = setInterval(() => {

            setTime(new Date())

        }, 100)

        return () => clearInterval(timer)

    }, [])

    const hours = time.getHours().toString().padStart(2, "0")
    const minutes = time.getMinutes().toString().padStart(2, "0")
    const seconds = time.getSeconds().toString().padStart(2, "0")

    return (
        <>
            <p> {hours} : {minutes} : {seconds} </p>
            <p> {time.toLocaleTimeString(undefined, {


                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"

            })} </p>

        </>
    )
}

export default DigitalClock
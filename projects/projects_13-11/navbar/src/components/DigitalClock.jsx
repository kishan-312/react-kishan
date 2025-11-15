import React, { useEffect } from 'react'
import styles from "../css/counter.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { setClock } from '../features/digitalClock/digitalClockSlice';

function DigitalClock() {

    const { clock } = useSelector((state) => state.clock);
    const dispatch = useDispatch()

    useEffect(() => {

        let interval = setInterval(() => {

            dispatch(setClock(new Date()))

        }, 1000)

        return () => clearInterval(interval)


    }, [])

    const hours = clock.getHours().toString().padStart(2, "0")
    const minutes = clock.getMinutes().toString().padStart(2, "0")
    const seconds = clock.getSeconds().toString().padStart(2, "0")

    return (
        <>

            <div className={styles.counter} >
                <p> {clock.toLocaleTimeString()} </p>
                <p> {hours + ":" + minutes + ":" + seconds} </p>
            </div>

        </>
    )
}

export default DigitalClock
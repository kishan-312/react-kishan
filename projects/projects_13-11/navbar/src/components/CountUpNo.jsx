import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCounter } from '../features/countUp/countUpSlicer'
import styles from "../css/counter.module.css"

function CountUpNo() {

    const { count } = useSelector((state) => state.countup)
    const dispatch = useDispatch()

    useEffect(() => {

        let start = 0;
        let end = 4000;
        let duration = 5000;
        let stepTime = 20;
        let steps = duration / stepTime;
        let increment = end / steps

        let interval = setInterval(() => {

            start += increment;

            if (start >= end) {

                start = end;
                clearInterval(interval)

            }


            dispatch(setCounter(Math.floor(start)))



        }, stepTime)


    }, [])


    return (
        <>

            <div className={styles.counter} >
                <h1> {count} </h1>
            </div>

        </>
    )
}

export default CountUpNo
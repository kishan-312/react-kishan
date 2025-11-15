import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../css/counter.module.css"
import { setCountDown } from '../features/countUp/countUpSlicer';

function CountDown() {

    const { countDown } = useSelector((state) => state.countup);
    const dispatch = useDispatch()

    useEffect(() => {

        let start = 4000;
        let end = 0;
        let duration = 4000;
        let stepsTime = 20;
        let steps = duration / stepsTime;
        let decrement = start / steps;

        let interval = setInterval(() => {

            start -= decrement;

            if (start <= end) {

                start = end
                clearInterval(interval)

            }

            dispatch(setCountDown(start))

        }, stepsTime)


    }, [])

    return (
        <>
            <div className={styles.counter} >
                <h1> {countDown} </h1>
            </div>
        </>
    )
}

export default CountDown
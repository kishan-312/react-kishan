import React, { useEffect } from 'react'
import styles from "../css/counter.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { setRunning, setTimer } from '../features/timer/timerSlice';

function Timer() {

    const { isRunning, timer } = useSelector((state) => state.timer)
    const dispatch = useDispatch();

    useEffect(() => {

        let interval = setInterval(() => {

            if (isRunning) {

                dispatch(setTimer(timer + 1));

            }

        }, 1000)

        return () => clearInterval(interval)

    }, [dispatch, isRunning, timer])


    return (
        <>
            <div className={styles.counter} >
                <p>Timer : {timer} </p>
                <div>
                    <button onClick={() => dispatch(setTimer(0))} >Reset</button>
                    <button onClick={() => dispatch(setRunning(true))} >start</button>
                    <button onClick={() => dispatch(setRunning(false))} >stop</button>
                </div>
            </div>

        </>
    )
}

export default Timer
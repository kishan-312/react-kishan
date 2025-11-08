import React, { useEffect } from 'react'
import { DiOpenshift } from 'react-icons/di';
import { useDispatch, useSelector } from 'react-redux'
import { setRunningTimer, setSeconds } from '../features/timer_stopwatch/timerSlice';

function Start_stop_resetTimer() {

    const { seconds, isRunning } = useSelector((state) => state.timer);
    const dispatch = useDispatch()

    useEffect(() => {

        let timer
        if (isRunning) {

            timer = setInterval(() => {

                dispatch(setSeconds(seconds + 1))

            }, 1000)

        }

        return () => clearInterval(timer)

    }, [isRunning, seconds, dispatch])

    return (
        <>
            <div className='d-flex gap-4' >
                <p>{seconds} </p>
                <button onClick={() => dispatch(setRunningTimer(true))} >Start</button>
                <button onClick={() => dispatch(setRunningTimer(false))} >Stop</button>
                <button onClick={() => dispatch(setSeconds(0))} >Reset Timer</button>
            </div>

        </>
    )
}

export default Start_stop_resetTimer
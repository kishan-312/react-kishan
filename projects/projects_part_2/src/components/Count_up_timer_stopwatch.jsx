import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSeconds } from '../features/timer_stopwatch/timerSlice';

function Count_up_timer_stopwatch() {

    const { seconds } = useSelector((state) => state.timer);
    const dispatch = useDispatch()


    useEffect(() => {

        if (seconds >= 30) {

            return
        }

        const timer = setInterval(() => {

            dispatch(setSeconds(seconds + 1))

        }, 1000)

        return () => clearInterval(timer)

    }, [seconds])

    return (
        <>
            <div className='ms-3' >
                {

                    seconds

                }
            </div>

        </>
    )
}

export default Count_up_timer_stopwatch
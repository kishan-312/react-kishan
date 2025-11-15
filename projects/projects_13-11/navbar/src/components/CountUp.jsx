import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCount } from '../features/countUp/countUpSlicer'
import styles from "../css/counter.module.css"

function CountUp() {

    const { countUp } = useSelector((state) => state.countup)
    const dispatch = useDispatch()

    useEffect(() => {



        const interval = setInterval(() => {

            if (countUp < 10) {

                dispatch(setCount())

            }

        }, 1000)


        return () => clearInterval(interval)

    }, [countUp])


    return (
        <>
            <div className={styles.counter} >
                <h1>{
                    countUp
                }</h1>
            </div>

        </>
    )
}

export default CountUp
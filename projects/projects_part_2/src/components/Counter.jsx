import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counter/counterSlice'

function Counter() {

    const { count } = useSelector((state) => state.counter)
    const dispatch = useDispatch()


    return (
        <>

            <p> Count : {count} </p>
            <button onClick={() => dispatch(increment())} >Inc</button>
            <button onClick={() => dispatch(decrement())} >Dec</button>

        </>
    )
}

export default Counter
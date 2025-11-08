import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slice/counterSlice'

function Counter2() {

    const { count } = useSelector((state) => state.counter)

    const dispatch = useDispatch()

    return (
        <>
            <span> Count : {count}  </span>
            <button onClick={() => dispatch(increment())} >Increment</button>
            <button onClick={() => dispatch(decrement())} >Decrement</button>
        </>
    )
}

export default Counter2
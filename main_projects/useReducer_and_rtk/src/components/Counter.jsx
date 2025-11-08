import { act, useReducer } from "react"


const initialState = {

    count: 0

}

function reducer(state, action) {

    if (action.type === "inc") {

        return {

            count: state.count + 1

        }

    }

    else if (action.type === "dec") {

        return {

            count: state.count - 1

        }

    }


}

function Counter() {

    const [state, dispatch] = useReducer(reducer, initialState)

    function increment() {

        dispatch({ type: "inc" })

    }

    function decrement() {

        dispatch({ type: "dec" })

    }


    return (
        <>
            <p>Count : {state.count} </p>
            <button onClick={increment} > In crement </button>
            <button onClick={decrement} > Decrement </button>

        </>
    )
}

export default Counter
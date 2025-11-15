import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    countUp: 0,
    count: 0,
    countDown: 4000,

}

const countUpSlice = createSlice({

    name: "countup",
    initialState,
    reducers: {

        setCount: (state, action) => {

            state.countUp = state.countUp + 1

        },

        setCounter: (state, action) => {

            state.count = action.payload

        },

        setCountDown: (state, action) => {

            state.countDown = action.payload

        }

    }


})


export default countUpSlice.reducer
export const { setCount, setCounter, setCountDown } = countUpSlice.actions


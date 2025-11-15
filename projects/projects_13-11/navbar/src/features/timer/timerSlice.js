import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    timer: 0,
    isRunning: false,

}

const timerSlice = createSlice({

    name: "timer",
    initialState,
    reducers: {

        setTimer: (state, action) => {

            state.timer = action.payload

        },

        setRunning: (state, action) => {

            state.isRunning = action.payload

        }

    }

})

export default timerSlice.reducer
export const { setTimer, setRunning } = timerSlice.actions



import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    seconds: 0,
    isRunning: false,

}

const timerSlice = createSlice({

    name: "timer",
    initialState,
    reducers: {

        setSeconds: (state, action) => {

            state.seconds = action.payload

        },
        // 
        setRunningTimer: (state, action) => {

            state.isRunning = action.payload

        }

    }

})


export default timerSlice.reducer
export const { setSeconds, setRunningTimer } = timerSlice.actions


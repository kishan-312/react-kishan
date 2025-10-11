import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    days : 0 ,
    hours : 0,
    minutes : 0,
    seconds : 0

}

const timerSlice = createSlice({

    name : "timer",
    initialState,
    reducers : {

        setTimer : (state,action) => {

            state.days = action.payload.days ;
            state.hours = action.payload.hours ;
            state.minutes = action.payload.minutes ;
            state.seconds = action.payload.seconds ;
            
        }

    }

})


export default timerSlice.reducer
export const { setTimer } = timerSlice.actions


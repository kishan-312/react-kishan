import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {

timeLeft : {

    days : 0,
    hours : 0,
    minutes : 0,
    seconds : 0,

}

}

const salesTimerSlice = createSlice({

    name : "salesTimer",
    initialState,
    reducers : {

        setTime : (state,action) => {

            state.timeLeft.days =  action.payload.days ;
            state.timeLeft.hours =  action.payload.hours ;
            state.timeLeft.minutes =  action.payload.minutes ;
            state.timeLeft.seconds =  action.payload.seconds ;
            

        }

    },
    

})

export default salesTimerSlice.reducer ;
export const { setTime } = salesTimerSlice.actions



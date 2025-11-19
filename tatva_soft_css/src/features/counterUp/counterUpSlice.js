import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    counters : [0,0,0,0]

}

const counterUpSlice = createSlice({

    name : "counterUp",
    initialState,
    reducers : {

        setCounter : (state,action) => {

            const { index,value } = action.payload ;
            state.counters[index] = value

        }

    }

})


export default counterUpSlice.reducer
export const { setCounter } = counterUpSlice.actions


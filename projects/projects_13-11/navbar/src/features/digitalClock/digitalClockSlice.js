import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    clock: new Date(),

}

const digitalClockSlice = createSlice({

    name: "clock",
    initialState,
    reducers: {

        setClock: (state, action) => {

            state.clock = action.payload

        }

    }


})


export default digitalClockSlice.reducer;
export const { setClock } = digitalClockSlice.actions



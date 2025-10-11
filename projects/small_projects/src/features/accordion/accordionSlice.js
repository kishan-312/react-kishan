import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    openIndex : null

}

 const accordionSlice = createSlice({

    name : "accordion",
    initialState ,
    reducers : {

        toggleIndex : (state,action) => {

            state.openIndex = state.openIndex === action.payload ? null : action.payload

        }

    }


})


export default accordionSlice.reducer ;
export const { toggleIndex } = accordionSlice.actions ;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    index: null

}

const accordionSlice = createSlice({

    name: "accordion",
    initialState,
    reducers: {

        clickHandler: (state, action) => {

            state.index = state.index === action.payload ? null : action.payload

        }

    }


})

export const { clickHandler } = accordionSlice.actions;
export default accordionSlice.reducer

import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isOpen: false

}

const modalSlice = createSlice({

    name: "modal",
    initialState,
    reducers: {


        openHandler: (state, action) => {

            state.isOpen = true

        },
        closeHandler: (state, action) => {

            state.isOpen = false

        },
        toggleHandler: (state, action) => {

            state.isOpen = !state.isOpen

        }



    }

})


export const { openHandler, toggleHandler, closeHandler } = modalSlice.actions
export default modalSlice.reducer

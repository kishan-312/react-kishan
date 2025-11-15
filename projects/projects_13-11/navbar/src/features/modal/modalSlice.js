import { createSlice } from "@reduxjs/toolkit"

const initialState = {

    isOpen: false

}

const modalSlice = createSlice({

    name: "modal",
    initialState,
    reducers: {

        toggleModal: (state, action) => {

            state.isOpen = !state.isOpen

        },
        openModal: (state, action) => {

            state.isOpen = true

        },
        closeModal: (state, action) => {

            state.isOpen = false

        },


    }

})


export default modalSlice.reducer;
export const { toggleModal, openModal, closeModal } = modalSlice.actions

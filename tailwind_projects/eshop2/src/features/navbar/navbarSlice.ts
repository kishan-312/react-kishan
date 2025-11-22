import { createSlice } from "@reduxjs/toolkit";

interface NavbarState {

    isOpen : boolean

}

const initialState : NavbarState = {

    isOpen : false

}

const navbarSlice = createSlice({

    name : "navbar",
    initialState,
    reducers : {

        setIsOpen : (state) => {

            state.isOpen = !state.isOpen

        },
        closeIsOpen : (state) => {

            state.isOpen = false

        },

    }

})

export default navbarSlice.reducer ;
export const { setIsOpen, closeIsOpen } = navbarSlice.actions

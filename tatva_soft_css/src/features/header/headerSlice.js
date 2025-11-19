import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isOpen : false,
    openDropdown : null

}

const headerSlice = createSlice({

    name : "header",
    initialState,
    reducers : {

        setIsOpen : (state,action) => {

            state.isOpen = action.payload

        },

        toggleMenu : (state) => {

            state.isOpen = !state.isOpen

        },
        closeMenu : (state) => {

            state.isOpen = false

        },
        setOpenDropdown : (state,action) => {

            state.openDropdown = state.openDropdown === action.payload ? null : action.payload

        }

    }

})


export const { setIsOpen,toggleMenu, closeMenu, setOpenDropdown } = headerSlice.actions
export default headerSlice.reducer


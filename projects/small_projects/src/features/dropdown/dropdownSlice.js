import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isOpen : false

}

const dropdownSlice = createSlice({

    name : "dropdown",
    initialState,
    reducers : {

        toggleDropdown : (state) => {

            state.isOpen = !state.isOpen

        },

        closeDropdown : (state) => {

            state.isOpen = false

        },

    }

})


export default dropdownSlice.reducer 
export const { toggleDropdown, closeDropdown } = dropdownSlice.actions
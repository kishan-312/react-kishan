import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface NavbarState  {

    isOpen : boolean

}

const initialState : NavbarState = {

    isOpen  : false

}

const navbarSlice = createSlice({

    name : "navbar",
    initialState,
    reducers : {

        setIsOpen : (state,action: PayloadAction<boolean> ) => {

            state.isOpen = action.payload

        }

    }

})

export default navbarSlice.reducer 
export const { setIsOpen } = navbarSlice.actions



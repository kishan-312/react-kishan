import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    isOpen : false

}

const headerSlice = createSlice({

    name : "header",
    initialState,
    reducers : {

        setIsOpen : (state,action) => {

            state.isOpen = action.payload

        }

    }

})


export default headerSlice.reducer
export const { setIsOpen  } = headerSlice.actions


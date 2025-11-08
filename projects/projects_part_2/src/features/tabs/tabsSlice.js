import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    openIndex: 0

}

const tabsSlice = createSlice({

    name: "tabs",
    initialState,
    reducers: {


        clickHandler: (state, action) => {

            state.openIndex = action.payload

        }



    }

})


export const { clickHandler } = tabsSlice.actions
export default tabsSlice.reducer

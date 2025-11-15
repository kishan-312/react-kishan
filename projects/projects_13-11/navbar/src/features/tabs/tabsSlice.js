import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    tabs: 0

}

const tabsSlice = createSlice({

    name: "tabs",
    initialState,
    reducers: {

        setTabs: (state, action) => {

            state.tabs = action.payload

        }

    }


})


export default tabsSlice.reducer
export const { setTabs } = tabsSlice.actions


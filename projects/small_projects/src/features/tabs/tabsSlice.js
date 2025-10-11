import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    openTab : 0 

}

const tabsSlice = createSlice({

    name : "tabs" ,
    initialState,
    reducers : {

        setOpenTab : (state,action) => {

            state.openTab = action.payload

        }

    }

})

export default tabsSlice.reducer ;

export const { setOpenTab } = tabsSlice.actions


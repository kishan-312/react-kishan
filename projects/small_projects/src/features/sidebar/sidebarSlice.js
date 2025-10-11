import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {

    isOpen : false

}

const sidebarSlice = createSlice({

    name : "sidebar",
    initialState,
    reducers : {

        togglesidebar : (state) => {

            state.isOpen = !state.isOpen

        },
        closeSidebar : (state) => {

            state.isOpen = false

        },
        },
        openSidebar : (state) => {

            state.isOpen = true

        },

    }

)

export default sidebarSlice.reducer ;
export const { togglesidebar,closeSidebar,openSidebar } = sidebarSlice.actions



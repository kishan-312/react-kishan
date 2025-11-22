import { createSlice } from "@reduxjs/toolkit";

interface HeaderState {

    theme : "light" | "dark"

}

const initialState : HeaderState = {

    theme : (localStorage.getItem("theme2") as "light" | "dark" ) || "light" 

}

const themeSlice = createSlice({

    name : "theme",
    initialState,
    reducers : {

        setTheme : (state) => {

            state.theme = state.theme === "dark" ? "light" : "dark" ;
            localStorage.setItem("theme2", state.theme)

        }

    }

})

export default themeSlice.reducer ;
export const { setTheme } = themeSlice.actions

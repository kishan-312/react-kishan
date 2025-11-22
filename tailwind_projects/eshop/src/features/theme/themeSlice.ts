import { createSlice } from "@reduxjs/toolkit";

interface themeState {

    theme : "light" | "dark"

}

const initialState : themeState = {

    theme : (localStorage.getItem("theme") as "light" | "dark" ) || "light"

}

const themeSlice = createSlice({

    name : "theme",
    initialState,
    reducers : {

        toggleTheme : (state) => {

            state.theme = state.theme === "dark" ? "light" : "dark"

        }

    }

})

export default themeSlice.reducer ;
export const { toggleTheme } = themeSlice.actions



import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    theme: JSON.parse(localStorage.getItem("themeK")) || "light"

}

const themeChangeSlice = createSlice({

    name: "theme",
    initialState,
    reducers: {

        setTheme: (state, action) => {

            state.theme = action.payload;
            localStorage.setItem("themeK", JSON.stringify(state.theme))

        }

    }

})

export default themeChangeSlice.reducer
export const { setTheme } = themeChangeSlice.actions




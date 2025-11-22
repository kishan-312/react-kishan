import { configureStore } from "@reduxjs/toolkit";
import navbarReducer from "../features/navbar/navbarSlice.ts"
import themeReducer from "../features/theme/themeSlice.ts"

export const store = configureStore({

    reducer : {

        navbar : navbarReducer,
        theme : themeReducer,

    }

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch




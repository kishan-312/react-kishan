import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/header/headerSlice.js"
import counterUpReducer from "../features/counterUp/counterUpSlice.js"

export const store = configureStore({

    reducer : {

        header : headerReducer,
        counterUp : counterUpReducer

    }

})


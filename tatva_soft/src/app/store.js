import { configureStore } from "@reduxjs/toolkit";
import headerReducer from "../features/header/headerSlice.js"

export const store = configureStore({

    reducer : {

        header : headerReducer

    }

})


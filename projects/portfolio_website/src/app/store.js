import { configureStore } from "@reduxjs/toolkit";
import salesTimerReducer from "../features/salesTimer/salesTimerSlice.js"
import productsReducer from "../features/products/productsSlice.js"
import sliderReducer from "../features/slider/sliderSlice.js"

export const store = configureStore({

    reducer : {

        salesTimer : salesTimerReducer,
        products : productsReducer,
        slider : sliderReducer

    }

}) ;

import { configureStore } from "@reduxjs/toolkit";
import crudReducer from "../features/crud/crudSlice.js"


const store = configureStore({

    reducer : {

        crud : crudReducer

    }

})

export default store



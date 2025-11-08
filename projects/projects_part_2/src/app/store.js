import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice.js";
import accordionReducer from "../features/accordion/accordionSlice.js"
import tabsReducer from "../features/tabs/tabsSlice.js"
import modalReducer from "../features/modal/modalSlice.js"
import crudReducer from "../features/crud/crudSlice.js"
import timerReducer from "../features/timer_stopwatch/timerSlice.js"
import loadDataReducer from "../features/load_data/loadDataSlice.js"
import crudApiReducer from "../features/crud_api/crudSlice.js"
import todoListReducer from "../features/todoLists/todoListsSlice.js"
import sliderReducer from "../features/slider/sliderSlice.js"

export const store = configureStore({

    reducer: {

        counter: counterReducer,
        accordion: accordionReducer,
        tabs: tabsReducer,
        modal: modalReducer,
        crud: crudReducer,
        timer: timerReducer,
        loaddata: loadDataReducer,
        crudapi: crudApiReducer,
        todolists: todoListReducer,
        slider: sliderReducer
    }

})




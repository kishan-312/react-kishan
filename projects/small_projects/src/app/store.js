import { configureStore } from "@reduxjs/toolkit";
import accordionReducer from "../features/accordion/accordionSlice.js"
import tabsReducer from "../features/tabs/tabsSlice.js"
import modalReducer from "../features/modals/modalSlice.js"
import tooltipReducer from "../features/tooltip/tooltipSlice.js"
import dropdownReducer from "../features/dropdown/dropdownSlice.js"
import sliderReducer from "../features/slider/sliderSlice.js"
import sidebarReducer from "../features/sidebar/sidebarSlice.js"
import loadDataReducer from "../features/loadData/loadDataSlice.js"
import timerReducer from "../features/timer/timerSlice.js"

export const store = configureStore({

    reducer : {

        accordion : accordionReducer,
        tabs : tabsReducer,
        modal : modalReducer,
        tooltip : tooltipReducer,
        dropdown : dropdownReducer,
        slider : sliderReducer,
        sidebar : sidebarReducer,
        loadData : loadDataReducer,
        timer : timerReducer

    }

})




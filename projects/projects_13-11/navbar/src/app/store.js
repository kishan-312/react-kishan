import { configureStore } from "@reduxjs/toolkit"
import crudReducer from "../features/crud/crudSlice.js"
import tabsReducer from "../features/tabs/tabsSlice.js"
import sliderReducer from "../features/slider/sliderSlice.js"
import countupReducer from "../features/countUp/countUpSlicer.js"
import clockReducer from "../features/digitalClock/digitalClockSlice.js"
import loadDataReducer from "../features/loadData/loadDataSlice.js"
import modalReducer from "../features/modal/modalSlice.js"
import timerReducer from "../features/timer/timerSlice.js"
import themeReducer from "../features/theme/themeChangeSlice.js"
import todoReducer from "../features/todo/todoListsSlice.js"


export const store = configureStore({

    reducer: {

        crud: crudReducer,
        tabs: tabsReducer,
        slider: sliderReducer,
        countup: countupReducer,
        clock: clockReducer,
        loadData: loadDataReducer,
        modal: modalReducer,
        timer: timerReducer,
        theme: themeReducer,
        todo: todoReducer

    }

})



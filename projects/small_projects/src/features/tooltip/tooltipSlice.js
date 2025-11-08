import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    show: false

}

const tooltipSlice = createSlice({

    name: "tooltip",
    initialState,
    reducers: {

        showTooltip: (state) => {

            state.show = true

        },
        hideTooltip: (state) => {

            state.show = false

        }

    }

})


export default tooltipSlice.reducer;
export const { showTooltip, hideTooltip } = tooltipSlice.actions

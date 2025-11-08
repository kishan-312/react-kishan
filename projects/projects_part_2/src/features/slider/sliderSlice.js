import { createSlice } from "@reduxjs/toolkit";


const initialState = {

    currentIndex: 0

}

const sliderSlice = createSlice({

    name: "slider",
    initialState,
    reducers: {

        setCurrentIndex: (state, action) => {

            state.currentIndex = action.payload

        },
        nextSlide: (state, action) => {

            state.currentIndex = (state.currentIndex + 1) % action.payload

        },
        prevSlide: (state, action) => {

            state.currentIndex = (state.currentIndex - 1 + action.payload) % action.payload

        },


    }

})


export default sliderSlice.reducer
export const { setCurrentIndex, nextSlide, prevSlide } = sliderSlice.actions



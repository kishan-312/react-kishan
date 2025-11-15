import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    currentIndex: 0,
    visibleSlides: 3

}

const sliderSlice = createSlice({

    name: "slider",
    initialState,
    reducers: {

        prevSlide: (state, action) => {

            state.currentIndex = ((state.currentIndex - 1) + action.payload) % action.payload

        },

        nextSlide: (state, action) => {

            state.currentIndex = (state.currentIndex + 1) % action.payload

        },
        setSlide: (state, action) => {

            state.currentIndex = action.payload

        }


    }


})


export default sliderSlice.reducer
export const { prevSlide, nextSlide, setSlide } = sliderSlice.actions


import { createSlice } from "@reduxjs/toolkit";

const initialState = {

    currentSlider : 0 ,

}


export const sliderSlice = createSlice({

    name : "slider",
    initialState,
    reducers : {

        setCurrentSlider : (state,action) => {

            state.currentSlider = action.payload

        }

    }


})



export default sliderSlice.reducer ;
export const { setCurrentSlider } = sliderSlice.actions ;


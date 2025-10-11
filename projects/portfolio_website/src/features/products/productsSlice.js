import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const displayProducts = createAsyncThunk("displayProducts" , async () => {

    const response = await fetch("https://fakestoreapi.com/products") ;
    return response.json()
    

} )

// console.log(displayProducts());


const initialState = {

    isLoading : false,
    datas : [],
    isError : false,
    

}

export const productsSlice = createSlice({

    name : "products",
    initialState,
    extraReducers : (builder) => {

        builder.addCase(displayProducts.pending, (state) => {

            state.isLoading = true

        } ).addCase(displayProducts.fulfilled, (state,action) => {

            state.isLoading = false;
            state.datas = action.payload

        } ).addCase(displayProducts.rejected, (state) => {

            state.isError = true

        }  )

    }


})

export default productsSlice.reducer 


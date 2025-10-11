import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";

const initialState = {

    datas : [] ,
    isLoading : false,
    isError : null

}

export const fetchData = createAsyncThunk("fetchData" , async () => {

    const resource = await axios.get("https://fakestoreapi.com/products") ;
    console.log(resource.data);
    
    return resource.data

} )

const loadDataSlice = createSlice({

    name : "loadData",
    initialState ,
    extraReducers : (builder) => {

        builder.addCase(fetchData.pending, (state) => {

            state.isLoading = true

        } )

        builder.addCase(fetchData.fulfilled, (state,action) => {

            state.isLoading = false
            state.datas = action.payload

        } )

        builder.addCase(fetchData.rejected, (state,action) => {

            state.isLoading = false
            state.isError = action.error.message

        } )

    }
 

})

export default loadDataSlice.reducer
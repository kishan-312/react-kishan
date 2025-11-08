import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const loadData = createAsyncThunk("loadData", async () => {

    const data = await axios.get("https://fakestoreapi.com/products");
    return data.data

})

const initialState = {

    loading: false,
    data: [],
    error: null,

}

const loadDataSlice = createSlice({

    name: "loaddata",
    initialState,
    reducers: {


    },

    extraReducers: (builder) => {

        builder.addCase(loadData.pending, (state, action) => {

            state.loading = true;

        })
            .addCase(loadData.fulfilled, (state, action) => {

                state.loading = false;
                state.data = action.payload

            })
            .addCase(loadData.rejected, (state, action) => {

                state.loading = false;
                state.error = action.error.message

            })

    }

})


export default loadDataSlice.reducer





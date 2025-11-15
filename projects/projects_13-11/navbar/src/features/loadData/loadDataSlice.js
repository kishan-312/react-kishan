import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

export const fetchData = createAsyncThunk("fetchData", async () => {

    const datas = await axios.get("https://fakestoreapi.com/products");
    console.log(datas.data);
    return datas.data

})

const initialState = {

    loading: false,
    data: [],
    error: null

}

const loadDataSlice = createSlice({

    name: "loadData",
    initialState,
    reducers: {


    },

    extraReducers: (builder) => {

        builder.addCase(fetchData.pending, (state, action) => {

            state.loading = true;


        })
            .addCase(fetchData.fulfilled, (state, action) => {

                state.loading = false;
                state.data = action.payload


            }).addCase(fetchData.rejected, (state, action) => {

                state.loading = false;
                state.error = action.error.message

            })

    }

})

export default loadDataSlice.reducer



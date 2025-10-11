import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const addUsers = createAsyncThunk("addUsers" , async (data) => {

    const resource = await axios.post("https://68d502fee29051d1c0ace33d.mockapi.io/api/v1" ,data ) ;
    return resource.data

}  )


export const fetchUsers = createAsyncThunk("fetchUsers" , async () => {

    const resource = await axios.get("https://68d502fee29051d1c0ace33d.mockapi.io/api/v1") ;
    return resource.data

} )


export const deleteUser = createAsyncThunk("deleteUser" , async (id) => {

    const resource = await axios.delete(`https://68d502fee29051d1c0ace33d.mockapi.io/api/v1/${id}`);
    console.log(resource.data);
    
    return resource.data

} )

export const editUser = createAsyncThunk("editUser" , async({id,data}) => {


    const resource = await axios.put(`https://68d502fee29051d1c0ace33d.mockapi.io/api/v1/${id}`, data);
    console.log(resource.data);
    
    return resource.data

} )


const crudSlice = createSlice({

    name : "crud",
    initialState : {

        datas : [],
        isLoading : false,
        isError : null,

    },
    extraReducers : (builder) => {

        builder.addCase(fetchUsers.pending, (state) => {

            state.isLoading = true

        } )
        builder.addCase(fetchUsers.fulfilled, (state,action) => {

            state.isLoading = false
            state.datas = action.payload

        } )
        builder.addCase(fetchUsers.rejected , (state,action) => {

            state.isLoading = false
            state.isError = action.error.message

        } )
         builder.addCase(deleteUser.pending, (state) => {

            state.isLoading = true

        } )
        builder.addCase(deleteUser.fulfilled, (state,action) => {

            state.isLoading = false
            state.datas = state.datas.filter((data) => data.id !== action.payload.id )

        } )
        builder.addCase(deleteUser.rejected , (state,action) => {

            state.isLoading = false
            state.isError = action.error.message

        } )
         builder.addCase(editUser.pending, (state) => {

            state.isLoading = true

        } )
        builder.addCase(editUser.fulfilled, (state,action) => {

            state.isLoading = false;
            state.datas = state.datas.map((data) => data.id === action.payload.id ? action.payload : data  )

        } )
        builder.addCase(editUser.rejected , (state,action) => {

            state.isLoading = false
            state.isError = action.error.message

        } )
        
       
    }

   
})

export default crudSlice.reducer

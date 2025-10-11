import { createSlice } from "@reduxjs/toolkit";

const initialInputs = {

    name : "",
    email : "",
    password : "",
    gender : "",
    hobbies : [],
    country : "",
    date : "",
    experience : 0

}

const initialState = {

    inputs : initialInputs,
    errors : {},
    datas : JSON.parse(localStorage.getItem("datas3")) || [],
    editId : null,
    
}

console.log(initialState);


const crudSlice = createSlice({

    name : "crud",
    initialState,
    reducers : {

        setInput : (state,action) => {

           state.inputs = action.payload
            
        },
        setError : (state,action) => {

            state.errors = action.payload

        },
        addData : (state) => {

            state.datas.push({...state.inputs, id : crypto.randomUUID() })

        },
        deleteData : (state,action) => {

            state.datas = state.datas.filter((data) => data.id !== action.payload )

        },
        setEdit : (state,action) => {

            state.editId = action.payload.id;
            state.inputs = action.payload.data;

        }





    }

})

export default crudSlice.reducer
export const { setInput, setError, addData,deleteData,setEdit } = crudSlice.actions






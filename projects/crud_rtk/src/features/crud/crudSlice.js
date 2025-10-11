import { createSlice } from "@reduxjs/toolkit";

const initialInputs = {

    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    country: "",
    date: "",
    experience: 0,

}

const initialState = {

    inputs : initialInputs,
    errors : {},
    datas : JSON.parse(localStorage.getItem("records")) || [] ,
    editId : null

}

const crudSlice = createSlice({

    name : "crud",
    initialState,
    reducers : {

        setInputs : (state,action) => {
        
            state.inputs = action.payload

        },

        resetInputs : (state) => {


            state.inputs = initialInputs

        },
        setErrors : (state,action) => {

            state.errors = action.payload

        },
        setEditId : (state,action) => {

            state.editId = action.payload

        },

        addDatas : (state) => {

            state.datas.push({...state.inputs, id  : crypto.randomUUID()})
            console.log(state.datas);
            

        },
        deleteDatas : (state,action) => {

            state.datas = state.datas.filter((data) => data.id !== action.payload )

        },
        
        editDatas : (state) => {

            state.datas = state.datas.map((data) => data.id === state.editId ? {...state.inputs, id : state.editId} : data )


        }


        
    }

})

export default crudSlice.reducer ;
export const { setInputs, resetInputs,setEditId, setErrors, addDatas, deleteDatas, editDatas } = crudSlice.actions

import { createSlice } from "@reduxjs/toolkit";

const fields = {

    name: "",
    password: "",
    email: "",
    gender: "",
    hobbies: [],
    country: "",
    date: "",
    experience: 0

}

const filterDatas = {

    search: "",
    country2: "",
    hobbies2: [],
    sortBy: "name",
    sortOrder: "asc"

}

const initialState = {

    fields,
    errors: null,
    formDatas: JSON.parse(localStorage.getItem("formDatas1")) || [],
    editID: null,
    filterDatas,
    currentPage: 1,
    rowsPerPage: 5,

}

const crudSlice = createSlice({

    name: "crud",
    initialState,
    reducers: {

        updateFields: (state, action) => {

            state.fields = action.payload

        },

        resetForms: (state, action) => {

            state.fields = { ...fields }

        },
        setErrors: (state, action) => {

            state.errors = action.payload

        },
        setFormDatas: (state, action) => {

            state.formDatas = [...state.formDatas, action.payload]

        },

        deleteDatas: (state, action) => {

            state.formDatas = state.formDatas.filter((data) => data.id !== action.payload)

        },
        editDatas: (state, action) => {

            state.formDatas = state.formDatas.map((data) => data.id === state.editID ? { ...state.fields, id: state.editID } : data);

        },
        setEditID: (state, action) => {

            state.editID = action.payload

        },
        setFilterDatas: (state, action) => {

            state.filterDatas = action.payload

        },
        setCurrentPage: (state, action) => {

            state.currentPage = action.payload

        },

        setRowsPerPage: (state, action) => {

            state.rowsPerPage = action.payload

        },



    }

})


export const { updateFields, resetForms, setErrors, setFormDatas, deleteDatas, setEditID, editDatas, setFilterDatas, setCurrentPage, setRowsPerPage } = crudSlice.actions;
export default crudSlice.reducer



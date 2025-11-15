import { createSlice } from "@reduxjs/toolkit"

const initialFields = {

    name: "",
    email: "",
    password: "",
    gender: "",
    hobbies: [],
    country: "",
    date: "",
    experience: 0,

}

const filterStates = {

    search: "",
    country2: "",
    sortBy: "name",
    sortOrder: "asc"

}

const initialState = {

    fields: initialFields,
    errors: null,
    formDatas: JSON.parse(localStorage.getItem("datasForm")) || [],
    editId: null,
    filterStates,
    currentPage: 1,
    rowsPerPage: 5

}

const crudSlice = createSlice({

    name: "crud",
    initialState,
    reducers: {

        setInitialState: (state, action) => {

            state.fields = action.payload

        },

        resetForm: (state, action) => {

            state.fields = { ...initialFields }

        },

        setErrors: (state, action) => {

            state.errors = action.payload

        },

        addData: (state, action) => {

            state.formDatas = [...state.formDatas, { id: crypto.randomUUID(), ...action.payload }]
            localStorage.setItem("datasForm", JSON.stringify(state.formDatas))

        },

        deleteData: (state, action) => {


            state.formDatas = state.formDatas.filter((data) => data.id !== action.payload);
            localStorage.setItem("datasForm", JSON.stringify(state.formDatas))


        },

        setEditId: (state, action) => {

            state.editId = action.payload

        },

        editDatas: (state, action) => {

            state.formDatas = state.formDatas.map((data) => data.id === state.editId ? { id: state.editId, ...state.fields } : data)

        },

        setFilters: (state, action) => {

            state.filterStates = action.payload

        },

        setCurrentPage: (state, action) => {

            state.currentPage = action.payload

        }


    }
})

export default crudSlice.reducer;
export const { setInitialState, resetForm, setErrors, addData, deleteData, setEditId, editDatas, setFilters, setCurrentPage } = crudSlice.actions





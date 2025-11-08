import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const addUsers = createAsyncThunk("addUsers", async (data) => {

    const resource = await axios.post("https://68d502fee29051d1c0ace33d.mockapi.io/api/v1", data);
    return resource.data

})

export const fetchUsers = createAsyncThunk("fetchUsers", async () => {

    const resource = await axios.get("https://68d502fee29051d1c0ace33d.mockapi.io/api/v1");
    return resource.data

})

export const deleteUsers = createAsyncThunk("deleteUsers", async (id) => {

    const resource = await axios.delete(`https://68d502fee29051d1c0ace33d.mockapi.io/api/v1/${id}`);
    return resource.data

})

export const editUsers = createAsyncThunk("editUsers", async ({ id, data }) => {

    const resource = await axios.put(`https://68d502fee29051d1c0ace33d.mockapi.io/api/v1/${id}`, data);
    return resource.data


})

const initialFields = {

    name: "",
    email: "",
    password: ""

}

const initialState = {

    fields: initialFields,
    editId: null,
    datas: [],
    error: null,
    loading: false

}

const crudApiSlice = createSlice({

    name: "crudapi",
    initialState,
    reducers: {

        setFields: (state, action) => {
            console.log(action.payload);

            state.fields = action.payload

        },
        resetForm: (state, action) => {

            state.fields = { ...initialFields }

        },
        setEditID: (state, action) => {

            state.editId = action.payload

        }

    },

    extraReducers: (builder) => {

        builder.addCase(fetchUsers.pending, (state, action) => {

            state.loading = true;

        })
            .addCase(fetchUsers.fulfilled, (state, action) => {

                state.loading = false;
                state.datas = action.payload

            })
            .addCase(fetchUsers.rejected, (state, action) => {

                state.loading = false;
                state.error = action.error.message

            })
            .addCase(deleteUsers.pending, (state, action) => {

                state.loading = true

            })
            .addCase(deleteUsers.fulfilled, (state, action) => {

                state.loading = false;
                console.log(action.payload);

                state.datas = state.datas.filter((data) => data.id !== action.payload.id)

            })
            .addCase(deleteUsers.rejected, (state, action) => {

                state.loading = false;
                state.error = action.error.message

            })
            .addCase(editUsers.pending, (state, action) => {

                state.loading = true

            })
            .addCase(editUsers.fulfilled, (state, action) => {

                state.loading = false;
                state.datas = state.datas.map((data) => data.id === action.payload.id ? action.payload : data)

            })
            .addCase(editUsers.rejected, (state, action) => {

                state.loading = false;
                state.error = action.error.message


            })

    }



})


export default crudApiSlice.reducer
export const { setFields, resetForm, setEditID } = crudApiSlice.actions


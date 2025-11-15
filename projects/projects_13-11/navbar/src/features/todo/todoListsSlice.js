import { createSlice } from "@reduxjs/toolkit";

const initialFields = {

    data: "",
    checked: false

}

const initialState = {


    fields: initialFields,
    datas: JSON.parse(localStorage.getItem("todos1")) || [],
    editId: null,


}

const todoListsSlice = createSlice({

    name: "todo",
    initialState,
    reducers: {

        setInitialFields: (state, action) => {

            state.fields = action.payload

        },

        resetFields: (state, action) => {

            state.fields = { ...initialFields }

        },

        addData: (state, action) => {

            state.datas = [...state.datas, { ...action.payload, id: crypto.randomUUID() }]
            localStorage.setItem("todos1", JSON.stringify(state.datas))

        },


        toggleTodo: (state, action) => {

            const todo = state.datas.find((ele) => ele.id === action.payload);

            if (todo) {

                todo.checked = !todo.checked;
                localStorage.setItem("todos1", JSON.stringify(state.datas))

            }

        },

        deleteTodo: (state, action) => {

            state.datas = state.datas.filter((data) => data.id !== action.payload)
            localStorage.setItem("todos1", JSON.stringify(state.datas))


        },

        editTodo: (state, action) => {

            state.datas = state.datas.map((data) => data.id === action.payload ? { ...state.fields, id: state.editId } : data)
            localStorage.setItem("todos1", JSON.stringify(state.datas))

        },

        setEditId: (state, action) => {

            state.editId = action.payload

        }


    }

})

export default todoListsSlice.reducer
export const { setInitialFields, resetFields, addData, toggleTodo, deleteTodo, editTodo, setEditId } = todoListsSlice.actions


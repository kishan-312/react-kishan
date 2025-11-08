import { createSlice } from "@reduxjs/toolkit";

const initialFields = {

    data: "",
    checked: false

}

const initialState = {

    fields: initialFields,
    todos: JSON.parse(localStorage.getItem("todos")) || [],
    editId: null


}

const todoListsSlice = createSlice({

    name: "todolists",
    initialState,
    reducers: {

        setFields: (state, action) => {

            state.fields = action.payload

        },
        resetFields: (state, action) => {

            state.fields = { ...initialFields }

        },
        addTodo: (state, action) => {

            if (state.fields.data !== "") {

                state.todos = [...state.todos, { ...state.fields, id: crypto.randomUUID() }];
                localStorage.setItem("todos", JSON.stringify(state.todos))

            }

        },

        toggleTodo: (state, action) => {

            const todo = state.todos.find((todo) => todo.id === action.payload)

            if (todo) {

                todo.checked = !todo.checked;
                localStorage.setItem("todos", JSON.stringify(state.todos))

            }

        },

        deleteTodo: (state, action) => {

            if (confirm("Are you sure you want to delete ?")) {

                state.todos = state.todos.filter((todo) => todo.id !== action.payload);
                localStorage.setItem("todos", JSON.stringify(state.todos))

            }

        },

        setEditId: (state, action) => {

            state.editId = action.payload

        },

        editTodo: (state, action) => {

            state.todos = state.todos.map((todo) => todo.id === action.payload ? { ...state.fields, id: state.editId } : todo)

        }

    }

})

export default todoListsSlice.reducer
export const { setFields, resetFields, addTodo, toggleTodo, deleteTodo, setEditId, editTodo } = todoListsSlice.actions



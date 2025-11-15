import React from 'react'
import styles from "../css/todoLists.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { addData, deleteTodo, editTodo, resetFields, setEditId, setInitialFields, toggleTodo } from '../features/todo/todoListsSlice'

function TodoLists() {

    const { fields, datas, editId } = useSelector((state) => state.todo)
    const dispatch = useDispatch()

    function handleChange(e) {

        const { name, value, checked, type } = e.target;
        let updateFields = { ...fields };

        updateFields = { ...updateFields, [name]: value }


        dispatch(setInitialFields(updateFields))

    }

    function handleSubmit(e) {

        e.preventDefault();

        if (editId) {

            dispatch(editTodo(editId))
            dispatch(setEditId(null))

        }

        else {

            dispatch(addData(fields))

        }

        dispatch(resetFields())


    }

    console.log(datas);

    function handleDelete(id) {

        if (confirm("Are you sure you want to delete ?")) {

            dispatch(deleteTodo(id))

        }

    }
    function handleEdit(id, data) {

        dispatch(setEditId(id))
        dispatch(setInitialFields(data))


    }


    return (
        <>
            <div className={`${styles.mtop} card`} >
                <h3 className={styles.h3} >Todo Lists</h3>
                <form className={styles.container} onSubmit={handleSubmit} >
                    <input className={styles.input} type="text" placeholder='Search...' name='data' value={fields.data} onChange={handleChange} />
                    <button>Add</button>
                </form>
                <div className={styles.grid} >
                    {

                        datas.map((data) => <div className={styles.full} >

                            <input type="checkbox" name='checked' value={"checked"} onChange={() => dispatch(toggleTodo(data.id))} checked={data.checked} />
                            <p className={data.checked ? styles.lineThrough : ""} >{data.data}</p>
                            <div className={styles.container} >
                                <button onClick={() => handleEdit(data.id, data)} >Edit</button>
                                <button onClick={() => handleDelete(data.id)}  >Delete</button>
                            </div>
                        </div>)

                    }
                </div>
            </div>

        </>
    )
}

export default TodoLists
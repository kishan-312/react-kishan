import React from 'react'
import Button from '../reuseable_components/Button'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, editTodo, resetFields, setEditId, setFields, toggleTodo } from '../features/todoLists/todoListsSlice';


function TodoList() {

    const { fields, todos, editId } = useSelector((state) => state.todolists)
    const dispatch = useDispatch()

    function handleChange(e) {

        const { value, name } = e.target;
        dispatch(setFields({ ...fields, [name]: value }))

    }

    function handleSubmit(e) {

        e.preventDefault();
        if (fields.data === "") return

        if (editId) {

            dispatch(editTodo(editId))

        }

        else {

            dispatch(addTodo())

        }

        dispatch(resetFields())
        dispatch(setEditId(null))


    }

    function handleEdit(id, todo) {

        dispatch(setEditId(id));
        dispatch(setFields({ ...fields, data: todo.data }))


    }



    return (
        <>
            <div className=' container my-4 mx-auto w-50' >
                <h1 className=' text-center' >  Todo Lists </h1>
                <div className=' border border-1 p-4 w-100'  >
                    <form action="" className=' w-100' onSubmit={handleSubmit}  >
                        <div className=' d-flex justify-content-between gap-3 w-100' >
                            <input type="text" placeholder='Enter Your data' onChange={handleChange} value={fields.data} required name='data' className=' w-100 form-control' />
                            <Button btnText={"Add"} className={"btn btn-primary"} type={"submit"} />
                        </div>
                    </form>

                    <hr />
                    <ul className=''   >

                        {

                            todos?.map((todo) => <li>
                                <div className='form-check d-flex gap-3 align-items-baseline p-0' >
                                    <input type="checkbox" value={"check"} name='check' checked={todo.checked} onChange={() => dispatch(toggleTodo(todo.id))} className=' form-check-input' />
                                    <p style={{ textDecoration: `${todo.checked === true ? "line-through" : "none"}` }} >{todo.data}</p>
                                    <div className='d-flex gap-3 justify-content-between align-items-center' >
                                        <Button btnText={"Edit"} className={"btn btn-primary"} type={"button"} onClick={() => handleEdit(todo.id, todo)} />
                                        <Button btnText={"Delete"} className={"btn btn-danger"} type={"button"} onClick={() => dispatch(deleteTodo(todo.id))} />
                                    </div>
                                </div>

                            </li>)

                        }

                    </ul>
                </div>
            </div>



        </>
    )
}

export default TodoList
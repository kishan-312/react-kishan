import React, { useEffect } from 'react'
import { deleteUsers, fetchUsers, setEditID, setFields } from '../features/crud_api/crudSlice'
import { useDispatch, useSelector } from 'react-redux';
import Button from '../reuseable_components/Button';
import { Link, useNavigate } from 'react-router-dom';

function Table_Crud_Api() {


    const { fields, datas } = useSelector((state) => state.crudapi);
    console.log(datas);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {

        dispatch(fetchUsers())

    }, [dispatch])

    async function handleDelete(id) {

        let confirmDelete = confirm("Are you sure you want to delete ? ");
        if (confirmDelete) {

            await dispatch(deleteUsers(id))

        }

    }

    function handleEdit(id, data) {

        dispatch(setEditID(id))
        dispatch(setFields(data));
        navigate("/contact")


    }



    return (
        <>

            <div className=' mx-auto' style={{ margin: "120px 0" }}  >
                <Link to={"/contact"} style={{ backgroundColor: "red", padding: "5px 10px" }} > Back </Link>
                <table className=' table table-bordered w-50 mx-auto text-center' >
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {

                            datas.map((data, i) => <tr key={data.id} >
                                <td> {i + 1} </td>
                                <td> {data.name} </td>
                                <td> {data.email} </td>
                                <td>
                                    <div className='d-flex align-items-center gap-3 justify-content-center' >
                                        <Button btnText={"Edit"} className={"btn btn-info"} type={"button"} onClick={() => handleEdit(data.id, data)} />
                                        <Button btnText={"Delete"} className={"btn btn-danger"} type={"button"} onClick={() => handleDelete(data.id)} />
                                    </div>
                                </td>
                            </tr>)

                        }
                    </tbody>
                </table>
            </div>

        </>
    )
}

export default Table_Crud_Api
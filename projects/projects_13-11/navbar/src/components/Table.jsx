import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "../css/crud.module.css"
import Button from './Button';
import { deleteData, setCurrentPage, setEditId, setFilters, setInitialState } from '../features/crud/crudSlice';
import { useNavigate } from 'react-router-dom';

function Table() {

    const { formDatas, editId, filterStates, currentPage, rowsPerPage, } = useSelector((state) => state.crud);
    const dispatch = useDispatch()
    const filterKeys = formDatas?.length > 0 ? [...Object?.keys(formDatas[0])].filter((data) => data !== "password" && data !== "id") : [];
    const updateKeys = ["No", ...filterKeys, "Actions"]
    console.log(filterKeys);
    console.log(updateKeys);
    const navigate = useNavigate()

    function handleDelete(id) {

        if (confirm("Are you sure you want to delete")) {
            dispatch(deleteData(id))
        }

    }

    function handleEdit(id, data) {

        dispatch(setEditId(id));
        dispatch(setInitialState(data))
        navigate("/")

    }

    const filterDatas = formDatas.filter((data) => {

        const searchFilter = data.name.toLowerCase().includes(filterStates.search.toLowerCase())
        const selectFilter = filterStates.country2 === data.country || filterStates.country2 === ""

        return searchFilter && selectFilter

    })

    const sortDatas = filterDatas.sort((a, b) => {

        const { sortBy, sortOrder } = filterStates

        const valuea = a[sortBy]
        const valueb = b[sortBy]

        const v1 = typeof valuea === "string" ? valuea.toLowerCase() : valuea
        const v2 = typeof valueb === "string" ? valueb.toLowerCase() : valueb

        if (v1 > v2) return sortOrder === "asc" ? 1 : -1;
        if (v1 < v2) return sortOrder === "asc" ? -1 : 1;

    })

    const lastIndexOfData = currentPage * rowsPerPage;
    const firstIndexOfData = lastIndexOfData - rowsPerPage;

    const sliceData = filterDatas.slice(firstIndexOfData, lastIndexOfData);
    const totalPages = Math.ceil(filterDatas.length / rowsPerPage);

    useEffect(() => {

        dispatch(setCurrentPage(1))


    }, [filterStates])


    return (
        <>
            <table className={`table table-bordered w-75 mx-auto text-center `} >

                <thead>
                    <tr>
                        {

                            updateKeys.map((key) => <th key={key} > <button onClick={() => dispatch(setFilters({ ...filterStates, sortBy: key.toLowerCase(), sortOrder: "asc" }))} >Asc</button> <button onClick={() => dispatch(setFilters({ ...filterStates, sortBy: key.toLowerCase(), sortOrder: "desc" }))} >Desc</button>  {key.charAt(0).toUpperCase() + key.slice(1)}</th>)

                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        sliceData.length === 0 ? <td colSpan={updateKeys.length} > No  Data available </td>

                            : sliceData?.map((data, index) => <tr>
                                <td> {index + 1}  </td>
                                <td> {data.name} </td>
                                <td> {data.email} </td>
                                <td> {data.gender} </td>
                                <td> {data.hobbies.join(",")} </td>
                                <td> {data.country} </td>
                                <td> {data.date.toString()} </td>
                                <td> {data.experience} </td>
                                <td>
                                    <div className={`${styles.btnContainer}`} >
                                        <Button onClick={() => handleEdit(data.id, data)} className={"btn btn-info p-2"} btnText={"Edit"} btnType={"button"} />
                                        <Button onClick={() => handleDelete(data.id)} className={"btn btn-danger p-2"} btnText={"Delete"} btnType={"button"} />
                                    </div>
                                </td>
                            </tr>)

                    }
                </tbody>

            </table>

            <div className='mt-4 mx-auto w-50 d-flex gap-2' >
                {

                    Array.from({ length: totalPages }, (_, i) => <button onClick={() => dispatch(setCurrentPage(i + 1))} >{i + 1}</button>)

                }
            </div>
        </>
    )
}

export default Table
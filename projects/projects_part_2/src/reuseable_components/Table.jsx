import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from './Button'
import { deleteDatas, resetForms, setEditID, setFilterDatas, updateFields } from '../features/crud/crudSlice';
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6';

function Table({ datas }) {

    const { formDatas, filterDatas } = useSelector((state) => state.crud);
    const dispatch = useDispatch();


    function handleDelete(id) {

        let confirmDelete = confirm("Are you sure you want to Delete ?");

        if (confirmDelete) {

            dispatch(deleteDatas(id))
            dispatch(resetForms())

        }


    }

    function handleEdit(id, data) {

        dispatch(setEditID(id));
        dispatch(updateFields(data));

    }

    // const filterDatasContainer = formDatas.filter((data) => {

    //     const searchDatas = data.name.toLowerCase().includes(filterDatas.search.toLowerCase());
    //     const selectDatas = data.country.toLowerCase() === filterDatas.country2.toLowerCase() || !filterDatas.country2;
    //     const filterCheckbox = filterDatas.hobbies2.length === 0 || filterDatas.hobbies2.some((hobby) => data.hobbies.includes(hobby))
    //     return searchDatas && selectDatas && filterCheckbox

    // })

    // Return value	Meaning
    // -1	Keep a before b
    // 1	Move a after b
    // 0	Keep them equal (no change)

    // const sortDatas = filterDatasContainer.toSorted((a, b) => {

    //     const { sortBy, sortOrder } = filterDatas

    //     let value1 = a[sortBy];
    //     let value2 = b[sortBy];

    //     const v1 = typeof value1 === "string" ? value1.toLowerCase() : value1
    //     const v2 = typeof value2 === "string" ? value2.toLowerCase() : value2;


    //     if (v1 > v2) return sortOrder === "asc" ? 1 : -1
    //     if (v1 < v2) return sortOrder === "asc" ? -1 : 1
    //     return 0

    // })



    return (
        <>
            <table className='table table-bordered text-center w-75 mx-auto' >
                <thead>
                    <tr>
                        <th><div className='d-flex gap-2 align-items-center' >
                            <span>Name </span>
                            <div>
                                <FaArrowUpLong onClick={() => dispatch(setFilterDatas({ ...filterDatas, sortBy: "name", sortOrder: "asc" }))} />
                                <FaArrowDownLong onClick={() => dispatch(setFilterDatas({ ...filterDatas, sortBy: "name", sortOrder: "desc" }))} />
                            </div>
                        </div> </th>
                        <th>Email </th>
                        <th>Gender </th>
                        <th>Hobbies </th>
                        <th>Country </th>
                        <th>Date </th>
                        <th>Experience </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {

                        datas.length === 0 ? <tr>
                            <td colSpan={8} > <p style={{ fontSize: "30px", color: "red" }} >No data
                                Available</p> </td>
                        </tr> : datas.map((data) => <tr key={data.name} >
                            <td>{data.name}</td>
                            <td>{data.email}</td>
                            <td>{data.gender}</td>
                            <td>{data.hobbies.join(", ")}</td>
                            <td>{data.country}</td>
                            <td>{data.date}</td>
                            <td>{data.experience}</td>
                            <td>
                                <div className=' d-flex gap-4 align-items-center' >
                                    <Button style={{ cursor: "pointer" }} className={"btn btn-info"} btnText={"Edit"} type={"button"} onClick={() => handleEdit(data.id, data)} />
                                    <Button style={{ cursor: "pointer" }} className={"btn btn-danger"} btnText={"Delete"} type={"button"} onClick={() => handleDelete(data.id)} />
                                </div>
                            </td>
                        </tr>)

                    }


                </tbody>
            </table>

        </>
    )
}

export default Table
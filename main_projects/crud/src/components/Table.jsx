import React, { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'
import Button from './Button';

function Table() {

    const { datas, handleDelete, handleEdit, filterDatas } = useContext(FormContext);

    return (
        <>


            <table className=' w-75 table table-bordered mx-auto my-4 text-center' >
                <thead>
                    <tr>
                        <th> No </th>
                        <th>Name </th>
                        <th>Email </th>
                        <th>Gender </th>
                        <th>Hobbies </th>
                        <th>Country </th>
                        <th>Experience </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {

                        filterDatas.length === 0 ? <tr>
                            <td colSpan={8} className='text-center' style={{ color: "red", fontSize: "40px" }} > No data available </td>
                        </tr> :
                            filterDatas.map((data, i) => <tr>
                                <td> {i + 1} </td>
                                <td> {data.name} </td>
                                <td> {data.email} </td>
                                <td> {data.gender} </td>
                                <td> {data.hobbies.join(",")} </td>
                                <td> {data.country} </td>
                                <td> {data.experience} </td>
                                <td>
                                    <div className=' d-flex gap-2 align-items-center justify-content-center' >
                                        <Button className={"btn btn-danger"} label={"delete"} type={"button"} onclick={() => handleDelete(data.id)} />
                                        <Button className={"btn btn-info"} label={"edit"} type={"button"} onclick={() => handleEdit(data.id, data)} />
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
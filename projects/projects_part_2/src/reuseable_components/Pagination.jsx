import React from 'react'
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../features/crud/crudSlice';

function Pagination({ totalPages }) {

    const { currentPage, rowsPerPage } = useSelector((state) => state.crud);
    const dispatch = useDispatch()


    return (
        <>
            <div className=' w-50 mx-auto d-flex gap-4 ' >
                <Button btnText={"prev"} className={"btn btn-secondary"} onClick={() => dispatch(setCurrentPage(Math.max(currentPage - 1, 1)))} disabled={currentPage === 1} />
                {
                    Array.from({ length: totalPages }, (_, i) => <Button onClick={() => dispatch(setCurrentPage(i + 1))} className={` btn ${currentPage === i + 1 ? "btn-secondary" : "btn-light border border-1"} `} btnText={i + 1} />)
                }
                <Button btnText={"next"} className={"btn btn-secondary"} onClick={() => dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)))} disabled={currentPage === totalPages} />


            </div>

        </>
    )
}

export default Pagination
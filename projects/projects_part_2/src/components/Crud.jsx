import React, { useEffect } from 'react'
import Form from '../reuseable_components/Form'
import Table from '../reuseable_components/Table'
import FilterDatas from '../reuseable_components/FilterDatas'
import Pagination from '../reuseable_components/Pagination'
import { useDispatch, useSelector } from 'react-redux'
import { setCurrentPage } from '../features/crud/crudSlice'

function Crud() {


    const { formDatas, filterDatas, currentPage, rowsPerPage } = useSelector((state) => state.crud);
    const dispatch = useDispatch();

    const filterDatasContainer = formDatas.filter((data) => {

        const searchDatas = data.name.toLowerCase().includes(filterDatas.search.toLowerCase());
        const selectDatas = data.country.toLowerCase() === filterDatas.country2.toLowerCase() || !filterDatas.country2;
        const filterCheckbox = filterDatas.hobbies2.length === 0 || filterDatas.hobbies2.some((hobby) => data.hobbies.includes(hobby))
        return searchDatas && selectDatas && filterCheckbox

    })

    const sortDatas = filterDatasContainer.toSorted((a, b) => {

        const { sortBy, sortOrder } = filterDatas

        let value1 = a[sortBy];
        let value2 = b[sortBy];

        const v1 = typeof value1 === "string" ? value1.toLowerCase() : value1
        const v2 = typeof value2 === "string" ? value2.toLowerCase() : value2;


        if (v1 > v2) return sortOrder === "asc" ? 1 : -1
        if (v1 < v2) return sortOrder === "asc" ? -1 : 1
        return 0

    })



    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;

    const sliceData = sortDatas.slice(indexOfFirstRow, indexOfLastRow);
    const totalPages = Math.ceil(sortDatas.length / rowsPerPage);


    useEffect(() => {

        dispatch(setCurrentPage(1))

    }, [filterDatas])

    return (
        <>
            <div className=' container my-4 d-grid gap-5' >
                <Form />
                <FilterDatas />
                <Table datas={sliceData} />
                <Pagination totalPages={totalPages} />
            </div>

        </>
    )
}

export default Crud
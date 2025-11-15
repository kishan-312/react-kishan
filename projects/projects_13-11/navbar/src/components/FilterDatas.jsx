import React from 'react'
import InputBox from './InputBox'
import { useDispatch, useSelector } from 'react-redux'
import { setFilters } from '../features/crud/crudSlice'

function FilterDatas() {

    const { filterStates } = useSelector((state) => state.crud)
    const dispatch = useDispatch()

    function handleChange(e) {

        const { name, value, checked, type } = e.target

        let newFilterStates = { ...filterStates };

        newFilterStates = { ...newFilterStates, [name]: value }
        dispatch(setFilters(newFilterStates))

    }


    return (
        <>
            <div className=' w-75 mx-auto my-2' >
                <InputBox name={"search"} type={"text"} value={filterStates} handleChange={handleChange} />
                <div className='w-100' >
                    <select name="country2" value={filterStates.country2} onChange={handleChange} id="selectFields"  >
                        <option value="" hidden >---Select Data---</option>
                        <option value="russia">Russia</option>
                        <option value="india">India</option>
                        <option value="usa">Usa</option>
                    </select>
                </div>
            </div>


        </>
    )
}

export default FilterDatas
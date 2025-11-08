import React from 'react'
import InputBox from './InputBox'
import { useDispatch, useSelector } from 'react-redux'
import { setFilterDatas } from '../features/crud/crudSlice'
import SelectOption from './SelectOption'
import Checkbox from './Checkbox'

function FilterDatas() {

    const { filterDatas, } = useSelector((state) => state.crud)
    const dispatch = useDispatch()

    function handleChange(e) {

        const { name, value, type, checked } = e.target

        let newFilterDatas = { ...filterDatas }

        if (type === "checkbox" && name === "hobbies2") {

            let updateHobbies2 = [...filterDatas.hobbies2]

            if (checked) {

                updateHobbies2.push(value)

            }

            else {

                updateHobbies2 = updateHobbies2.filter((hobby) => hobby !== value)

            }

            newFilterDatas = { ...filterDatas, hobbies2: updateHobbies2 }

        }

        else {

            newFilterDatas = { ...filterDatas, [name]: value }

        }

        dispatch(setFilterDatas(newFilterDatas))

    }



    return (
        <>
            <div>
                <InputBox name={"search"} type={"text"} value={filterDatas.search} onChange={handleChange} />
                <div>
                    <SelectOption name={"country2"} onChange={handleChange} value={filterDatas.country2} options={["india", "usa", "russia", "canada", "england", "newzeland"]} />
                </div>
                <div className='d-flex gap-5 align-items-center' >
                    <div className='d-flex gap-2' >
                        <input type="checkbox" name='hobbies2' id='music1' checked={filterDatas.hobbies2.includes("music")} onChange={handleChange} value={"music"} />
                        <label htmlFor="music1">Music</label>
                    </div>
                    <div className='d-flex gap-2' >
                        <input type="checkbox" name='hobbies2' id='sports1' checked={filterDatas.hobbies2.includes("sports")} onChange={handleChange} value={"sports"} />
                        <label htmlFor="sports1">Sports</label>
                    </div>
                    <div className='d-flex gap-2' >
                        <input type="checkbox" name='hobbies2' id='travel1' checked={filterDatas.hobbies2.includes("travel")} onChange={handleChange} value={"travel"} />
                        <label htmlFor="travel1">Travel</label>
                    </div>
                </div>

            </div>


        </>
    )
}

export default FilterDatas
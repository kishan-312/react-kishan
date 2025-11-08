import React, { useContext } from 'react'
import { FormContext } from '../contexts/FormContext'

function FilterContainer() {

    const { search, handleSearch, handleSelectOption, selectOpt, handleCheckbox, checkBoxHobbies } = useContext(FormContext)

    const selectOptionsEle = ["india", "china", "usa", "russia", "nepal", "africa", "england", "newzeland", "canada"]

    const options = ["music", "sports", "travel"];



    return (
        <>

            <div className=' my-4 mx-auto w-75 d-grid gap-3' >
                <div>
                    <input className='form-control' value={search} type="text" placeholder='Search....' onChange={handleSearch} />
                </div>
                <div className='d-flex gap-4 justify-content-between'  >
                    <div>
                        <select name="country1" value={selectOpt} onChange={handleSelectOption} className='form-select'  >
                            <option value="" hidden > --- Filter Country --- </option>
                            {

                                selectOptionsEle.map((opt) => <option value={opt}> {opt[0].toUpperCase() + opt.slice(1)} </option>)

                            }
                        </select>
                    </div>
                    <div className=' d-flex gap-2 align-items-center'  >
                        {

                            options.map((opt) => <div className=' d-flex gap-2 align-items-center' >
                                <input type="checkbox" id={`${opt}1`} checked={checkBoxHobbies?.includes(opt)} onChange={handleCheckbox} value={opt} />
                                <label htmlFor={`${opt}1`}>{opt}</label>
                            </div>)

                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterContainer
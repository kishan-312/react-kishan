import React, { useEffect } from 'react'
import InputBox from '../reuseable_components/InputBox'
import Button from '../reuseable_components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { addUsers, editUsers, fetchUsers, resetForm, setFields } from '../features/crud_api/crudSlice'
import { useLocation, useNavigate } from 'react-router-dom'

function Crud_api() {


    const datas2 = [

        {

            name: "name",
            type: "text"

        },
        {

            name: "email",
            type: "email"

        },
        {

            name: "password",
            type: "password"

        },

    ]

    const { fields, datas, editId } = useSelector((state) => state.crudapi);
    console.log(datas);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    function handleChange(e) {

        const { value, name } = e.target;


        dispatch(setFields({ ...fields, [name]: value }))


    }

    async function handleSubmit(e) {

        e.preventDefault();

        if (editId) {

            await dispatch(editUsers({ id: editId, data: fields }))
            await dispatch(resetForm())

        }

        else {

            await dispatch(addUsers(fields))
            await dispatch(resetForm());

        }

        navigate("/table")



    }




    return (
        <>
            <form action="" onSubmit={handleSubmit} className=' w-50 mx-auto d-grid gap-4' style={{ margin: "100px 0" }} >
                <h1 className='text-center mt-3' >Registration Form</h1>
                <div className='d-grid gap-3' >
                    {

                        datas2?.map((data) => <InputBox name={data.name} value={fields[data.name]} onChange={handleChange} type={data.type} key={data.name} />)

                    }
                </div>
                <Button btnText={"Submit"} className={"btn btn-primary"} type={"submit"} />
            </form>

        </>
    )
}

export default Crud_api
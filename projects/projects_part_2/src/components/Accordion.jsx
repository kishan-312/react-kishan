import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clickHandler } from '../features/accordion/accordionSlice';

const datas = [

    {

        id: 1,
        que: "qu1",
        ans: "ans1"

    },
    {

        id: 2,
        que: "qu2",
        ans: "ans2"

    },
    {

        id: 3,
        que: "qu3",
        ans: "ans3"

    },

]

function Accordion() {

    const { index } = useSelector((state) => state.accordion);
    const dispatch = useDispatch()


    return (
        <>
            <div className='container my-4' >
                {

                    datas?.map((data, i) =>

                        <div key={data.id} >
                            <button onClick={() => dispatch(clickHandler(i))} >{data.que}</button>
                            <p style={{ display: index === i ? "block" : "none" }} >{data.ans}</p>
                        </div>

                    )

                }
            </div>

        </>
    )
}

export default Accordion
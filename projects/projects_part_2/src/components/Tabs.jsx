import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clickHandler } from '../features/tabs/tabsSlice';

const datas = [

    {

        id: 1,
        label: "label1",
        content: "label1 content"

    },
    {

        id: 2,
        label: "label2",
        content: "label2 content"

    },
    {

        id: 2,
        label: "label3",
        content: "label3 content"

    },

]

function Tabs() {

    const { openIndex } = useSelector((state) => state.tabs);
    const dispatch = useDispatch()

    return (
        <>
            <div className=' container my-4' >
                <ul className=' nav nav-tabs' >
                    {
                        datas.map((data, i) => <li className='nav-item' >

                            <button onClick={() => dispatch(clickHandler(i))} className={` nav-link ${openIndex === i ? "active" : ""} `} > {data.label} </button>

                        </li>)

                    }
                </ul>
                <div className=' w-100' >
                    <p> {datas[openIndex].content} </p>
                </div>
            </div>

        </>
    )
}

export default Tabs
import React from 'react'
import styles from "../css/contact.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { setTabs } from '../features/tabs/tabsSlice'

const datas = [

    {

        name: "ronak poddar",
        content: "Ronak poddar is good guy, have skills in gst and communication",


    },
    {

        name: "hareKrishna",
        content: "hare krishna choose right field , currently he give interviews to gain confidence ",


    },
    {

        name: "roshan gupta",
        content: "roshan gupta is intelligent guy, he was completed degree in parul university",


    },

]

function Tabs() {

    const { tabs } = useSelector((state) => state.tabs)
    const dispatch = useDispatch()

    return (
        <>
            <div className={`${styles.mtop}`} >
                <ul className='nav nav-tabs d-flex gap-3' >
                    {
                        datas.map((data, index) => <li className='nav-item' >
                            <button className='nav-link' onClick={() => dispatch(setTabs(index))} >{data.name}</button>
                        </li>)
                    }
                </ul>
                <div className='' >
                    {
                        datas[tabs].content
                    }
                </div>
            </div>

        </>
    )
}

export default Tabs
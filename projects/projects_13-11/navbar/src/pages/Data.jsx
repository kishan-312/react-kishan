import React from 'react'
import Table from '../components/Table'
import styles from "../css/crud.module.css"
import FilterDatas from '../components/FilterDatas'

function Data() {
    return (
        <>
            <div className={`${styles.topMargin} `} >
                <FilterDatas />
                <Table />
            </div>

        </>
    )
}

export default Data
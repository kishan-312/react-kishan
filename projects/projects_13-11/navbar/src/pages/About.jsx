import React from 'react'
import Accordion from '../components/Accordion'
import styles from "../css/loadData.module.css"
import LoadData from '../components/LoadData'

function About() {
    return (
        <>
            <Accordion />
            <div className={styles.mtop} >
                <LoadData />
            </div>
        </>
    )
}

export default About
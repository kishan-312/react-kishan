import React, { useState } from 'react'
import styles from "../css/accordion.module.css"


const datas = [


    {
        id: 1,
        name: "data1",
        content: "data1 content"

    },
    {
        id: 2,
        name: "data2",
        content: "data2 content"

    },
    {
        id: 3,
        name: "data3",
        content: "data3 content"

    },

]


function Accordion() {

    const [isOpen, setIsOpen] = useState(null)

    function clickHandler(id) {

        if (isOpen === id) {

            setIsOpen(null)

        }

        else {

            setIsOpen(id)

        }

    }

    return (
        <>
            <div className={styles.accordion} >
                {

                    datas.map((data, index) => <div key={data.id} >
                        <p className={styles.p} onClick={() => clickHandler(index)}  >{data.name}</p>
                        {
                            isOpen === index && <p  > {data.content}  </p>
                        }
                    </div>)

                }
            </div>

        </>
    )
}

export default Accordion
import React, { useState } from 'react'

function DisplayMessageListEmpty() {

    const [lists, setLists] = useState([])
    function addData() {

        setLists((prev) => [...prev, `item ${prev + 1} `])

    }

    return (
        <>
            <button onClick={addData} >Add</button>
            <ul>
                {

                    lists.length === 0 ? <li> empty Lists </li> : lists.map((list) => <li> {list} </li>)

                }
            </ul>

        </>
    )
}

export default DisplayMessageListEmpty
import React, { useState } from 'react'

function AddItemToList() {

    const [lists, setLists] = useState(["item1"]);

    function addData() {

        setLists((prev) => [...prev, `item ${prev.length + 1} `])


    }


    return (
        <>

            <button onClick={addData} > Add Data </button>
            <ul>
                {

                    lists.map((list, i) => <li key={i} > {list} </li>)

                }
            </ul>
        </>
    )
}

export default AddItemToList
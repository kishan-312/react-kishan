import React, { useState } from 'react'

function DeleteItemToLists() {

    const [datas, setDatas] = useState([]);
    function addData() {

        setDatas((prev) => [...prev, `item ${prev.length + 1} `])


    }

    function deleteHandler(id) {

        const data = datas.filter((data, i) => i !== id);
        setDatas(data)

    }


    return (
        <>

            <button onClick={addData} > Add Data </button>
            <ul>
                {

                    datas.map((data, i) => <div key={i}  >
                        <li> {data}  <button onClick={() => deleteHandler(i)} >Delete</button> </li>
                    </div>)

                }
            </ul>

        </>
    )
}

export default DeleteItemToLists
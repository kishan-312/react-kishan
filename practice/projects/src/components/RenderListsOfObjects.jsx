import React from 'react'

function RenderListsOfObjects() {

    const lists = [{ id: 1, name: "kishan" }, { id: 12, name: "vinay" },];



    return (
        <>

            <ul>
                {
                    lists.map((ele, i) => <li key={ele.id} >{ele.name}</li>)
                }
            </ul>
        </>
    )
}

export default RenderListsOfObjects
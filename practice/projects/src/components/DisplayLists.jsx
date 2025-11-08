import React from 'react'

function DisplayLists() {

    const lists = ["kishan", "smit", "hello", "hi"]

    return (
        <>

            <ul>
                {
                    lists.map((ele, i) => <li key={i} >{ele}</li>)

                }
            </ul>

        </>
    )
}

export default DisplayLists
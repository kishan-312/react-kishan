import React, { useState } from 'react'

function Sorting() {

    const datas = ["a", "b", "c", "d"];
    const [sortData, setSortData] = useState(datas)
    const [sortOrder, setSortOrder] = useState("asc")
    let sortedLists;
    if (sortOrder === "asc") {

        sortedLists = datas.toSorted();

    }

    else {

        sortedLists = datas.toSorted().reverse()

    }



    return (
        <>

            <ul>
                {
                    sortedLists.map((data, i) => <li key={i} > {data} </li>)
                }
            </ul>
            <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")} > {sortOrder === "asc" ? "desc" : "asc"} </button>

        </>
    )
}

export default Sorting
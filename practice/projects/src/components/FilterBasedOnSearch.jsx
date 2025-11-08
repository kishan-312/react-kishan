import React, { useState } from 'react'

function FilterBasedOnSearch() {

    const names = ["kishan", "vinay", "smit"]
    const [text, setText] = useState("")
    const filterNames = names.filter((ele, i) => ele.includes(text))


    return (
        <>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <ul>
                {

                    filterNames.map((ele, i) => <li key={i} >{ele}</li>)

                }
            </ul>

        </>
    )
}

export default FilterBasedOnSearch
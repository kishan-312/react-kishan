import React, { useEffect, useState } from 'react'

function FetchApiData() {

    const [datas, setDatas] = useState([])
    console.log(datas);


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/todos?_limit=5").then((res) => res.json()).then(setDatas
        ).catch((err) => console.log(err))


    }, [])

    return (
        <>


        </>
    )
}

export default FetchApiData
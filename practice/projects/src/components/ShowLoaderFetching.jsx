import React, { useEffect, useState } from 'react'

function ShowLoaderFetching() {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(users);


    useEffect(() => {

        fetch("https://jsonplaceholder.typicode.com/users?_limit=4").then((res) => res.json()).then((res) => setUsers(res)).catch((err) => console.log(err)
        ).finally(() => setLoading(false))


    }, [])


    return (
        <>
            <div>
                {

                    loading ? "...loading" : <ul>
                        {
                            users.map((user) => <li> {user.name} </li>)
                        }
                    </ul>

                }
            </div>

        </>
    )
}

export default ShowLoaderFetching
import React, { useState } from 'react'

function ToggleLight() {

    const [light, setLight] = useState(false)

    return (
        <>

            <div className='container my-4 d-grid gap-4' >
                <h3>Toggle Light</h3>
                <div style={{ width: "80px", height: "80px", border: "1px solid black", background: light ? "yellow" : "black" }} >

                </div>
                <button className='btn btn-primary' style={{ width: "fit-content" }} onClick={() => setLight(!light)}  > {light ? "Light Off" : "Light On"} </button>
            </div>

        </>
    )
}

export default ToggleLight
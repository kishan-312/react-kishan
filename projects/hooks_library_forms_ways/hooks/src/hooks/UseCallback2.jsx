import React from 'react'

function UseCallback2({ handler }) {
    return (
        <>
            <button onClick={handler} >inc</button>

        </>
    )
}

export default React.memo(UseCallback2)
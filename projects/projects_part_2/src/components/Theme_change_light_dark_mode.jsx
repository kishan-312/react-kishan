import React, { useEffect, useState } from 'react'
import "../index.css"

function Theme_change_light_dark_mode() {

    const [theme, setTheme] = useState(() => {

        return localStorage.getItem("theme") || "light"

    })

    useEffect(() => {

        document.documentElement.className = theme;
        localStorage.setItem("theme", theme)


    }, [theme])

    return (
        <>
            <div className={`w-100 h-25 p-4 `} >
                <button onClick={() => setTheme(theme === "light" ? "dark" : "light")} > {theme === "light" ? "dark" : "light"} </button>

            </div>

        </>
    )
}

export default Theme_change_light_dark_mode
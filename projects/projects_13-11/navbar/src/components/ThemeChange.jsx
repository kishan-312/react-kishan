import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../features/theme/themeChangeSlice'

function ThemeChange() {

    const { theme } = useSelector((state) => state.theme)
    const dispatch = useDispatch()

    useEffect(() => {

        document.documentElement.classList = theme

    })

    return (
        <>

            <button onClick={() => dispatch(setTheme(theme === "light" ? "dark" : "light"))} > {theme === "light" ? "dark" : "light"}  </button>

        </>
    )
}

export default ThemeChange
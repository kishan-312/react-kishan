import React, { useState } from 'react'
import { themeContext } from './themeContext'

function ThemeContextProvider({ children }) {

    const [name, setName] = useState("kishan")

    return (
        <themeContext.Provider value={{ name }} >
            {

                children
            }

        </themeContext.Provider>
    )
}

export default ThemeContextProvider
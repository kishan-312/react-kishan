import { useDispatch, useSelector } from "react-redux"
import darkMode from "../../assets/images/theme/dark-mode-button.png"
import lightMode from "../../assets/images/theme/light-mode-button.png"
import type { RootState } from "../../app/store";
import { useEffect } from "react";
import { toggleTheme } from "../../features/theme/themeSlice";

function DarkMode() {

    const {theme} = useSelector((state : RootState ) => state.theme ) ;
    const dispatch = useDispatch()

    useEffect(() => {

        if(theme === "dark") {

            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")

        }

        else {

            document.documentElement.classList.remove("dark")
            localStorage.setItem("theme", "light")


        }

    }, [theme] )

  return (
    <div className=" relative" >
        <img src={lightMode} alt="darkMode" onClick={() => dispatch(toggleTheme()) } className={`absolute right-0 z-10 w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300  ${theme === "dark" ? "opacity-100" : "opacity-0" }`} />
        <img src={darkMode} onClick={() => dispatch(toggleTheme()) } className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300  ${theme === "light" ? "opacity-100" : "opacity-0" }`}  />
    </div>
  )
}

export default DarkMode
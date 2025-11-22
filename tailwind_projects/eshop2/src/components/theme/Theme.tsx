import light_mode from "../../assets/images/themes/light-mode-button.png" ;
import dark_mode from "../../assets/images/themes/dark-mode-button.png" ;
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { setTheme } from "../../features/theme/themeSlice";

function Theme() {

    const { theme } = useSelector((state : RootState ) => state.theme );
    const dispatch = useDispatch()

    useEffect(() => {

        if(theme === "dark" ) {

            document.documentElement.classList.add("dark");
            localStorage.setItem("theme2","dark")

        }

        else {

            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme2","light")


        }


    }, [theme] )

  return (
    <>
        <div className='relative' >
            <img src={light_mode} alt="light_mode" onClick={() => dispatch(setTheme()) } className={`absolute right-0 w-12 z-10 transition-all duration-300 ease-in-out cursor-pointer drop-shaodw-[1px_1px_1px_rgba(0,0,0,0.1)] ${theme === "light" ? "opacity-100" : "opacity-0" } `} />
            <img src={dark_mode} alt="light_mode" onClick={() => dispatch(setTheme()) } className={`w-12 transition-all duration-300 ease-in-out drop-shaodw-[1px_1px_1px_rgba(0,0,0,0.1)] ${theme === "dark" ? "opacity-100" : "opacity-0" } `}  />
        </div>
    </>
  )
}

export default Theme
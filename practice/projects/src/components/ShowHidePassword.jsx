import { useState } from 'react'
import { FaEye, FaEyeSlash } from "react-icons/fa6";

export const ShowHidePassword = () => {

    const [txt, setText] = useState("")
    const [showPassword, setShowPassword] = useState(false)
    console.log(txt);


    function handlePassword() {

        setShowPassword(!showPassword)

    }

    const Icon = showPassword ? FaEyeSlash : FaEye

    return (
        <>

            <div className=' container my-4' >
                <div style={{ position: "relative", width: "max-content", }} >
                    <input type={showPassword ? "text" : "password"} value={txt} style={{ padding: "4px" }} onChange={(e) => setText(e.target.value)} placeholder='enter Your Password' />
                    <Icon onClick={handlePassword} style={{ position: "absolute", right: "5px", top: "10px" }} />
                </div>
            </div>

        </>
    )
}

import { NavLink } from 'react-router-dom'
import { IoClose, IoMenu } from "react-icons/io5"
import styles from "../css/navbar.module.css"
import { useEffect, useState } from 'react'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

    function toggleHandler() {

        setIsOpen(!isOpen)

    }

    function openHandler() {

        setIsOpen(true)

    }

    function closeHandler() {

        setIsOpen(false)

    }

    useEffect(() => {

        function resizeHandler() {

            if (window.innerWidth > 576) {

                setIsOpen(false)

            }

        }

        window.addEventListener("resize", resizeHandler)

        return () => window.removeEventListener("resize", resizeHandler)


    }, [])


    return (
        <>
            <header className={styles.header} >
                <h1>KISMI<span className={styles.span} >CODE</span></h1>
                <nav>
                    <ul className={styles.ul} >
                        <li><NavLink to={"/"} className={({ isActive }) => `${styles.a} ${isActive ? styles.navActive : ""}`} >Home</NavLink></li>
                        <li><NavLink to={"/about"} className={({ isActive }) => `${styles.a} ${isActive ? styles.navActive : ""}`} >About</NavLink></li>
                        <li><NavLink to={"/contact"} className={({ isActive }) => `${styles.a} ${isActive ? styles.navActive : ""}`} >Contact</NavLink></li>
                        <li><NavLink to={"/data"} className={({ isActive }) => `${styles.a} ${isActive ? styles.navActive : ""}`} >Data</NavLink></li>
                    </ul>
                    {
                        isOpen ? <IoClose className={styles.menu} onClick={toggleHandler} /> : <IoMenu className={styles.menu} onClick={toggleHandler} />
                    }
                    <ul className={`${styles.ul2} ${isOpen ? styles.menuClick : ""} `} >
                        <li><NavLink to={"/"} onClick={closeHandler} className={({ isActive }) => `${isActive ? styles.navActive : ""}`} >Home</NavLink></li>
                        <li><NavLink to={"/about"} onClick={closeHandler} className={({ isActive }) => `${isActive ? styles.navActive : ""}`} >About</NavLink></li>
                        <li><NavLink to={"/contact"} onClick={closeHandler} className={({ isActive }) => `${isActive ? styles.navActive : ""}`} >Contact</NavLink></li>
                        <li><NavLink to={"/data"} onClick={closeHandler} className={({ isActive }) => `${isActive ? styles.navActive : ""}`} >Data</NavLink></li>
                    </ul>
                </nav>
            </header >

        </>
    )
}

export default Navbar
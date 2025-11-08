import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../css/navbar2.module.css"
import { IoClose, IoMenu } from 'react-icons/io5'

function Navbar2() {

    const [isOpen, setIsopen] = useState(false);

    function toggleHandler() {

        setIsopen(!isOpen)

    }

    function closeHandler() {

        setIsopen(false)

    }

    useEffect(() => {

        function handleResize() {

            if (window.innerWidth > 576) {

                setIsopen(false)

            }

        }

        window.addEventListener("resize", handleResize);

        return () => window.addEventListener("resize", handleResize);


    }, [])

    return (
        <>
            <header className={styles.header} >
                <h2>KISMI<span>CODE</span></h2>
                <nav>
                    <ul className={styles.ul} >
                        <li> <NavLink to={"/"} className={({ isActive }) => `${isActive ? "" : ""}`} >Home</NavLink> </li>
                        <li> <NavLink to={"/"} className={({ isActive }) => `${isActive ? "" : ""}`} >About</NavLink> </li>
                        <li> <NavLink to={"/"} className={({ isActive }) => `${isActive ? "" : ""}`} >Contact</NavLink> </li>
                    </ul>
                    {

                        isOpen ? <IoClose className={styles.menu} onClick={toggleHandler} />
                            : <IoMenu className={styles.menu} onClick={toggleHandler} />

                    }

                    <ul className={`${styles.ul2} ${isOpen ? styles.showMenu : ""}`} >
                        <li> <NavLink to={"/"} onClick={closeHandler} className={({ isActive }) => `${isActive ? "" : ""}`} >Home</NavLink> </li>
                        <li> <NavLink to={"/"} onClick={closeHandler} className={({ isActive }) => `${isActive ? "" : ""}`} >About</NavLink> </li>
                        <li> <NavLink to={"/"} onClick={closeHandler} className={({ isActive }) => `${isActive ? "" : ""}`} >Contact</NavLink> </li>
                    </ul>
                </nav>
            </header>

        </>
    )
}

export default Navbar2
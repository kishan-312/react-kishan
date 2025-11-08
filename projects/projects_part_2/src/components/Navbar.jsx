import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import styles from "../css/navbar.module.css"
import { IoClose, IoMenu } from 'react-icons/io5'

function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {

        setMenuOpen(!menuOpen)

    }

    function closeMenu() {

        setMenuOpen(false)

    }

    useEffect(() => {

        function handleResize() {

            if (window.innerWidth > 576) {

                setMenuOpen(false)

            }

        }

        window.addEventListener("resize", handleResize)
        return () => window.addEventListener("resize", handleResize)


    }, [])

    return (
        <>
            <header className={styles.header} >
                <h2 className={styles.h2} >KISMI<span>CODE</span> </h2>
                <nav>
                    <ul className={styles.ul} >
                        <li> <NavLink to={"/"} className={({ isActive }) => ` ${styles.NavLink} ${isActive ? styles.active : ""} `} >Home  </NavLink> </li>
                        <li> <NavLink to={"/about"} className={({ isActive }) => `${styles.NavLink} ${isActive ? styles.active : ""} `} >About  </NavLink> </li>
                        <li> <NavLink to={"/contact"} className={({ isActive }) => `${styles.NavLink} ${isActive ? styles.active : ""} `} >Contact  </NavLink> </li>
                    </ul>
                    {
                        menuOpen ? <IoClose className={styles.menu} onClick={toggleMenu} /> : <IoMenu className={styles.menu} onClick={toggleMenu} />
                    }
                    <ul className={`${styles.ul2} ${menuOpen ? styles.showMenu : ""} `} >
                        <li> <NavLink to={"/"} onClick={closeMenu} className={({ isActive }) => ` ${styles.NavLink} ${isActive ? styles.active : ""} `} >Home  </NavLink> </li>
                        <li> <NavLink to={"/about"} onClick={closeMenu} className={({ isActive }) => `${styles.NavLink} ${isActive ? styles.active : ""} `} >About  </NavLink> </li>
                        <li> <NavLink to={"/contact"} onClick={closeMenu} className={({ isActive }) => `${styles.NavLink} ${isActive ? styles.active : ""} `} >Contact  </NavLink> </li>
                    </ul>
                </nav>


            </header >

        </>
    )
}

export default Navbar
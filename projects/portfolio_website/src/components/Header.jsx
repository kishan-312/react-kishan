import React, { useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import { IoCartOutline, IoSearch } from "react-icons/io5";
import { Link } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const lists = [
    {
      list: "home",
      to: "/",
    },
    {
      list: "about",
      to: "/about",
    },
    {
      list: "contact",
      to: "/contact",
    },
    {
      list: "signup",
      to: "/signup",
    },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(setMenuOpen);

  function handleClickMenu() {
    setMenuOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header>
        <div className="navbar container">
          <div className="logo">
            <h2>
              KISMI<span className="logo-color">CODE</span>
            </h2>
          </div>
          <nav className="nav">
            <ul className="">
              {lists.map(({ list, to }) => (
                <li key={list}>
                  <Link to={`${to}`}>
                    {list.charAt(0).toUpperCase() + list.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="searchbar-cart">
            <div className="searchBar">
              <input type="text" placeholder="What are you looking for ?" />
              <IoSearch className="searchIcon i" />
            </div>
            <div className="cart-icons">
              <FaRegHeart className=" i" />
              <IoCartOutline className="i" />
            </div>
          </div>
          <div className="menuContainer">
            {menuOpen ? (
              <IoMdClose className="menu i" onClick={handleClickMenu} />
            ) : (
              <IoMdMenu className="menu i" onClick={handleClickMenu} />
            )}
          </div>

          <nav className={`nav2 ${menuOpen ? "menuadd" : ""} `}>
            <ul className="">
              {lists.map(({ list, to }) => (
                <li key={list}>
                  <Link to={`${to}`}>
                    {list.charAt(0).toUpperCase() + list.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;

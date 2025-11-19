import React from "react";
import logo2 from "../../assets/images/logo/logo2.png";
import { Link, NavLink } from "react-router-dom";

const navLinkDatas = [
  { name: "services" },
  { name: "technologies" },
  { name: "industries" },
  { name: "portfolio" },
  { name: "insights" },
  { name: "about" },
  { name: "contact" },
];

function Header() {
  return (
    <header className="flex justify-between items-center w-full h-[90px] bg-[#0A2A4A] px-6">
      
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img className="h-[70px] object-contain" src={logo2} alt="tatva" />
        </Link>
      </div>

      {/* Navigation */}
      <nav className="h-full">
        <ul className="flex items-center gap-8 h-full">
          {navLinkDatas.map((data) => (
            <NavLink
              key={data.name}
              to={`/${data.name}`}
              className="relative h-full flex items-center group"
            >
              {({ isActive }) => (
                <div className="h-full flex flex-col items-center justify-center px-3 relative">
                  
                  {/* Text */}
                  <span
                    className={`text-white text-sm tracking-wide transition-opacity duration-200 ${
                      isActive ? "opacity-100" : "opacity-75 group-hover:opacity-100"
                    }`}
                  >
                    {data.name.toUpperCase()}
                  </span>

                  {/* Underline (Active + Hover) */}
                  <span
                    className={`absolute bottom-0 rounded-full transition-all duration-300
                      h-[3px] bg-white
                      ${isActive ? "w-8 left-1/2 -translate-x-1/2" : "w-0 left-1/2 -translate-x-1/2 group-hover:w-8"}
                    `}
                  ></span>

                </div>
              )}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

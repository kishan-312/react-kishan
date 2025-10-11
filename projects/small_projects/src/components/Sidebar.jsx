import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { togglesidebar } from "../features/sidebar/sidebarSlice";

const sidebarLists = ["Home", "About", "Contact"];

const Sidebar = () => {
  const { isOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  return (
    <>
      <div className="d-flex">
        <button
          className="btn btn-primary m-3"
          style={{ height: "max-content" }}
          onClick={() => dispatch(togglesidebar())}
        >
          {" "}
          {isOpen ? "close Sidebar" : "open Sidebar"}{" "}
        </button>

        {isOpen && (
          <div
            className="bg-dark text-white p-3"
            style={{
              height: "100vh",
              width: isOpen ? "200px" : "0px",
              transition: "width 0.4s ease",
              overflow: "hidden",
            }}
          >
            <h4>Sidebar</h4>
            <ul className="list-unstyled">
              {sidebarLists.map((list, index) => (
                <li className="" key={index}>
                  {list}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Sidebar;

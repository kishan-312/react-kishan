import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDropdown,
  toggleDropdown,
} from "../features/dropdown/dropdownSlice";

const dropDownLists = ["option1", "option2", "option3"];

const Dropdown = () => {
  const { isOpen } = useSelector((state) => state.dropdown);
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        dispatch(closeDropdown());
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dispatch]);

  return (
    <>
      <div className=" my-4 container " ref={dropdownRef}>
        <button
          className="btn btn-info"
          onClick={() => dispatch(toggleDropdown())}
        >
          Select Options
        </button>

        {isOpen && (
          <ul className="list-group">
            {dropDownLists.map((list, index) => (
              <li
                className="list-group-item list-group-active"
                key={index}
                onClick={() => dispatch(closeDropdown())}
              >
                {" "}
                {list}{" "}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default Dropdown;

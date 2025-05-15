import React, { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import CustomImage from "../CustomImage";

const NavbarDropdown = ({ onLogout, onclick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="w-auto gap-2 px-2 bg-white py-1 items-center border-indigo border rounded-full flex flex-row cursor-pointer"
        onClick={handleToggle}
      >
        <div className="rounded-full bg-gray-800 p-1 flex items-center justify-center">
          <div className="w-5 h-5">
            <CustomImage name="userIcon" />
          </div>
        </div>

        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow z-10">
          <button
            onClick={() => {
              setIsOpen(false);
              onclick();
            }}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            Profile
          </button>
          <button
            onClick={() => {
              setIsOpen(false);
              onLogout();
            }}
            className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

NavbarDropdown.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

export default NavbarDropdown;

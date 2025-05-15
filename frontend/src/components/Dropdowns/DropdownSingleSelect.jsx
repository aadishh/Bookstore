import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const DropdownSingleSelect = ({
  data,
  onClick,
  placeHolder,
  disabled,
  value,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value);
  const dropdownRef = useRef();

  const handleToggle = () => setIsOpen(!isOpen);

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
    <div className="relative w-full" ref={dropdownRef}>
      <div
        className={`gap-2 px-2 mx-5 py-4 ${
          disabled ? "bg-[#EFEFEF]" : "bg-white"
        }  rounded-lg items-center flex justify-between flex-row cursor-pointer`}
        onClick={handleToggle}
      >
        {selectedItem || placeHolder}

        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {isOpen && !disabled && (
        <div className="absolute mt-2 shadow z-10 bg-white rounded-lg w-full">
          {data.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                setIsOpen(false);
                setSelectedItem(item);
                onClick(item);
              }}
              className="block px-4 py-2 text-left text-sm hover:bg-gray-100 w-full"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

DropdownSingleSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
};

export default DropdownSingleSelect;

import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import CustomImage from "../CustomImage";

const DropdownSingleSelect = ({
  data,
  onClick,
  placeHolder,
  disabled,
  editable = true,
  handleChange,
  value,
  isEdit,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value);
  const dropdownRef = useRef();
  const [disable, setDisable] = useState(editable);

  const handleToggle = () => !disable && setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    setSelectedItem(value);
  }, [value]);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      {isEdit ? (
        <div className="relative w-full mx-5 " ref={dropdownRef}>
          <div
            className={`rounded-lg gap-3 px-4 flex flex-row items-center justify-between  ${
              disable ? "bg-gray-100 border border-gray-200" : "bg-white"
            } `}
          >
            <div
              className={`gap-2 px-2 py-4 w-full items-center flex justify-between flex-row cursor-pointer 
                disable ? "shadow-sm" : ""
                `}
              onClick={handleToggle}
            >
              {selectedItem || placeHolder}
            </div>
            {disable ? (
              <div
                className={`flex ${
                  disable
                    ? "cursor-pointer hover:bg-white "
                    : "hover:bg-gray-100 cursor-pointer "
                }  p-3 rounded-full`}
                onClick={() => setDisable(false)}
              >
                <div className="w-3 h-3">
                  <CustomImage name="editButton" />
                </div>
              </div>
            ) : (
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
            )}
          </div>
          {isOpen && !disable && (
            <div className="absolute botttom-0 shadow z-10 bg-white rounded-lg w-full  max-h-[150px] overflow-y-auto">
              {data.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsOpen(false);
                    setSelectedItem(item);
                    onClick(item);
                  }}
                  onChange={handleChange}
                  className="block pl-4 py-2 text-left text-sm hover:bg-gray-100 w-full"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      ) : (
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

          {isOpen && !disable && (
            <div className="absolute mt-2 shadow z-10 bg-white rounded-lg w-full">
              {data.map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsOpen(false);
                    setSelectedItem(item);
                    onClick(item);
                  }}
                  onChange={handleChange}
                  className="block px-4 py-2 text-left text-sm hover:bg-gray-100 w-full"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

DropdownSingleSelect.propTypes = {
  data: PropTypes.arrayOf(PropTypes.any).isRequired,
  onClick: PropTypes.func.isRequired,
  handleChange: PropTypes.func,
  placeHolder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  isEdit: PropTypes.bool,
  editable: PropTypes.bool,
};

export default DropdownSingleSelect;

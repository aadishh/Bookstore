import React, { useState } from "react";
import PropTypes from "prop-types";
import CustomImage from "./CustomImage";

const CustomInputFeild = ({
  type,
  placeholder,
  value,
  onChange,
  disabled = false,
  showError,
  isEdit = false,
}) => {
  const [disable, setDisable] = useState(true);
  return (
    <>
      {isEdit ? (
        <div
          className={`flex flex-row items-center justify-between focus-within:border-indigo w-full px-3 py-4 rounded-lg mx-5
            ${disable ? "bg-gray-100 " : " bg-white "}
            ${showError ? "border-2 border-red-600" : "border border-gray-200"}
            `}
        >
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className="w-full outline-none"
            disabled={disable}
          />
          {disable && (
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
          )}
        </div>
      ) : (
        <div className="flex w-full ">
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full px-3 drop-shadow-md py-4 rounded-lg mx-5  ${
              showError ? "border-red-600 border-2 " : "border border-gray-200"
            }   focus:outline-indigo`}
            disabled={disabled}
          />
        </div>
      )}
    </>
  );
};

CustomInputFeild.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  showError: PropTypes.bool,
  isEdit: PropTypes.bool,
};

export default CustomInputFeild;

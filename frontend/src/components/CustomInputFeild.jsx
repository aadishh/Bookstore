import React from "react";
import PropTypes from "prop-types";

const CustomInputFeild = ({type,placeholder,value,onChange,disabled,showError}) => {
  return (
    <div className="flex w-full ">
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 drop-shadow-md py-4 rounded-lg mx-5  ${showError ? 'border-red-600 border-2 ': 'border border-gray-200'}   focus:outline-indigo`}
        disabled={disabled || false}
      />
    </div>
  );
};

CustomInputFeild.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    showError: PropTypes.bool,
};

export default CustomInputFeild;

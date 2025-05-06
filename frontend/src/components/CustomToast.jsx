import React, { useEffect } from "react";

const CustomToast = () => {
  const { toastText, toastType, showToast, hideToast, updateCustomToast } =
    useGlobalContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
    }, 3000);
    return () => clearTimeout(timer);
  },[showToast]);

  const headingTextColor = () => {
    switch (toastType) {
      case "success":
        return "text-green-500";
      case "error":
        return "text-red-500";
      case "info":
        return "text-blue-500";
      default:
        return "";
    }
  };

  const headingText = () => {
    switch (toastType) {
      case "success":
        return "Success";
      case "error":
        return "Error";
      case "info":
        return "Info";
      default:
        return "";
    }
  };

  const toastIcon = () => {
    switch (toastType) {
      case "success":
        return "✓";
      case "error":
        return "✗";
      case "info":
        return "ℹ️";
      default:
        return "";
    }
  };

  return (
    <>
      {showToast && (
        <div
          className={`fixed bottom-0 right-0 m-4 p-4 bg-white shadow-lg rounded-lg ${headingTextColor()}`}
        >
          <div className="flex items-center">
            <span className="text-2xl mr-2">{toastIcon()}</span>
            <h3 className={`text-lg font-bold ${headingTextColor()}`}>
              {headingText()}
            </h3>
          </div>
          <p>{toastText}</p>
        </div>
      )}
    </>
  );
};

CustomToast.propTypes = {};

export default CustomToast;

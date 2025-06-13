import React, { useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";

const CustomToast = () => {
  const { toastText, toastType, showCustomToast, hideToast } =
    useGlobalContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      hideToast();
    }, 1000);
    return () => clearTimeout(timer);
  }, [showCustomToast]);

  const headingTextColor = () => {
    switch (toastType) {
      case "SUCCESS":
        return "text-green-500";
      case "ERROR":
        return "text-red-500";
      case "INFO":
        return "text-blue-500";
      default:
        return "";
    }
  };

  const headingText = () => {
    switch (toastType) {
      case "SUCCESS":
        return "SUCCESS";
      case "ERROR":
        return "ERROR";
      case "INFO":
        return "INFO";
      default:
        return "";
    }
  };

  const toastIcon = () => {
    switch (toastType) {
      case "SUCCESS":
        return "✓";
      case "ERROR":
        return "✗";
      case "INFO":
        return "ℹ️";
      default:
        return "";
    }
  };

  return (
    <>
      {showCustomToast && (
        <div
          className={`fixed w-auto top-0 right-0 m-4 px-5 py-3 bg-white shadow-lg rounded-lg ${headingTextColor()}`}
        >
          <div className="bg-white flex flex-col  items-center gap-4">
            <div className="text-base flex items-center gap-2">
              {toastIcon()} {headingText()}{" "}
              <span className="text-sm text-black">{toastText}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

CustomToast.propTypes = {};

export default CustomToast;

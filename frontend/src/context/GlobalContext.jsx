import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

const GlobalContextProvider = (props) => {
  const [showCustomToast, setShowCustomToast] = useState(props.showCustomToast);
  const [toastType, setToastType] = useState(props.toastType);
  const [toastText, setToastText] = useState(props.toastText);

  const hideToast = () => {
    setShowCustomToast(false);
  };

  const updateCustomToast = (_toastType, toastText) => {
    setShowCustomToast(true);
    setToastType(_toastType);
    setToastText(toastText);
  };

  return (
    <GlobalContext.Provider
      value={{
        updateCustomToast,
        showCustomToast,
        toastType,
        toastText,
        hideToast,
        setShowCustomToast,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

// STEP 3: Hook to use Context
const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalContextProvider");
  }
  return context;
};

// PropTypes for validation
GlobalContextProvider.propTypes = {
  updateCustomToast: PropTypes.func.isRequired,
  showCustomToast: PropTypes.bool.isRequired,
  toastType: PropTypes.oneOf(["SUCCESS", "ERROR", "INFO"]).isRequired,
  toastText: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

// Export the provider and hook
export { useGlobalContext, GlobalContextProvider };

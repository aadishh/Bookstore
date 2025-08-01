import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { GlobalContextProvider } from "./context/GlobalContext";
import { AuthProvider } from "./context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <GlobalContextProvider
          updateCustomToast={() => {}}
          showCustomToast={false}
          toastType="SUCCESS"
          toastText=""
        >
          <App />
        </GlobalContextProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();

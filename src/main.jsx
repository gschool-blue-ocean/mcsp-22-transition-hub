import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Components/Context/AuthContext";
import { UrlProvider } from "./Components/Context/UrlContext";
import { CohortProvider } from "./Components/Context/CohortContext.jsx";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UrlProvider>
        <CohortProvider>
          <App />
          <ToastContainer />
        </CohortProvider>
      </UrlProvider>        
    </AuthProvider>
  </React.StrictMode>
);

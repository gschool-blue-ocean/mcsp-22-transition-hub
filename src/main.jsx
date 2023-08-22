import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./Components/Context/AuthContext";
import { UrlProvider } from "./Components/Context/UrlContext";
import { CohortProvider } from "./Components/Context/CohortContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <UrlProvider>
        <CohortProvider>
          <App />
        </CohortProvider>
      </UrlProvider>        
    </AuthProvider>
  </React.StrictMode>
);

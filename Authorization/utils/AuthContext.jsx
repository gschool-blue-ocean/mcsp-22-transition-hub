import React from "react";
import { useContext, useState } from "react";

const AuthContext = React.createContext();
const AuthUpdateContext = React.createContext();

export function useAuthData() {
  return useContext(AuthContext);
}

export function useAuthDataUpdate() {
  return useContext(AuthUpdateContext);
}

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function updateAuthData(boolean) {
    setIsAuthenticated(boolean);
  }

  return (
    <AuthContext.Provider value={isAuthenticated}>
      <AuthUpdateContext.Provider value={updateAuthData}>
        {children}
      </AuthUpdateContext.Provider>
    </AuthContext.Provider>
  );
}

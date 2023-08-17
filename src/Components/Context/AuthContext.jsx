import React from "react";
import { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [roles, setRoles] = useState("");
  const [cohortsId, setCohortsId] = useState(0)


  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        roles,
        setRoles,
        cohortsId,
        setCohortsId
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthContext;

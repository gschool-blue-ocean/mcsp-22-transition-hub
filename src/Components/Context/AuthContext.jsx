import React from "react";
import { createContext, useState, useEffect, useContext } from "react";
// import { router } from 'react-router-dom';

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
// const AuthUpdateContext = React.createContext();

// export function useAuthData() {
//   return useContext(AuthContext);
// }

// export function useAuthDataUpdate() {
//   return useContext(AuthUpdateContext);
// }

// export function AuthProvider({ children }) {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   function updateAuthData(boolean) {
//     setIsAuthenticated(boolean);
//   }

//   return (
//     <AuthContext.Provider value={isAuthenticated}>
//       <AuthUpdateContext.Provider value={updateAuthData}>
//         {children}
//       </AuthUpdateContext.Provider>
//     </AuthContext.Provider>
//   );
//}

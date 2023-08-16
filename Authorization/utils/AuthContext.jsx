import React from "react";
import { createContext, useState, useEffect } from "react";
// import { router } from 'react-router-dom';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [roles, setRoles] = useState("");

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        roles,
        setRoles,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
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

import React from "react";
import { createContext, useState, useEffect } from "react";
// import { router } from 'react-router-dom';

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //all user id where role = student or manager
  //maybe two requests one for student or manager
  //export state

  // useEffect = () => {
  //     router.get('/users')
  // }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
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

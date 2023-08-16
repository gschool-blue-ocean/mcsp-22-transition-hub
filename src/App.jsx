import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthContext from "../Authorization/utils/AuthContext";
import { AuthProvider } from "../Authorization/utils/AuthContext";
import LogInPage from "./Components/Main Components/LogInPage";
import Manager from "./Components/Main Components/Manager";
import Student from "./Components/Main Components/Student";

function App() {
  // function PrivateRoute({ element, ...rest }) {
  //   const {isAuthenticated} = useContext(AuthContext)

  //   if (!isAuthenticated) {
  //     return <Navigate to="/" />;
  //   }

  //   return <Route element={element} {...rest} />;
  // }

  return (
    <>
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path='/' element={<LogInPage />}></Route>
            <Route path='/manager' element={<Manager />}></Route>
            <Route path='/student' element={<Student />}></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;

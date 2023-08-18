import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./Components/Context/AuthContext";
import { UrlProvider } from "./Components/Context/URLContext";
import LogInPage from "./Components/MainComponents/LogInPage";
import Manager from "./Components/MainComponents/Manager";
import Student from "./Components/MainComponents/Student";
import { CohortProvider } from "./Components/Context/CohortContext";

function App() {
  const isAuthenticated = true;
  const isManager = true;
  const isStudent = true;

  return (
    <AuthProvider>
      <UrlProvider >
            <CohortProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LogInPage />} ></Route>
              <Route path="/manager" element={isAuthenticated && isManager ? <Manager /> : <LogInPage/>} ></Route>
            <Route path="/student" element={isAuthenticated && isStudent ? <Student /> : <LogInPage />} ></Route>
          </Routes>
        </Router>
            </CohortProvider>
      </UrlProvider>
    </AuthProvider>
  );
}

export default App;

/*
  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
*/

import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "../Authorization/utils/AuthContext";
import LogInPage from "./Components/MainComponents/LogInPage";
import Manager from "./Components/MainComponents/Manager";
import Student from "./Components/MainComponents/Student";

function App() {


  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LogInPage />} />
          <Route path="/manager" element={<Manager />} />
          <Route path="/student" element={<Student />} />
        </Routes>
      </Router>
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
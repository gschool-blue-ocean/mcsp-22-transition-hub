import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./Components/Context/AuthContext";
import { UrlProvider } from "./Components/Context/UrlContext";
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
      <UrlProvider>
        <CohortProvider>
          <Router>
            <Routes>
              <Route path="/" element={<LogInPage />}></Route>
              <Route
                path="/manager"
                element={
                  isAuthenticated && isManager ? <Manager /> : <LogInPage />
                }
              ></Route>
              <Route
                path="/student"
                element={
                  isAuthenticated && isStudent ? <Student /> : <LogInPage />
                }
              ></Route>
            </Routes>
          </Router>
        </CohortProvider>
      </UrlProvider>
    </AuthProvider>
  );
}

export default App;

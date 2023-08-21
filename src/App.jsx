import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import { StudentProvider } from "./Components/Context/StudentContext";
import LogInPage from "./Components/MainComponents/LogInPage";
import Manager from "./Components/MainComponents/Manager";
import Student from "./Components/MainComponents/Student";


function App() {
  const isAuthenticated = true;
  const isManager = true;
  const isStudent = true;

  return (
    <StudentProvider>
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
    </StudentProvider>


  );
}

export default App;
